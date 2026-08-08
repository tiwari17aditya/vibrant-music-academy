import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Square, Sparkles, HelpCircle, CheckCircle, Music, Award } from 'lucide-react';
import { GUITAR_CHORDS_DATA, TRINITY_QUIZ_QUESTIONS } from '../data/academyData';

const InteractiveTools = () => {
  const [activeTool, setActiveTool] = useState('metronome');

  // --- Web Audio Metronome State ---
  const [bpm, setBpm] = useState(100);
  const [isPlayingMetronome, setIsPlayingMetronome] = useState(false);
  const [timeSignature, setTimeSignature] = useState(4);
  const [currentBeat, setCurrentBeat] = useState(0);

  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Initialize Web Audio Context lazily
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

  // Play single metronome click sound
  const playClickSound = (isAccent) => {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = isAccent ? 1000 : 800; // 1000Hz accent on beat 1

      // Audio safety clamp
      const safeGain = 0.25;
      gainNode.gain.setValueAtTime(safeGain, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  // Metronome Loop Effect
  useEffect(() => {
    if (isPlayingMetronome) {
      const intervalMs = (60 / bpm) * 1000;
      let beatCounter = 0;

      timerRef.current = setInterval(() => {
        const isAccent = beatCounter === 0;
        playClickSound(isAccent);
        setCurrentBeat(beatCounter + 1);
        beatCounter = (beatCounter + 1) % timeSignature;
      }, intervalMs);
    } else {
      clearInterval(timerRef.current);
      setCurrentBeat(0);
    }

    return () => clearInterval(timerRef.current);
  }, [isPlayingMetronome, bpm, timeSignature]);

  // --- Guitar Chord Synth Audio ---
  const [selectedChord, setSelectedChord] = useState(GUITAR_CHORDS_DATA[0]);

  const playChordAudio = (chord) => {
    try {
      const ctx = getAudioContext();
      chord.frequencies.forEach((freq, idx) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gainNode = ctx.createGain();

          osc.type = 'triangle'; // Rich guitar tone
          osc.frequency.value = freq;

          const safeGain = 0.15; // Clamped for polyphonic safety
          gainNode.gain.setValueAtTime(safeGain, ctx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);

          osc.connect(gainNode);
          gainNode.connect(ctx.destination);

          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 1.5);
        }, idx * 60); // Strum delay across strings!
      });
    } catch (e) {
      console.error("Chord synth error:", e);
    }
  };

  // --- Quiz State ---
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
            Practice timing with our Web Audio Metronome, explore interactive chord charts with audio playback, or check your Trinity exam grade readiness.
          </p>
        </div>

        {/* Toolkit Nav Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
          <button
            onClick={() => setActiveTool('metronome')}
            className={`btn ${activeTool === 'metronome' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Volume2 size={18} /> Web Audio Metronome
          </button>
          <button
            onClick={() => setActiveTool('chords')}
            className={`btn ${activeTool === 'chords' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Music size={18} /> Guitar Chord Visualizer
          </button>
          <button
            onClick={() => setActiveTool('quiz')}
            className={`btn ${activeTool === 'quiz' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <Award size={18} /> Trinity Level Assessor
          </button>
        </div>

        {/* Tool 1: Metronome */}
        {activeTool === 'metronome' && (
          <div className="theme-card" style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem' }}>Visual & Audio Metronome</h3>
            
            {/* Visual Beat Pulse Ring */}
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

            {/* Slider */}
            <input
              type="range"
              min="40"
              max="240"
              value={bpm}
              onChange={(e) => setBpm(Number(e.target.value))}
              style={{
                width: '100%',
                marginBottom: '2rem',
                accentColor: 'var(--primary)',
                cursor: 'pointer'
              }}
            />

            {/* Time Signature Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
              {[3, 4, 6].map((ts) => (
                <button
                  key={ts}
                  onClick={() => setTimeSignature(ts)}
                  className={`btn btn-sm ${timeSignature === ts ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {ts}/4 Time
                </button>
              ))}
            </div>

            {/* Start / Stop Button */}
            <button
              onClick={() => setIsPlayingMetronome(!isPlayingMetronome)}
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              {isPlayingMetronome ? (
                <><Square size={20} /> Stop Metronome</>
              ) : (
                <><Play size={20} /> Start Metronome</>
              )}
            </button>
          </div>
        )}

        {/* Tool 2: Guitar Chord Visualizer & Audio Synth */}
        {activeTool === 'chords' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Chord Selector Column */}
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

            {/* Fretboard Diagram Column */}
            <div className="theme-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.6rem', margin: 0 }}>{selectedChord.name}</h3>
                <button
                  onClick={() => playChordAudio(selectedChord)}
                  className="btn btn-primary btn-sm"
                >
                  <Volume2 size={16} /> Play Audio Strum
                </button>
              </div>

              {/* Fretboard Visualizer */}
              <div style={{
                background: 'rgba(0,0,0,0.4)',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '1.5rem',
                border: '1px solid var(--card-dark-border)'
              }}>
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

        {/* Tool 3: Trinity Quiz */}
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
                    <button
                      key={i}
                      onClick={() => handleQuizOptionSelect(opt)}
                      className="btn btn-secondary"
                      style={{ textAlign: 'left', justifyContent: 'flex-start', padding: '1rem' }}
                    >
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
