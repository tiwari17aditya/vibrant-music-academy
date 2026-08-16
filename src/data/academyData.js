// Centralized Data Model for Vibrant Music Academy (Hinglish Edition)

import { IMAGE_ASSETS, SOCIAL_LINKS } from './mediaAssets';

export const ACADEMY_INFO = {
  name: "Vibrant Music Academy",
  tagline: "Iyer Sir ke saath Music seekhein - Step-by-Step aur Easy Tarike se!",
  subTagline: "Har age group ke liye structured classes | Guitar, Piano, Drums, Tabla, Flute, Vocals, Ukulele, Violin, Dance & Trinity Prep",
  mottoTop: "Where People Make Music...",
  mottoBottom: "Aao Saath Milkar Music Banayein...!",
  address: "Shop No 1, Plot No-14 Shelter house, Sector 5 Near Union Bank, Ghansoli, Navi Mumbai - 400701",
  location: "Ghansoli, Navi Mumbai, 400701",
  phone: "9065338366",
  whatsapp: SOCIAL_LINKS.whatsapp.number,
  email: "contact@vibrantmusicacademy.in",
  instagram: SOCIAL_LINKS.instagram.handle,
  trinityCertified: true,
  stats: {
    students: "500+",
    trinityPassRate: "100%",
    yearsExperience: "15+",
    ageGroups: "6 se 65 Yrs"
  }
};

export const FLYER_ANNOUNCEMENTS = {
  annualDiscountBanner: "Apna Exclusive Annual Discount Claim Karein! Offer Limited Time Tak Hai.",
  demoClassCallToAction: "Abhi Call Karein aur Free Demo Class ke liye Seat Book Karein",
  oneStopShopTitle: "ONE STOP SHOP",
  oneStopShopSubtitle: "Sabhi Musical Instruments ki Sale, Purchase aur Professional Repairing",
  certificationTitle: "Trinity College London Se Certified Exam Prep"
};

export const INSTRUMENT_SERVICES = [
  {
    id: "repair-restring",
    title: "Instrument Repair & Servicing",
    description: "Guitars re-stringing, neck alignment, action adjustment, drum tuning aur har musical instrument ki professional servicing.",
    icon: "Wrench"
  },
  {
    id: "instrument-sales",
    title: "New & Pre-Owned Instruments",
    description: "Brand new ya quality-tested second-hand acoustic guitars, keyboards, violins aur ukuleles academy special price par khareedein.",
    icon: "ShoppingBag"
  },
  {
    id: "instrument-buyback",
    title: "Old Instrument Sell / Exchange",
    description: "Apna purana instrument sell karein ya upgrade karein after professional inspection by Iyer Sir.",
    icon: "RefreshCw"
  }
];

export const IYER_SIR_BIO = {
  name: "Iyer Sir",
  title: "Founder & Master Music Educator",
  age: "Around 50 Years (Fit & Energetic)",
  background: [
    "Ex-Professional Gym Trainer - Pura focus posture, hand positioning aur stamina build karne par.",
    "Acting & Stage Performance Experience - Stage fear dur karna aur expressive music style sikhana.",
    "Musical Family Heritage - Music ka passion aur deep-rooted knowledge jo generations se chala aa raha hai.",
    "Trinity College London Mentor - Students ko international grade exams ke liye prepare karna."
  ],
  philosophy: "Music sirf notes bajana nahi hai, balki fundamentals samajhna aur har chord enjoy karna hai. Chahe aapki age 7 ho ya 60, sahi guidance se koi bhi music seekh sakta hai.",
  studentTransformationStory: {
    title: "Student Ki Kahani: YouTube Tutorials Se Stage Confidence Tak",
    author: "IT Professional, Ghansoli, Navi Mumbai",
    quote: "Main YouTube par videos dekh kar confused ho gaya tha aur interest chhoot raha tha. Ghansoli aane ke baad main Vibrant Academy aaya. Iyer Sir ne mere saare music theory basics clear kiye. Aaj main confidently songs bajata hoon aur music samajhta hoon!"
  }
};

