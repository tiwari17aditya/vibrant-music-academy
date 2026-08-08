import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Square, Sparkles, Music, Award, Disc, Mic, MicOff, CheckCircle, Radio } from 'lucide-react';
import { GUITAR_CHORDS_DATA, TRINITY_QUIZ_QUESTIONS } from '../data/academyData';

const GUITAR_TUNING_STRINGS = [
  { name: "6th String", note: "E2", freq: 82.41, description: "Low E" },
  { name: "5th String", note: "A2", freq: 110.00, description: "A" },
  { name: "4th String", note: "D3", freq: 146.83, description: "D" },
  { name: "3rd String", note: "G3", freq: 196.00, description: "G" },
  { name: "2nd String", note: "B3", freq: 246.94, description: "B" },
  { name: "1st String", note: "E4", freq: 329.63, description: "High E" }
];

const PIANO_KEYS = [
  { note: "C4", sargam: "Sa", type: "white", freq: 261.63 },
  { note: "C#4", sargam: "Re (k)", type: "black", freq: 277.18 },
  { note: "D4", sargam: "Re", type: "white", freq: 293.66 },
  { note: "D#4", sargam: "Ga (k)", type: "black", freq: 311.13 },
  { note: "E4", sargam: "Ga", type: "white", freq: 329.63 },
  { note: "F4", sargam: "Ma", type: "white", freq: 349.23 },
  { note: "F#4", sargam: "Ma (t)", type: "black", freq: 369.99 },
  { note: "G4", sargam: "Pa", type: "white", freq: 392.00 },
  { note: "G#4", sargam: "Dha (k)", type: "black", freq: 415.30 },
  { note: "A4", sargam: "Dha", type: "white", freq: 440.00 },
  { note: "A#4", sargam: "Ni (k)", type: "black", freq: 466.16 },
  { note: "B4", sargam: "Ni", type: "white", freq: 493.88 },
  { note: "C5", sargam: "Sa (T)", type: "white", freq: 523.25 }
];

// Open-Source Pitch Auto-Correlation Algorithm
function autoCorrelate(buf, sampleRate) {
  let SIZE = buf.length;
  let rms = 0;
  for (let i = 0; i < SIZE; i++) {
    let val = buf[i];
    rms += val * val;
  }
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.015) return -1; // Volume too low

  let r1 = 0, r2 = SIZE - 1, thres = 0.2;
  for (let i = 0; i < SIZE / 2; i++) {
    if (Math.abs(buf[i]) < thres) { r1 = i; break; }
  }
  for (let i = 1; i < SIZE / 2; i++) {
    if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; }
  }

  buf = buf.slice(r1, r2);
  SIZE = buf.length;

  let c = new Array(SIZE).fill(0);
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE - i; j++) {
      c[i] = c[i] + buf[j] * buf[j + i];
    }
  }

  let d = 0;
  while (c[d] > c[d + 1]) d++;
  let maxval = -1, maxpos = -1;
  for (let i = d; i < SIZE; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }
  let T0 = maxpos;

  let x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
  let a = (x1 + x3 - 2 * x2) / 2;
  let b = (x3 - x1) / 2;
  if (a) T0 = T0 - b / (2 * a);

  return sampleRate / T0;
}

