// Centralized Data Model for Vibrant Music Academy

import { IMAGE_ASSETS, YOUTUBE_EMBED_URLS, SOCIAL_LINKS } from './mediaAssets';

export const ACADEMY_INFO = {
  name: "Vibrant Music Academy",
  nameHindi: "वाइब्रेंट म्यूजिक एकेडमी",
  tagline: "Master the Art of Music with Iyer Sir",
  subTagline: "Structured Learning for All Age Groups | Guitar, Piano, Drums, Tabla, Flute, Vocals, Ukulele, Violin, Dance & Trinity Certification",
  mottoTop: "WHERE PEOPLE MAKE MUSIC...",
  mottoBottom: "Let's Make Music Together...!",
  address: "Shop No 1, Plot No-14 Shelter house, Sector 5 Near Union Bank, Ghansoli, Navi Mumbai - 400701",
  location: "Ghansoli, Navi Mumbai, 400701",
  phone: "9065338366",
  whatsapp: SOCIAL_LINKS.whatsapp.number,
  email: "contact@vibrantmusicacademy.in",
  instagram: SOCIAL_LINKS.instagram.handle,
  youtube: SOCIAL_LINKS.youtube.handle,
  trinityCertified: true,
  stats: {
    students: "500+",
    trinityPassRate: "100%",
    yearsExperience: "15+",
    ageGroups: "6 to 65 Yrs"
  }
};

export const FLYER_ANNOUNCEMENTS = {
  annualDiscountBanner: "Claim Your Exclusive Annual Discount Before It's Gone",
  demoClassCallToAction: "Call now to Book your seat for free demo Classes",
  oneStopShopTitle: "ONE STOP SHOP",
  oneStopShopSubtitle: "SALE, PURCHASE, AND REPAIR FOR ALL MUSICAL INSTRUMENTS",
  certificationTitle: "CERTIFICATION THROUGH TRINITY COLLEGE OF LONDON"
};

export const INSTRUMENT_SERVICES = [
  {
    id: "repair-restring",
    title: "Instrument Repair & Servicing",
    description: "Professional setup, string replacement, fret polishing, neck alignment, drum tuning, and electronic repairs for all musical instruments.",
    icon: "Wrench"
  },
  {
    id: "instrument-sales",
    title: "New & Certified Pre-Owned Instruments",
    description: "Buy brand new or quality-tested second-hand acoustic guitars, keyboards, violins, ukuleles, and accessories directly at academy prices.",
    icon: "ShoppingBag"
  },
  {
    id: "instrument-buyback",
    title: "Sell / Trade-In Your Old Instrument",
    description: "Upgrade your instrument or sell your old gear for fair value after professional evaluation by Iyer Sir.",
    icon: "RefreshCw"
  }
];

export const IYER_SIR_BIO = {
  name: "Iyer Sir",
  title: "Founder & Master Music Educator",
  age: "Around 50 Years (Fit & Energetic)",
  background: [
    "Former Professional Gym Trainer - brings discipline, posture focus, and stamina to music practice.",
    "Acting & Performing Arts Experience - instills stage confidence and expressive musical phrasing.",
    "Generational Musical Family - deep-rooted passion and musical heritage passed down through family.",
    "Trinity College London Certification Mentor - preparing students for internationally recognized graded exams."
  ],
  philosophy: "Music isn't just about hitting notes; it's about understanding why you want to play, clearing fundamentals, and enjoying every chord. Whether you are 7 or 60, anyone can learn with the right guidance.",
  studentTransformationStory: {
    title: "A Student's Story: From YouTube Burnout to Stage Confidence",
    author: "IT Professional, Ghansoli, Navi Mumbai",
    quote: "I tried learning guitar online through YouTube playlists, but I couldn't grasp the basics and lost interest. When I came to Ghansoli, Navi Mumbai for my IT job, I stumbled upon Vibrant Academy. Iyer Sir sat with me, asked what I wanted to achieve, and cleared my fundamentals with music theory. Today, I comfortably play intermediate songs and understand music deeply. Creating this website is my Gurudakshina to him!"
  }
};