export const COURSES_DATA = [
  {
    id: "acoustic-electric-guitar",
    category: "Guitar",
    title: "Acoustic & Electric Guitar",
    icon: "Guitar",
    level: "Beginner se Advanced",
    duration: "Flexible Packages (1M to 1 Year)",
    fee: "Rs 2,499 / month",
    numericFee: 2499,
    popular: true,
    isGuitar: true,
    pricingTiers: [
      {
        id: "1m",
        label: "1 Month (Monthly)",
        durationText: "1 Month (8 Classes)",
        originalPrice: null,
        formattedOriginal: null,
        price: 2499,
        formattedPrice: "Rs 2,499",
        badge: "Standard"
      },
      {
        id: "3m",
        label: "3 Months Package",
        durationText: "3 Months (24 Classes)",
        originalPrice: 7497,
        formattedOriginal: "Rs 7,497",
        price: 6999,
        formattedPrice: "Rs 6,999",
        savings: "Save Rs 498",
        badge: "Popular"
      },
      {
        id: "6m",
        label: "6 Months Package",
        durationText: "6 Months (48 Classes)",
        originalPrice: 14994,
        formattedOriginal: "Rs 14,994",
        price: 12999,
        formattedPrice: "Rs 12,999",
        savings: "Save Rs 1,995",
        badge: "Best Value"
      },
      {
        id: "9m",
        label: "9 Months Package",
        durationText: "9 Months (72 Classes)",
        originalPrice: 22491,
        formattedOriginal: "Rs 22,491",
        price: 18999,
        formattedPrice: "Rs 18,999",
        savings: "Save Rs 3,492",
        badge: "Advanced"
      },
      {
        id: "12m",
        label: "12 Months (1 Year)",
        durationText: "1 Year (96 Classes)",
        originalPrice: 29988,
        formattedOriginal: "Rs 29,988",
        price: 23999,
        formattedPrice: "Rs 23,999",
        savings: "Save Rs 5,989",
        badge: "Max Savings"
      }
    ],
    description: "Guitar basics, fingerstyle techniques, strumming patterns, fretboard navigation, lead solos aur popular songs seekhein.",
    syllabus: [
      "Posture, Hand Position & Easy Tuning",
      "Major & Minor Chords + Smooth Transitions",
      "Strumming Patterns & Time Signatures",
      "Tablature (TAB) & Sheet Reading",
      "Barre Chords & Lead Solos Technique",
      "Jamming Sessions & Song Performance"
    ]
  },
  {
    id: "drums-percussion",
    category: "Drums",
    title: "Drums & Rhythm Mastery",
    icon: "Drum",
    level: "Beginner se Advanced",
    duration: "3 Months (24 Classes)",
    fee: "Rs. Contact Academy for Fee Details",
    isCustomFee: true,
    popular: true,
    description: "Timing control, stick grips, groove coordination, fast fills aur backing tracks ke saath bajana seekhein.",
    syllabus: [
      "Drum Kit Layout & Stick Grips",
      "Basic Rock, Pop & Funk Beats",
      "Limb Independence Exercises",
      "Drum Fills & Accents",
      "Metronome Practice & Live Accompaniment"
    ]
  },
  {
    id: "piano-keyboard",
    category: "Keyboard",
    title: "Piano & Electronic Keyboard",
    icon: "Music",
    level: "Sabhi Levels ke Liye",
    duration: "4 Months (32 Classes)",
    fee: "Rs. Contact Academy for Fee Details",
    isCustomFee: true,
    popular: false,
    description: "Both hands coordination, scales, chord progressions, classical pieces aur song accompaniment seekhein.",
    syllabus: [
      "Keyboard Basics & Finger Independence",
      "Treble & Bass Staff Reading",
      "Major/Minor Scales & Arpeggios",
      "Left-Hand Bass + Right-Hand Melody",
      "Popular & Classical Song repertory"
    ]
  },
  {
    id: "tabla",
    category: "Indian Classical",
    title: "Tabla & Indian Rhythm",
    icon: "Activity",
    level: "Beginner se Intermediate",
    duration: "3 Months (24 Classes)",
    fee: "Rs. Contact Academy for Fee Details",
    isCustomFee: true,
    popular: false,
    description: "Indian classical percussion, hand strokes (Bols), Taals (Teentaal, Keharwa, Dadra) aur sangat seekhein.",
    syllabus: [
      "Tabla Posture & Dayan/Bayan Positioning",
      "Basic Bols (Na, Tin, Ge, Ke)",
      "Teentaal, Keharwa & Dadra Variations",
      "Tihai & Kayda Compositions",
      "Vocal & Instrumental Sangat"
    ]
  },
  {
    id: "flute",
    category: "Wind Instruments",
    title: "Flute (Bansuri & Western Flute)",
    icon: "Wind",
    level: "Beginner se Advanced",
    duration: "3 Months (24 Classes)",
    fee: "Rs. Contact Academy for Fee Details",
    isCustomFee: true,
    popular: false,
    description: "Breath control, blowing technique, sargam scales, finger agility aur melodious tunes bajana seekhein.",
    syllabus: [
      "Blowing Technique & Tone Production",
      "Sargam (Alankars) & Pitch Accuracy",
      "Finger Placement & Smooth Notes",
      "Light Music Melodies",
      "Expression & Performance Techniques"
    ]
  },
  {
    id: "vocals-music-theory",
    category: "Vocals & Theory",
    title: "Vocals & Music Theory",
    icon: "Mic",
    level: "Sabhi Levels ke Liye",
    duration: "3 Months (24 Classes)",
    fee: "Rs. Contact Academy for Fee Details",
    isCustomFee: true,
    popular: true,
    description: "Vocal warmups, pitch ear training, breath control aur complete music theory clear karein.",
    syllabus: [
      "Vocal Warmups & Breath Support",
      "Ear Training & Pitch Identification",
      "Harmony & Scale Foundations",
      "Circle of Fifths & Chord Formulas",
      "Stage Mic Control & Delivery"
    ]
  },
  {
    id: "ukulele",
    category: "Guitar",
    title: "Ukulele Foundations",
    icon: "Sparkles",
    level: "Beginner Friendly",
    duration: "2 Months (16 Classes)",
    fee: "Rs. Contact Academy for Fee Details",
    isCustomFee: true,
    popular: false,
    description: "Fun, portable aur easy instrument! Ukulele chords, strumming patterns aur sing-along songs seekhein.",
    syllabus: [
      "Ukulele Tuning & Holding Position",
      "Easy Open Chords (C, G, Am, F)",
      "Popular Strumming Grooves",
      "Fingerpicking Basics",
      "Strumming ke saath Gaana"
    ]
  },
  {
    id: "karaoke-nights",
    category: "Workshops",
    title: "Karaoke Nights & Stage Confidence",
    icon: "Radio",
    level: "All Ages",
    duration: "Weekend Sessions",
    fee: "Rs. Contact Academy for Fee Details",
    isCustomFee: true,
    popular: false,
    description: "Stage fear dur karein! Studio backing tracks ke saath sing karein aur live performance confidence paayein.",
    syllabus: [
      "Microphone Handling & Stage Presence",
      "Key Matching & Pitch Selection",
      "Expressive Vocal Phrasing",
      "Live Community Karaoke Practice"
    ]
  },
  {
    id: "violin",
    category: "Strings",
    title: "Violin Mastery",
    icon: "Music2",
    level: "Beginner se Intermediate",
    duration: "4 Months (32 Classes)",
    fee: "Rs. Contact Academy for Fee Details",
    isCustomFee: true,
    popular: false,
    description: "Proper bow hold, posture, pitch accuracy, bowing techniques aur classic melodies seekhein.",
    syllabus: [
      "Violin Posture & Bow Grip",
      "Open String Bowing & Tone",
      "Finger Placements & Scales",
      "Sight Reading & Pitch Ear Training",
      "Melodies & Solo Performance"
    ]
  },
  {
    id: "kathak-bharatnatyam",
    category: "Dance",
    title: "Kathak & Bharatnatyam Dance",
    icon: "Heart",
    level: "Sabhi Age Groups",
    duration: "4 Months (32 Classes)",
    fee: "Rs. Contact Academy for Fee Details",
    isCustomFee: true,
    popular: false,
    description: "Indian classical dance training focusing on rhythm (Tala), hand gestures (Mudras) aur footwork (Tatkar).",
    syllabus: [
      "Body Posture & Tatkar Footwork",
      "Hastas / Mudras & Eye Expressions",
      "Teentaal & Jhaptal Rhythm Cycles",
      "Facial Expressions (Abhinaya)",
      "Stage Choreography & Recital"
    ]
  },
  {
    id: "trinity-certification",
    category: "Trinity Prep",
    title: "Trinity College London Certification",
    icon: "Award",
    level: "Initial se Grade 8",
    duration: "6 Months (48 Classes)",
    fee: "Rs. Contact Academy for Fee Details",
    isCustomFee: true,
    popular: true,
    description: "International Trinity College London exam preparation for Guitar, Piano, Drums & Theory.",
    syllabus: [
      "Trinity Grade Exam Pieces Mastery",
      "Technical Exercises & Scales",
      "Sight Reading & Aural Prep",
      "Mock Examinations & Certificate Guidance"
    ]
  }
];