const InteractiveTools = () => {
  const [activeTool, setActiveTool] = useState('metronome');

  // --- Web Audio Context Lazy Initialization ---
  const audioCtxRef = useRef(null);
  const activeTunerOscRef = useRef(null);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // --- Real-time Mic Tuner State ---
  const [isMicListening, setIsMicListening] = useState(false);
  const [detectedPitch, setDetectedPitch] = useState(null);
  const [detectedString, setDetectedString] = useState(null);
  const [centsDiff, setCentsDiff] = useState(0);
  const [tunerStatus, setTunerStatus] = useState("Listening for guitar string sound...");

  const micStreamRef = useRef(null);
  const analyserRef = useRef(null);
  const micAnimFrameRef = useRef(null);

  const startMicTuner = async () => {
    try {
      const ctx = getAudioContext();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      micStreamRef.current = stream;

      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyserRef.current = analyser;

      setIsMicListening(true);
      setTunerStatus("Pluck any guitar string (E A D G B E)...");

      const buf = new Float32Array(2048);

      const updatePitch = () => {
        analyser.getFloatTimeDomainData(buf);
        const pitch = autoCorrelate(buf, ctx.sampleRate);

        if (pitch !== -1 && pitch > 60 && pitch < 400) {
          setDetectedPitch(Math.round(pitch * 10) / 10);

          // Find nearest guitar string
          let closest = GUITAR_TUNING_STRINGS[0];
          let minDiff = Math.abs(pitch - closest.freq);

          for (let s of GUITAR_TUNING_STRINGS) {
            let diff = Math.abs(pitch - s.freq);
            if (diff < minDiff) {
              minDiff = diff;
              closest = s;
            }
          }

          setDetectedString(closest);

          // Calculate cents difference
          const cents = Math.round(1200 * Math.log2(pitch / closest.freq));
          setCentsDiff(cents);

          if (Math.abs(cents) <= 4) {
            setTunerStatus("IN TUNE! 🎉");
          } else if (cents < 0) {
            setTunerStatus("TOO FLAT (Tighten String 🔼)");
          } else {
            setTunerStatus("TOO SHARP (Loosen String 🔽)");
          }
        }

        micAnimFrameRef.current = requestAnimationFrame(updatePitch);
      };

      updatePitch();
    } catch (err) {
      console.error("Microphone access error:", err);
      alert("Microphone permission denied or not available. Please allow microphone access or use Reference Tone mode.");
    }
  };

  const stopMicTuner = () => {
    if (micAnimFrameRef.current) cancelAnimationFrame(micAnimFrameRef.current);
    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach(track => track.stop());
    }
    setIsMicListening(false);
    setDetectedPitch(null);
    setDetectedString(null);
    setCentsDiff(0);
    setTunerStatus("Listening for guitar string sound...");
  };

  // --- Metronome State ---
  const [bpm, setBpm] = useState(100);
  const [isPlayingMetronome, setIsPlayingMetronome] = useState(false);
  const [timeSignature, setTimeSignature] = useState(4);
  const [currentBeat, setCurrentBeat] = useState(0);
  const metronomeTimerRef = useRef(null);

  const playClickSound = (isAccent) => {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = isAccent ? 1000 : 800;

      const safeGain = 0.25;
      gainNode.gain.setValueAtTime(safeGain, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      console.error("Metronome audio error:", e);
    }
  };

  useEffect(() => {
    if (isPlayingMetronome) {
      const intervalMs = (60 / bpm) * 1000;
      let beatCounter = 0;

      metronomeTimerRef.current = setInterval(() => {
        const isAccent = beatCounter === 0;
        playClickSound(isAccent);
        setCurrentBeat(beatCounter + 1);
        beatCounter = (beatCounter + 1) % timeSignature;
      }, intervalMs);
    } else {
      clearInterval(metronomeTimerRef.current);
      setCurrentBeat(0);
    }

    return () => clearInterval(metronomeTimerRef.current);
  }, [isPlayingMetronome, bpm, timeSignature]);

  // --- Tuner Reference Tone State ---
  const [activeTuningNote, setActiveTuningNote] = useState(null);

  const playTunerTone = (stringObj) => {
    try {
      const ctx = getAudioContext();
      if (activeTunerOscRef.current) {
        activeTunerOscRef.current.stop();
        activeTunerOscRef.current.disconnect();
        activeTunerOscRef.current = null;
      }

      if (activeTuningNote?.note === stringObj.note) {
        setActiveTuningNote(null);
        return;
      }

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = stringObj.freq;

      gainNode.gain.setValueAtTime(0.2, ctx.currentTime);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      activeTunerOscRef.current = osc;
      setActiveTuningNote(stringObj);
    } catch (e) {
      console.error("Tuner tone error:", e);
    }
  };

  const stopTunerTone = () => {
    if (activeTunerOscRef.current) {
      activeTunerOscRef.current.stop();
      activeTunerOscRef.current.disconnect();
      activeTunerOscRef.current = null;
    }
    setActiveTuningNote(null);
  };

  // --- Piano Keys State & Playback ---
  const [activeKeyNote, setActiveKeyNote] = useState(null);

  const playPianoKey = (keyObj) => {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.value = keyObj.freq;

      const safeGain = 0.25;
      gainNode.gain.setValueAtTime(safeGain, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.2);

      setActiveKeyNote(keyObj.note);
      setTimeout(() => setActiveKeyNote(null), 300);
    } catch (e) {
      console.error("Piano key error:", e);
    }
  };

  // --- Guitar Chord Visualizer & Audio Synth ---
  const [selectedChord, setSelectedChord] = useState(GUITAR_CHORDS_DATA[0]);

  const playChordAudio = (chord) => {
    try {
      const ctx = getAudioContext();
      chord.frequencies.forEach((freq, idx) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gainNode = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.value = freq;

          const safeGain = 0.15;
          gainNode.gain.setValueAtTime(safeGain, ctx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);

          osc.connect(gainNode);
          gainNode.connect(ctx.destination);

          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 1.5);
        }, idx * 60);
      });
    } catch (e) {
      console.error("Chord synth error:", e);
    }
  };

  // --- Trinity Quiz State ---
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(null);

  const handleQuizOptionSelect = (option) => {
    const updated = [...quizAnswers, option];
    setQuizAnswers(updated);
    if (quizStep + 1 < TRINITY_QUIZ_QUESTIONS.length) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizResult(option.grade);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  return (
    <section id="tools" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> 100% Free Interactive Suite
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Student <span className="gradient-text">Music Toolkit</span>
          </h2>
          <p className="theme-text-muted">
            Interactive Web Audio utilities: Real-time Mic Tuner (GuitarTuna Style), Metronome, Playable Piano Keyboard Keys, Chord Charts & Trinity Quiz.
          </p>
        </div>

        {/* Toolkit Nav Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '3rem' }}>
          <button
            onClick={() => { stopTunerTone(); stopMicTuner(); setActiveTool('metronome'); }}
            className={`btn ${activeTool === 'metronome' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Volume2 size={18} /> Metronome
          </button>

          <button
            onClick={() => { stopTunerTone(); setActiveTool('tuner'); }}
            className={`btn ${activeTool === 'tuner' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Disc size={18} /> GuitarTuna-Style Mic Tuner
          </button>

          <button
            onClick={() => { stopTunerTone(); stopMicTuner(); setActiveTool('keys'); }}
            className={`btn ${activeTool === 'keys' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Music size={18} /> Piano Keys
          </button>

          <button
            onClick={() => { stopTunerTone(); stopMicTuner(); setActiveTool('chords'); }}
            className={`btn ${activeTool === 'chords' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Music size={18} /> Chord Visualizer
          </button>

          <button
            onClick={() => { stopTunerTone(); stopMicTuner(); setActiveTool('quiz'); }}
            className={`btn ${activeTool === 'quiz' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Award size={18} /> Trinity Quiz
          </button>
        </div>

        {/* Tool 1: Metronome */}
        {activeTool === 'metronome' && (
          <div className="theme-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Visual & Audio Metronome</h3>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              margin: '0 auto 2rem auto',
              background: currentBeat === 1 ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'rgba(255,255,255,0.05)',
              border: '3px solid var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: currentBeat === 1 ? '0 0 40px rgba(245, 158, 11, 0.6)' : 'none',
              transition: 'all 0.1s ease'
            }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 800, color: currentBeat === 1 ? '#0f1015' : 'var(--primary)' }}>
                {currentBeat > 0 ? currentBeat : bpm}
              </span>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              {bpm} BPM <span style={{ fontSize: '0.85rem', color: 'var(--text-dark-muted)' }}>({bpm < 80 ? 'Andante' : bpm < 120 ? 'Moderato' : 'Allegro'})</span>
            </div>
            <input
              type="range"
              min="40"
              max="240"
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              style={{ width: '100%', marginBottom: '2rem', accentColor: 'var(--primary)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
              {[3, 4, 6].map((ts) => (
                <button key={ts} onClick={() => setTimeSignature(ts)} className={`btn btn-sm ${timeSignature === ts ? 'btn-primary' : 'btn-secondary'}`}>
                  {ts}/4 Time
                </button>
              ))}
            </div>
            <button onClick={() => setIsPlayingMetronome(!isPlayingMetronome)} className="btn btn-primary btn-lg" style={{ width: '100%' }}>
              {isPlayingMetronome ? <><Square size={20} /> Stop Metronome</> : <><Play size={20} /> Start Metronome</>}
            </button>
          </div>
        )}

        {/* Tool 2: GuitarTuna-Style Interactive Mic Tuner & Gauge */}
        {activeTool === 'tuner' && (
          <div className="theme-card" style={{ maxWidth: '750px', margin: '0 auto', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', margin: 0, textAlign: 'left' }}>Interactive GuitarTuna Online Tuner</h3>
                <p className="theme-text-muted" style={{ margin: 0, fontSize: '0.88rem' }}>
                  Pluck any string! Detects pitch via microphone in real-time.
                </p>
              </div>

              {!isMicListening ? (
                <button onClick={startMicTuner} className="btn btn-primary">
                  <Mic size={18} /> Turn On Mic Auto-Tuner
                </button>
              ) : (
                <button onClick={stopMicTuner} className="btn btn-secondary" style={{ color: '#ef4444' }}>
                  <MicOff size={18} /> Stop Mic Tuner
                </button>
              )}
            </div>

            {/* GuitarTuna Visual Dial Gauge */}
            <div style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.08) 0%, rgba(13,15,20,0.8) 100%)',
              border: '2px solid var(--card-dark-border)',
              borderRadius: '20px',
              padding: '2rem 1.5rem',
              marginBottom: '2rem',
              position: 'relative'
            }}>
              
              {/* String Note Target Badge */}
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                margin: '0 auto 1.5rem auto',
                background: Math.abs(centsDiff) <= 4 && detectedString ? '#10b981' : 'var(--card-dark)',
                border: `4px solid ${Math.abs(centsDiff) <= 4 && detectedString ? '#10b981' : 'var(--primary)'}`,
                color: Math.abs(centsDiff) <= 4 && detectedString ? '#ffffff' : 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                fontWeight: 800,
                boxShadow: Math.abs(centsDiff) <= 4 && detectedString ? '0 0 40px #10b981' : '0 0 20px var(--primary-glow)',
                transition: 'all 0.2s ease'
              }}>
                {detectedString ? detectedString.note : "E"}
              </div>

              {/* Status Banner */}
              <div style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: Math.abs(centsDiff) <= 4 && detectedString ? '#10b981' : Math.abs(centsDiff) > 15 ? '#ef4444' : 'var(--primary)',
                marginBottom: '1.5rem'
              }}>
                {tunerStatus}
              </div>

              {/* Visual Meter & Needle Bar */}
              <div style={{ position: 'relative', width: '100%', height: '14px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', marginBottom: '1.5rem' }}>
                
                {/* Center Green Sweet Spot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '-4px',
                  bottom: '-4px',
                  width: '16px',
                  transform: 'translateX(-50%)',
                  background: '#10b981',
                  borderRadius: '4px',
                  boxShadow: '0 0 10px #10b981'
                }} />

                {/* Dynamic Needle Indicator */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: `${Math.min(Math.max(50 + centsDiff * 0.8, 5), 95)}%`,
                  transform: 'translateX(-50%)',
                  width: '6px',
                  height: '38px',
                  background: Math.abs(centsDiff) <= 4 ? '#10b981' : '#f59e0b',
                  borderRadius: '3px',
                  boxShadow: '0 0 15px var(--primary)',
                  transition: 'left 0.1s ease-out'
                }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#9ca3af', fontWeight: 600 }}>
                <span>FLAT (-50 cents)</span>
                <span>IN TUNE (0)</span>
                <span>SHARP (+50 cents)</span>
              </div>

              {detectedPitch && (
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-dark-muted)' }}>
                  Detected Pitch Frequency: <strong style={{ color: 'var(--primary)' }}>{detectedPitch} Hz</strong> | Target: {detectedString?.freq} Hz
                </div>
              )}
            </div>

            {/* Reference Pitch Audio Fallback Buttons */}
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.8rem', color: 'var(--primary)' }}>
                Or Play Pitch Reference Tones (Click to Listen):
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.8rem' }}>
                {GUITAR_TUNING_STRINGS.map((str, idx) => (
                  <button
                    key={idx}
                    onClick={() => playTunerTone(str)}
                    className="btn btn-secondary btn-sm"
                    style={{
                      border: activeTuningNote?.note === str.note ? '2px solid var(--primary)' : '1px solid var(--card-dark-border)',
                      background: activeTuningNote?.note === str.note ? 'rgba(245,158,11,0.2)' : 'transparent',
                      color: activeTuningNote?.note === str.note ? 'var(--primary)' : 'inherit',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span><strong>{str.note}</strong> ({str.name})</span>
                    <Volume2 size={14} />
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Tool 3: Playable Virtual Piano Keyboard Keys */}
        {activeTool === 'keys' && (
          <div className="theme-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Playable Keyboard Piano Keys</h3>
            <p className="theme-text-muted" style={{ marginBottom: '2rem', fontSize: '0.92rem' }}>
              Click keys to play Western notation & Indian Sargam pitch notes!
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              position: 'relative',
              padding: '1rem 0',
              overflowX: 'auto',
              background: '#0d0f14',
              borderRadius: '16px',
              border: '1px solid var(--card-dark-border)'
            }}>
              {PIANO_KEYS.map((keyObj, idx) => (
                <button
                  key={idx}
                  onClick={() => playPianoKey(keyObj)}
                  style={{
                    width: keyObj.type === 'white' ? '46px' : '32px',
                    height: keyObj.type === 'white' ? '180px' : '110px',
                    background: activeKeyNote === keyObj.note ? 'var(--primary)' : keyObj.type === 'white' ? '#ffffff' : '#1e293b',
                    color: keyObj.type === 'white' ? '#0f172a' : '#ffffff',
                    border: '1px solid #94a3b8',
                    borderRadius: '0 0 8px 8px',
                    cursor: 'pointer',
                    zIndex: keyObj.type === 'black' ? 10 : 1,
                    marginLeft: keyObj.type === 'black' ? '-16px' : '0',
                    marginRight: keyObj.type === 'black' ? '-16px' : '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    paddingBottom: '0.8rem',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    boxShadow: activeKeyNote === keyObj.note ? '0 0 20px var(--primary)' : 'none',
                    transition: 'all 0.1s ease'
                  }}
                >
                  <span>{keyObj.note}</span>
                  <span style={{ fontSize: '0.65rem', opacity: 0.8 }}>{keyObj.sargam}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tool 4: Guitar Chord Visualizer */}
        {activeTool === 'chords' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="theme-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem' }}>Select Guitar Chord</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem' }}>
                {GUITAR_CHORDS_DATA.map((chord, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedChord(chord)}
                    style={{
                      padding: '0.8rem',
                      borderRadius: '10px',
                      border: selectedChord.name === chord.name ? '2px solid var(--primary)' : '1px solid var(--card-dark-border)',
                      background: selectedChord.name === chord.name ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                      color: selectedChord.name === chord.name ? 'var(--primary)' : 'inherit',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {chord.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="theme-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.6rem', margin: 0 }}>{selectedChord.name}</h3>
                <button onClick={() => playChordAudio(selectedChord)} className="btn btn-primary btn-sm">
                  <Volume2 size={16} /> Play Audio Strum
                </button>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', border: '1px solid var(--card-dark-border)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.8rem', color: '#9ca3af' }}>
                  Fretboard String Layout (Low E to High E):
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                  {['6th (E)', '5th (A)', '4th (D)', '3rd (G)', '2nd (B)', '1st (E)'].map((s, i) => (
                    <div key={i} style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginBottom: '0.4rem' }}>{s}</div>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: selectedChord.strings[i] === 'x' ? 'rgba(239,68,68,0.2)' : selectedChord.strings[i] === 0 ? 'rgba(16,185,129,0.2)' : 'var(--primary)',
                        color: selectedChord.strings[i] === 'x' ? '#ef4444' : selectedChord.strings[i] === 0 ? '#10b981' : '#0f1015',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                      }}>
                        {selectedChord.strings[i]}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#9ca3af', marginTop: '0.4rem' }}>
                        {selectedChord.fingers[i] || '-'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '10px', fontSize: '0.9rem' }}>
                <strong style={{ color: 'var(--primary)' }}>Iyer Sir's Pro Tip: </strong>
                {selectedChord.tips}
              </div>
            </div>
          </div>
        )}

        {/* Tool 5: Trinity Quiz */}
        {activeTool === 'quiz' && (
          <div className="theme-card" style={{ maxWidth: '650px', margin: '0 auto', padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
              Trinity Exam Grade Readiness Quiz
            </h3>

            {!quizResult ? (
              <div>
                <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Question {quizStep + 1} of {TRINITY_QUIZ_QUESTIONS.length}
                </div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                  {TRINITY_QUIZ_QUESTIONS[quizStep].question}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {TRINITY_QUIZ_QUESTIONS[quizStep].options.map((opt, i) => (
                    <button key={i} onClick={() => handleQuizOptionSelect(opt)} className="btn btn-secondary" style={{ textAlign: 'left', justifyContent: 'flex-start', padding: '1rem' }}>
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center' }}>
                <CheckCircle size={56} color="#10b981" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Recommended Placement:</h4>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem' }}>
                  {quizResult}
                </div>
                <p className="theme-text-muted" style={{ marginBottom: '2rem' }}>
                  Iyer Sir will conduct a 1-on-1 audition during your Free Demo Class to confirm your exact entry syllabus!
                </p>
                <button onClick={resetQuiz} className="btn btn-secondary">
                  Retake Quiz
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default InteractiveTools;