export const COURSES_DATA = [
  {
    id: "acoustic-electric-guitar",
    category: "Guitar",
    title: "Acoustic & Electric Guitar",
    icon: "Guitar",
    level: "Beginner to Advanced",
    duration: "3 Months (24 Classes)",
    fee: "₹4,500 / month",
    numericFee: 4500,
    popular: true,
    description: "Master acoustic and electric guitar basics, fingerstyle techniques, strumming patterns, fretboard navigation, solos, and popular songs.",
    syllabus: [
      "Posture, Hand Positioning & Tuning",
      "Major & Minor Chords + Smooth Transitions",
      "Strumming Patterns & Rhythm Time Signatures",
      "Tablature (TAB) & Sheet Music Reading",
      "Barre Chords & Electric Solos / Lead Technique",
      "Song Playing & Live Jamming Sessions"
    ]
  },
  {
    id: "drums-percussion",
    category: "Drums",
    title: "Drums & Rhythm Mastery",
    icon: "Drum",
    level: "Beginner to Advanced",
    duration: "3 Months (24 Classes)",
    fee: "₹5,500 / month",
    numericFee: 5500,
    popular: true,
    description: "Develop rock-solid timing, stick control, groove coordination, drum fills, and playing along with live backing tracks.",
    syllabus: [
      "Drum Kit Mechanics & Stick Grips",
      "Basic Rock, Pop & Funk Grooves",
      "Limb Independence Exercises",
      "8th & 16th Note Fills & Dynamic Accents",
      "Playing to Metronome & Stage Performance Accompaniment"
    ]
  },
  {
    id: "piano-keyboard",
    category: "Keyboard",
    title: "Piano & Electronic Keyboard",
    icon: "Music",
    level: "All Levels",
    duration: "4 Months (32 Classes)",
    fee: "₹5,000 / month",
    numericFee: 5000,
    popular: false,
    description: "Learn two-handed coordination, scales, chord progressions, Western classical pieces, and modern accompaniment.",
    syllabus: [
      "Keyboard Navigation & Finger Independence",
      "Treble & Bass Clef Staff Reading",
      "Major/Minor Scales & Arpeggios",
      "Left-Hand Bass Patterns & Right-Hand Melodies",
      "Classical & Contemporary Song Repertory"
    ]
  },
  {
    id: "tabla",
    category: "Indian Classical",
    title: "Tabla & Indian Rhythm",
    icon: "Activity",
    level: "Beginner to Intermediate",
    duration: "3 Months (24 Classes)",
    fee: "₹4,000 / month",
    numericFee: 4000,
    popular: false,
    description: "Master traditional Indian percussion, hand stroke placement (Bols), Taals (Teentaal, Keharwa, Dadra), and accompaniment skills.",
    syllabus: [
      "Tabla Anatomy & Hand Positioning",
      "Dayan & Bayan Basic Strokes (Na, Tin, Ge, Ke)",
      "Teentaal, Keharwa & Dadra Variations",
      "Tihai, Kayda & Tukda Compositions",
      "Vocal & Instrumental Accompaniment"
    ]
  },
  {
    id: "flute",
    category: "Wind Instruments",
    title: "Flute (Bansuri & Western Flute)",
    icon: "Wind",
    level: "Beginner to Advanced",
    duration: "3 Months (24 Classes)",
    fee: "₹4,200 / month",
    numericFee: 4200,
    popular: false,
    description: "Master breath control, embouchure, tone production, sargam scales, finger agility, and classical/pop melodies.",
    syllabus: [
      "Blowing Technique & Embouchure Precision",
      "Sargam (Alankars) & Pitch Control",
      "Finger Placement & Smooth Transitions",
      "Raga Foundations & Light Music Melodies",
      "Expression, Microtones (Kanas) & Performance"
    ]
  },
  {
    id: "vocals-music-theory",
    category: "Vocals & Theory",
    title: "Vocals & Music Theory",
    icon: "Mic",
    level: "All Levels",
    duration: "3 Months (24 Classes)",
    fee: "₹4,500 / month",
    numericFee: 4500,
    popular: true,
    description: "Combine vocal training, pitch correction, breath support, pitch ear training, and fundamental music theory.",
    syllabus: [
      "Vocal Warmups, Breath Management & Pitch Matching",
      "Ear Training & Interval Identification",
      "Western & Indian Harmony Foundations",
      "Circle of Fifths & Major/Minor Scales",
      "Stage Microphone Control & Vocal Delivery"
    ]
  },
  {
    id: "ukulele",
    category: "Guitar",
    title: "Ukulele Foundations",
    icon: "Sparkles",
    level: "Beginner",
    duration: "2 Months (16 Classes)",
    fee: "₹3,800 / month",
    numericFee: 3800,
    popular: false,
    description: "Fun, portable, and beginner-friendly! Learn ukulele chord shapes, strumming patterns, and sing-along song arrangements.",
    syllabus: [
      "Ukulele Tuning & Holding Posture",
      "Open Chords (C, G, Am, F)",
      "Pop & Acoustic Strumming Grooves",
      "Fingerpicking Basics",
      "Singing While Strumming Complete Songs"
    ]
  },
  {
    id: "karaoke-nights",
    category: "Workshops",
    title: "Karaoke Nights & Stage Confidence",
    icon: "Radio",
    level: "All Ages",
    duration: "Weekend Workshops",
    fee: "₹2,500 / module",
    numericFee: 2500,
    popular: false,
    description: "Fun, interactive sessions for music lovers and adult learners to overcome stage fright, sing with studio backing tracks, and perform live.",
    syllabus: [
      "Microphone Handling & Stage Presence",
      "Key Matching & Pitch Selection",
      "Expressive Phrasing & Emotion Control",
      "Studio Monitor Hearing & Cue Timing",
      "Live Community Karaoke Showcase"
    ]
  },
  {
    id: "violin",
    category: "Strings",
    title: "Violin Mastery",
    icon: "Music2",
    level: "Beginner to Intermediate",
    duration: "4 Months (32 Classes)",
    fee: "₹5,200 / month",
    numericFee: 5200,
    popular: false,
    description: "Learn proper bow hold, chin rest posture, pitch accuracy, bowing techniques, and classic instrumental melodies.",
    syllabus: [
      "Violin Posture, Chin Rest & Bow Grip",
      "Open String Bowing & Tone Production",
      "First Position Finger Placements",
      "Scales, Sight Reading & Pitch Ear Training",
      "Solo Melodies & Ensemble Playing"
    ]
  },
  {
    id: "kathak-bharatnatyam",
    category: "Dance",
    title: "Kathak & Bharatnatyam Dance",
    icon: "Heart",
    level: "All Age Groups",
    duration: "4 Months (32 Classes)",
    fee: "₹4,000 / month",
    numericFee: 4000,
    popular: false,
    description: "Graceful Indian classical dance training focusing on rhythm (Tala), hand gestures (Mudras), footwork (Tatkar), and expressions (Abhinaya).",
    syllabus: [
      "Body Posture, Balance & Basic Footwork (Tatkar)",
      "Hastas / Mudras & Eye Movements",
      "Teentaal & Jhaptal Rhythmic Cycles",
      "Abhinaya (Facial Expressions & Storytelling)",
      "Stage Choreography & Recital Performance"
    ]
  },
  {
    id: "trinity-certification",
    category: "Trinity Prep",
    title: "Trinity College London Certification",
    icon: "Award",
    level: "Initial to Grade 8",
    duration: "6 Months (48 Classes)",
    fee: "₹6,000 / month",
    numericFee: 6000,
    popular: true,
    description: "Comprehensive training for international Trinity College London certification exams across Guitar, Piano, Drums, and Music Theory.",
    syllabus: [
      "Trinity Exam Pieces & Performance Mastery",
      "Technical Work: Scales, Arpeggios & Exercises",
      "Sight Reading & Aural Test Preparation",
      "Musical Knowledge & Performance Confidence",
      "Mock Examination Sessions & Certificate Guidance"
    ]
  }
];