export const SOCIAL_HUB_DATA = {
  instagramPosts: [
    {
      id: "post-1",
      title: "3 Fretboard Tricks Jo Har Beginner Guitarist Ko Pata Hone Chahiye!",
      likes: "1.8K",
      date: "2 days ago",
      thumbnail: IMAGE_ASSETS.reelsThumbnails.reel1,
      tag: "Guitar Tips"
    },
    {
      id: "post-2",
      title: "Long Practice Sessions Mein Fitness & Posture Kyun Important Hai",
      likes: "2.4K",
      date: "5 days ago",
      thumbnail: IMAGE_ASSETS.reelsThumbnails.reel2,
      tag: "Iyer Sir Reels"
    },
    {
      id: "post-3",
      title: "Student Spotlight: Trinity Grade 2 Classical Piece Performance",
      likes: "1.1K",
      date: "1 week ago",
      thumbnail: IMAGE_ASSETS.reelsThumbnails.reel3,
      tag: "Student Showcase"
    },
    {
      id: "post-4",
      title: "Circle of Fifths Ko 60 Seconds Mein Samjhein!",
      likes: "3.5K",
      date: "2 weeks ago",
      thumbnail: IMAGE_ASSETS.reelsThumbnails.reel4,
      tag: "Music Theory"
    }
  ]
};

