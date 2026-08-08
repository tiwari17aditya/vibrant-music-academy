// Centralized Data Model for Vibrant Music Academy

import { IMAGE_ASSETS, YOUTUBE_EMBED_URLS, SOCIAL_LINKS } from './mediaAssets';

export const ACADEMY_INFO = {
  name: "Vibrant Music Academy",
  tagline: "Master the Art of Music with Iyer Sir",
  subTagline: "Structured Learning for All Age Groups | Guitar, Keyboard, Drums, Music Theory & Trinity College London Certification",
  location: "Ghansoli, Navi Mumbai, 400701",
  phone: "+91 98200 12345",
  whatsapp: SOCIAL_LINKS.whatsapp.number,
  email: "contact@vibrantmusicacademy.in",
  instagram: SOCIAL_LINKS.instagram.handle,
  youtube: SOCIAL_LINKS.youtube.handle,
  stats: {
    students: "500+",
    trinityPassRate: "100%",
    yearsExperience: "15+",
    ageGroups: "6 to 65 Yrs"
  }
};

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
    id: "guitar-foundations",
    category: "Guitar",
    title: "Guitar Foundations & Intermediate Mastery",
    icon: "Guitar",
    level: "Beginner to Intermediate",
    duration: "3 Months (24 Classes)",
    fee: "₹4,500 / month",
    numericFee: 4500,
    popular: true,
    description: "Master acoustic and electric guitar basics, fingerstyle techniques, strumming patterns, fretboard navigation, and popular songs.",
    syllabus: [
      "Posture, Hand Positioning & Tuning",
      "Major & Minor Chords + Smooth Transitions",
      "Strumming Patterns & Rhythm Time Signatures",
      "Tablature (TAB) & Sheet Music Reading",
      "Barre Chords & Fretboard Anatomy",
      "Song Playing & Live Jamming Sessions"
    ]
  },
  {
    id: "keyboard-piano",
    category: "Keyboard",
    title: "Western Piano & Electronic Keyboard",
    icon: "Music",
    level: "All Levels",
    duration: "4 Months (32 Classes)",
    fee: "₹5,000 / month",
    numericFee: 5000,
    popular: false,
    description: "Learn two-handed coordination, scales, chord progressions, classical pieces, and modern pop song accompaniment.",
    syllabus: [
      "Keyboard Navigation & Finger Independence",
      "Treble & Bass Clef Notation",
      "Major/Minor Scales & Arpeggios",
      "Left-Hand Bass Patterns & Right-Hand Melodies",
      "Classical & Contemporary Song Repertory"
    ]
  },
  {
    id: "trinity-certification",
    category: "Trinity Prep",
    title: "Trinity College London Exam Preparation",
    icon: "Award",
    level: "Initial to Grade 8",
    duration: "6 Months (48 Classes)",
    fee: "₹6,000 / month",
    numericFee: 6000,
    popular: true,
    description: "Comprehensive training for international Trinity College London certification exams across all instruments.",
    syllabus: [
      "Trinity Exam Pieces & Performance Mastery",
      "Technical Work: Scales, Arpeggios & Exercises",
      "Sight Reading & Aural Test Preparation",
      "Musical Knowledge & Performance Confidence",
      "Mock Examination Sessions & Certificate Guidance"
    ]
  },
  {
    id: "drums-percussion",
    category: "Drums",
    title: "Acoustic Drums & Rhythm Mastery",
    icon: "Drum",
    level: "Beginner to Advanced",
    duration: "3 Months (24 Classes)",
    fee: "₹5,500 / month",
    numericFee: 5500,
    popular: false,
    description: "Develop rock-solid timing, stick control, groove coordination, drum fills, and playing along with backing tracks.",
    syllabus: [
      "Drum Kit Mechanics & Stick Grips",
      "Basic Rock & Pop Grooves",
      "Limb Independence Exercises",
      "8th and 16th Note Fills & Dynamic Accents",
      "Playing to Metronome & Live Song Accompaniment"
    ]
  },
  {
    id: "music-theory",
    category: "Music Theory",
    title: "Applied Music Theory & Ear Training",
    icon: "BookOpen",
    level: "All Levels",
    duration: "2 Months (16 Classes)",
    fee: "₹3,500 / month",
    numericFee: 3500,
    popular: false,
    description: "Demystify music theory! Understand how scales, chords, keys, intervals, and song structures work together.",
    syllabus: [
      "Intervals & Major/Minor Scale Construction",
      "Chord Building (Triads, 7ths & Extended Chords)",
      "Circle of Fifths & Key Signatures",
      "Ear Training & Interval Identification",
      "Harmonic Analysis & Songwriting Basics"
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