export const SOCIAL_HUB_DATA = {
  instagramReels: [
    {
      id: "reel-1",
      title: "3 Fretboard Tricks Every Beginner Guitarist Needs to Know!",
      views: "12.4K",
      likes: "1.8K",
      date: "2 days ago",
      thumbnail: IMAGE_ASSETS.reelsThumbnails.reel1,
      tag: "Guitar Tips"
    },
    {
      id: "reel-2",
      title: "Why Fitness & Posture Matter When Playing Long Guitar Sessions",
      views: "18.9K",
      likes: "2.4K",
      date: "5 days ago",
      thumbnail: IMAGE_ASSETS.reelsThumbnails.reel2,
      tag: "Iyer Sir Reels"
    },
    {
      id: "reel-3",
      title: "Student Spotlight: Rohan Playing Trinity Grade 3 Classical Piece",
      views: "9.2K",
      likes: "1.1K",
      date: "1 week ago",
      thumbnail: IMAGE_ASSETS.reelsThumbnails.reel3,
      tag: "Student Showcase"
    },
    {
      id: "reel-4",
      title: "Demystifying the Circle of Fifths in 60 Seconds!",
      views: "25.1K",
      likes: "3.5K",
      date: "2 weeks ago",
      thumbnail: IMAGE_ASSETS.reelsThumbnails.reel4,
      tag: "Music Theory"
    }
  ],
  youtubeLessons: [
    {
      id: "yt-1",
      title: "Complete Guitar Tuning & Basic Chords Masterclass (Hindi / English)",
      duration: "14:20",
      views: "45K",
      thumbnail: IMAGE_ASSETS.youtubeThumbnails.lesson1,
      embedUrl: YOUTUBE_EMBED_URLS.guitarFoundationsMasterclass,
      description: "Learn how to tune your guitar pitch-perfect and play C Major, G Major, and Am chords effortlessly."
    },
    {
      id: "yt-2",
      title: "How to Prepare for Trinity College London Guitar Grade 1",
      duration: "22:15",
      views: "31K",
      thumbnail: IMAGE_ASSETS.youtubeThumbnails.lesson2,
      embedUrl: YOUTUBE_EMBED_URLS.trinityGradePrepTutorial,
      description: "A step-by-step roadmap for Trinity exam pieces, scales, technical exercises, and aural tests."
    }
  ]
};