export const TESTIMONIALS_DATA = [
  {
    name: "Vikram Malhotra",
    role: "IT Professional, Ghansoli",
    text: "Main YouTube par videos dekh kar 6 mahine se confused tha. Iyer Sir ke structured tarike se mere saare basics clear ho gaye!",
    rating: 5,
    tag: "Guitar Student"
  },
  {
    name: "Priya Sharma",
    role: "Aarav ki Mother (Age 10)",
    text: "Aarav ne Trinity Grade 2 Guitar exam Distinction se pass kiya! Iyer Sir ka energetic aur disciplined teaching style kids ke liye best hai.",
    rating: 5,
    tag: "Trinity Parent"
  },
  {
    name: "Dr. K. R. Nambiar",
    role: "Retired Physician (Age 62)",
    text: "Mujhe lagta tha 60 ki age mein Keyboard seekhna mushkil hoga, par Iyer Sir ke patience aur guidance ne ise bohot easy bana diya.",
    rating: 5,
    tag: "Keyboard Student"
  }
];

export const GUITAR_CHORDS_DATA = [
  {
    name: "C Major",
    strings: ["x", 3, 2, 0, 1, 0],
    fingers: ["", "3 (Ring)", "2 (Middle)", "Open", "1 (Index)", "Open"],
    frequencies: [261.63, 329.63, 392.00, 523.25],
    tips: "Thumb ko neck ke peechhe rakhein aur fingers ko arch karein taaki har string saaf baje."
  },
  {
    name: "G Major",
    strings: [3, 2, 0, 0, 0, 3],
    fingers: ["3 (Ring)", "2 (Middle)", "Open", "Open", "Open", "4 (Pinky)"],
    frequencies: [196.00, 246.94, 293.66, 392.00, 783.99],
    tips: "Dhyan dein ki middle finger open 4th string ko mute na kare."
  },
  {
    name: "A Minor",
    strings: ["x", 0, 2, 2, 1, 0],
    fingers: ["Mute", "Open", "2 (Middle)", "3 (Ring)", "1 (Index)", "Open"],
    frequencies: [220.00, 261.63, 329.63, 440.00],
    tips: "Emotional acoustic songs ke liye sabse best chord. 5th string se niche strum karein."
  },
  {
    name: "F Major (Barre)",
    strings: [1, 3, 3, 2, 1, 1],
    fingers: ["1 (Barre)", "3 (Ring)", "4 (Pinky)", "2 (Middle)", "1 (Barre)", "1 (Barre)"],
    frequencies: [174.61, 220.00, 261.63, 349.23],
    tips: "Index finger Fret 1 par barre banta hai. Iyer Sir ki wrist posture technique se yeh super easy ho jata hai!"
  },
  {
    name: "D Major",
    strings: ["x", "x", 0, 2, 3, 2],
    fingers: ["Mute", "Mute", "Open", "1 (Index)", "3 (Ring)", "2 (Middle)"],
    frequencies: [293.66, 369.99, 440.00, 587.33],
    tips: "Top 3 strings par triangle shape banayein aur sirf 4 strings strum karein."
  },
  {
    name: "E Minor",
    strings: [0, 2, 2, 0, 0, 0],
    fingers: ["Open", "2 (Middle)", "3 (Ring)", "Open", "Open", "Open"],
    frequencies: [164.81, 246.94, 329.63, 392.00, 659.25],
    tips: "Guitar ka sabse easy chord! Middle aur ring finger use karein."
  }
];

export const TRINITY_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Aap kitne time se instrument baja rahe hain?",
    options: [
      { text: "Bilkul Naye / Complete Beginner", grade: "Beginner Level / Initial Grade" },
      { text: "6 Months se 1 Year (Basic chords aate hain)", grade: "Trinity Grade 1 - Grade 2" },
      { text: "2+ Years (Full songs aur tabs baja sakte hain)", grade: "Trinity Grade 3 - Grade 5" },
      { text: "Experienced player looking for certification", grade: "Trinity Grade 6 - Grade 8" }
    ]
  },
  {
    id: 2,
    question: "Music seekhne ka aapka main goal kya hai?",
    options: [
      { text: "Apne favorite songs bajana aur hobby ke liye", grade: "Foundational Practical Track" },
      { text: "Music Theory aur Composition deep mein seekhna", grade: "Applied Music Theory Module" },
      { text: "Trinity London se International Certification milna", grade: "Trinity Grade Masterclass" },
      { text: "Stage par live perform karna aur confidence pana", grade: "Stage Performance & Rhythm Track" }
    ]
  }
];
