/**
 * Centralized Media Assets & Modular Social Links Configuration
 * 
 * Modular Social Architecture:
 * Easily add new social platforms (TikTok, YouTube, Facebook, Twitter) by adding 
 * objects to the `MODULAR_SOCIAL_PLATFORMS` array.
 */

export const MODULAR_SOCIAL_PLATFORMS = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "_vibrantbeats_",
    displayHandle: "_vibrantbeats_",
    url: "https://www.instagram.com/_vibrantbeats_?igsh=cTJ5aTdsaHh0aTR3",
    iconName: "Instagram",
    color: "#ec4899",
    active: true
  }
];

export const SOCIAL_LINKS = {
  instagram: {
    handle: "_vibrantbeats_",
    url: "https://www.instagram.com/_vibrantbeats_?igsh=cTJ5aTdsaHh0aTR3"
  },
  whatsapp: {
    number: "9065338366",
    directUrl: "https://wa.me/919065338366"
  }
};

export const IMAGE_ASSETS = {
  // Official Pamphlet / Brochure Flyer
  brochureFlyer: "/vibrant-details.jpg",

  // Hero section main acoustic guitar image
  heroBanner: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",

  // Studio & practice classroom photos
  studioClassroom: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&auto=format&fit=crop&q=80",

  // Instagram Post / Reel Mockups
  reelsThumbnails: {
    reel1: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
    reel2: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=600&auto=format&fit=crop&q=80",
    reel3: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop&q=80",
    reel4: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&auto=format&fit=crop&q=80"
  }
};

export const LOCATION_ASSETS = {
  studioAddress: "Shop No 1, Plot No-14 Shelter house, Sector 5 Near Union Bank, Ghansoli, Navi Mumbai - 400701",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.187313627918!2d73.0039!3d19.1256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0c1b7555555%3A0x123456789abcdef!2sGhansoli%2C%20Navi%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
};