export const GUITAR_CHORDS_DATA = [
  {
    name: "C Major",
    strings: ["x", 3, 2, 0, 1, 0],
    fingers: ["", "3 (Ring)", "2 (Middle)", "Open", "1 (Index)", "Open"],
    frequencies: [261.63, 329.63, 392.00, 523.25], // C4, E4, G4, C5
    tips: "Keep your thumb behind the neck and arch your fingers so the open strings ring clearly."
  },
  {
    name: "G Major",
    strings: [3, 2, 0, 0, 0, 3],
    fingers: ["3 (Ring)", "2 (Middle)", "Open", "Open", "Open", "4 (Pinky)"],
    frequencies: [196.00, 246.94, 293.66, 392.00, 783.99], // G3, B3, D4, G4, G5
    tips: "Make sure your middle finger doesn't mute the open 4th string."
  },
  {
    name: "A Minor",
    strings: ["x", 0, 2, 2, 1, 0],
    fingers: ["Mute", "Open", "2 (Middle)", "3 (Ring)", "1 (Index)", "Open"],
    frequencies: [220.00, 261.63, 329.63, 440.00], // A3, C4, E4, A4
    tips: "Great chord for emotional acoustic ballads. Strum from the 5th (A) string down."
  },
  {
    name: "F Major (Barre)",
    strings: [1, 3, 3, 2, 1, 1],
    fingers: ["1 (Barre)", "3 (Ring)", "4 (Pinky)", "2 (Middle)", "1 (Barre)", "1 (Barre)"],
    frequencies: [174.61, 220.00, 261.63, 349.23], // F3, A3, C4, F4
    tips: "Index finger acts as a capo across fret 1. Iyer Sir's wrist posture technique makes this easy!"
  },
  {
    name: "D Major",
    strings: ["x", "x", 0, 2, 3, 2],
    fingers: ["Mute", "Mute", "Open", "1 (Index)", "3 (Ring)", "2 (Middle)"],
    frequencies: [293.66, 369.99, 440.00, 587.33], // D4, F#4, A4, D5
    tips: "Form a triangle with your fingers on the top three strings. Strum only 4 strings."
  },
  {
    name: "E Minor",
    strings: [0, 2, 2, 0, 0, 0],
    fingers: ["Open", "2 (Middle)", "3 (Ring)", "Open", "Open", "Open"],
    frequencies: [164.81, 246.94, 329.63, 392.00, 659.25], // E3, B3, E4, G4, E5
    tips: "One of the easiest 6-string chords! Use middle and ring fingers."
  }
];

export const TRINITY_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "How long have you been playing your instrument?",
    options: [
      { text: "Brand new / Complete beginner", grade: "Beginner Level / Initial Grade" },
      { text: "6 Months to 1 Year (Know basic chords)", grade: "Trinity Grade 1 - Grade 2" },
      { text: "2+ Years (Can play full songs & tabs)", grade: "Trinity Grade 3 - Grade 5" },
      { text: "Experienced player seeking formal certification", grade: "Trinity Grade 6 - Grade 8" }
    ]
  },
  {
    id: 2,
    question: "What is your main goal for learning music?",
    options: [
      { text: "Learn my favorite songs & play casually", grade: "Foundational Practical Track" },
      { text: "Gain deep knowledge of Music Theory & Composition", grade: "Applied Music Theory Module" },
      { text: "Earn an International Certification from Trinity London", grade: "Trinity Grade Masterclass" },
      { text: "Perform live on stage & improve confidence", grade: "Stage Performance & Rhythm Track" }
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: "Vikram Malhotra",
    role: "Senior Software Engineer",
    text: "I was stuck watching YouTube guitar videos for months without real progress. Iyer Sir's structured approach and music theory breakdown changed everything. I can now play fluently and improvise!",
    rating: 5,
    tag: "Guitar Student"
  },
  {
    name: "Priya Sharma",
    role: "Mother of Aarav (Age 10)",
    text: "Aarav passed his Trinity Grade 2 Guitar exam with Distinction! Iyer Sir's energetic, disciplined teaching style keeps kids engaged and motivated.",
    rating: 5,
    tag: "Trinity Parent"
  },
  {
    name: "Dr. K. R. Nambiar",
    role: "Retired Physician (Age 62)",
    text: "I thought 60 was too late to learn Keyboard. Iyer Sir proved me wrong. His patience and warm encouragement make Vibrant Academy a magical place.",
    rating: 5,
    tag: "Keyboard Student"
  }
];
