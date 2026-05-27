// ─── Brand Colors ─────────────────────────────────────────────────────────────
export const COLORS = {
  gold: "#C89B4A",
  darkGreen: "#0F1912",
  mediumGreen: "#162018",
  lightGreen: "#1E2E22",
  white: "#FFFFFF",
  offWhite: "#F5F0E8",
  textDark: "#1A1A1A",
  textMuted: "#6B7280",
};

// ─── Contact Info ──────────────────────────────────────────────────────────────
export const CONTACT = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "https://wa.me/919876543210",
  email: "info@sbdreamshouse.com",
  emailHref: "mailto:info@sbdreamshouse.com",
  address: "S&B Dreams House, Munnar, Kerala - 685612",
  mapUrl: "https://maps.google.com/?q=Munnar,Kerala,India",
  instagram: "https://instagram.com/sbdreamshouse",
  facebook: "https://facebook.com/sbdreamshouse",
  youtube: "https://youtube.com/@sbdreamshouse",
};

// ─── Navigation Links ──────────────────────────────────────────────────────────
export const LEFT_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/experiences" },
  { label: "Our Story", href: "/our-story" },
  { label: "Rooms", href: "/rooms" },
];

export const RIGHT_NAV_LINKS = [
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

// ─── Hero Slides ───────────────────────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    image: "/hero_slides/Slide1.webp",
    tagline: "DISCOVER SOMETHING DIFFERENT",
    headline: "A One-of-a-Kind Cave Inspired Escape",
    subtitle: "Nestled in the misty hills of Munnar, our unique cave-themed stay offers an experience unlike any other in Kerala.",
    alt: "S&B Dreams House cave-inspired exterior at sunrise in Munnar",
  },
  {
    image: "/hero_slides/Slide2.webp",
    tagline: "BREATHE IN NATURE",
    headline: "Relax Surrounded by Nature",
    subtitle: "Wake up to the sound of birdsong, sip your morning tea surrounded by lush greenery and the freshest mountain air.",
    alt: "Lush tropical garden and outdoor seating at S&B Dreams House",
  },
  {
    image: "/hero_slides/Slide3.webp",
    tagline: "YOUR PRIVATE SANCTUARY",
    headline: "Stay in Elegant and Cozy Rooms",
    subtitle: "Each room is thoughtfully designed to blend natural warmth with modern comfort — your home away from home.",
    alt: "Elegant cozy room interior at S&B Dreams House Munnar",
  },
  {
    image: "/hero_slides/Slide4.webp",
    tagline: "EXPLORE THE HIGHLANDS",
    headline: "Experience the Heart of Munnar",
    subtitle: "Tea estates, misty valleys, and emerald peaks stretch endlessly beyond your window — adventure awaits every morning.",
    alt: "Panoramic view of Munnar tea estates and mountains from S&B Dreams House",
  },
  {
    image: "/hero_slides/Slide5.webp",
    tagline: "CREATE LASTING MEMORIES",
    headline: "Memories Made Here Last Forever",
    subtitle: "Family gatherings, romantic getaways, or solo escapes — S&B Dreams House is the backdrop to your most treasured stories.",
    alt: "Guests enjoying evening at S&B Dreams House veranda in Munnar",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 12, suffix: "+", label: "Rooms Available", icon: "🏠" },
  { value: 4.9, suffix: "", label: "Guest Rating", icon: "⭐", isDecimal: true },
  { value: 2000, suffix: "+", label: "Happy Guests", icon: "👥" },
  { value: 8, suffix: "+", label: "Years of Hospitality", icon: "📅" },
];

// ─── Experiences ───────────────────────────────────────────────────────────────
export const EXPERIENCES = [
  {
    id: "nature-walks",
    icon: "🌿",
    title: "Nature Walks",
    description: "Explore the pristine trails winding through tea estates, spice gardens, and misty forest paths with our knowledgeable local guides.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    alt: "Nature walk through tea estates in Munnar",
  },
  {
    id: "kayaking",
    icon: "🚣",
    title: "Kayaking & Boating",
    description: "Glide across the serene waters of Mattupetty Dam and Kundala Lake surrounded by breathtaking mountain scenery.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    alt: "Kayaking on Mattupetty Dam near Munnar",
  },
  {
    id: "cuisine",
    icon: "🍳",
    title: "Local Cuisine Experiences",
    description: "Discover the rich flavours of Kerala through hands-on cooking sessions and curated meals prepared with fresh, local ingredients.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
    alt: "Traditional Kerala cuisine experience",
  },
  {
    id: "tea-estate",
    icon: "🏔️",
    title: "Tea Estate Tours",
    description: "Walk through rolling carpets of green tea, visit processing factories, and learn the art of tea making from expert farmers.",
    image: "/tea-estate-tours.webp",
    alt: "Tea estate tour in Munnar highlands",
  },
  {
    id: "photography",
    icon: "📸",
    title: "Photography Spots",
    description: "Capture golden-hour light at hand-picked viewpoints — from flowering valleys to dramatic mountain passes and cascading waterfalls.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Photography spots with panoramic views in Munnar",
  },
  {
    id: "sunrise",
    icon: "🌅",
    title: "Sunrise Viewing Points",
    description: "Rise before dawn and witness the sky transform over the Western Ghats — a spiritual experience that draws guests back year after year.",
    image: "/sunrise-view-point.webp",
    alt: "Sunrise over misty Munnar mountains",
  },
];

// ─── Rooms ────────────────────────────────────────────────────────────────────
export const ROOMS = [
  {
    id: "cave-suite",
    name: "Cave Suite",
    description: "Our most extraordinary room — hand-carved stone walls, ambient lighting, and a one-of-a-kind cave atmosphere that blends nature with luxury.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    alt: "Cave Suite with stone walls and ambient lighting",
    priceFrom: 4500,
    category: "suite",
    amenities: ["King Bed", "Private Bath", "Mountain View", "AC", "Free WiFi"],
    highlight: "Most Unique",
  },
  {
    id: "garden-view",
    name: "Garden View Room",
    description: "Open your curtains to a canvas of tropical greenery. This serene room connects you to nature through floor-to-ceiling garden views.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    alt: "Garden View Room with lush tropical garden outside",
    priceFrom: 3200,
    category: "premium",
    amenities: ["Queen Bed", "Garden View", "AC", "Free WiFi", "Hot Water"],
    highlight: "Best Seller",
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description: "Spacious and warm, our Family Suite accommodates up to 6 guests across two bedrooms with a shared living area — ideal for family retreats.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    alt: "Spacious Family Suite with two bedrooms",
    priceFrom: 6500,
    category: "suite",
    amenities: ["2 Bedrooms", "Living Area", "AC", "Free WiFi", "Kitchenette"],
    highlight: "Family Favorite",
  },
];

// ─── Facilities ────────────────────────────────────────────────────────────────
export const FACILITIES = [
  { icon: "Wifi", title: "Free WiFi", description: "High-speed wireless throughout the property." },
  { icon: "Car", title: "Free Parking", description: "Ample secure parking for all guests." },
  { icon: "UtensilsCrossed", title: "Home-cooked Meals", description: "Authentic Kerala cuisine made fresh daily." },
  { icon: "Bell", title: "Room Service", description: "In-room dining available all day." },
  { icon: "Map", title: "Guided Tours", description: "Expert local guides for all experiences." },
  { icon: "PlaneLanding", title: "Airport Pickup", description: "Complimentary transfer from Cochin Airport." },
  { icon: "WashingMachine", title: "Laundry", description: "Same-day laundry service available." },
  { icon: "Droplets", title: "Hot Water", description: "24-hour hot water in all rooms." },
  { icon: "Trees", title: "Nature Garden", description: "Sprawling private garden with tropical plants." },
];

// ─── Testimonials ──────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "The cave suite was unlike anything we'd ever experienced. Waking up surrounded by those stone walls felt magical. The hospitality was warm and deeply personal — we'll be back every year.",
    name: "Priya Menon",
    location: "Bangalore, India",
    stars: 5,
  },
  {
    id: 2,
    quote: "Absolutely stunning location. The sunrise viewing point they took us to is burned into my memory forever. The meals were extraordinary — proper Kerala home cooking at its finest.",
    name: "James & Sarah Thornton",
    location: "London, UK",
    stars: 5,
  },
  {
    id: 3,
    quote: "We brought our three kids for a week and couldn't have made a better choice. The family suite was huge, the garden was perfect for the kids, and the staff went above and beyond.",
    name: "Arjun Sharma",
    location: "Mumbai, India",
    stars: 5,
  },
  {
    id: 4,
    quote: "As a photographer, I was blown away by the locations they guided me to. Golden hour over the tea estates is something every photographer needs to experience at least once.",
    name: "Mei Lin",
    location: "Singapore",
    stars: 5,
  },
  {
    id: 5,
    quote: "The garden view room was so peaceful. We had our morning chai sitting on the balcony listening to birds. Perfect digital detox. Highly recommend the tea estate tour!",
    name: "Anjali & Rohit Nair",
    location: "Chennai, India",
    stars: 5,
  },
  {
    id: 6,
    quote: "Hidden gem of Munnar. Nothing feels commercial or rushed here — it's all authentic, personal, and memorable. The cave atmosphere is genuinely unique. Book it before everyone finds out.",
    name: "David Okonkwo",
    location: "Lagos, Nigeria",
    stars: 5,
  },
];

// ─── Blog Posts ────────────────────────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    slug: "best-time-to-visit-munnar",
    title: "The Best Time to Visit Munnar: A Season-by-Season Guide",
    excerpt: "Munnar is beautiful year-round, but each season offers a completely different experience. Here's your complete guide to planning the perfect trip.",
    category: "Travel Guide",
    readTime: "5 min read",
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Misty Munnar mountains in morning light",
    content: `Munnar, nestled in the Western Ghats of Kerala, is a destination that rewards visitors in every season. But timing your visit can transform a great holiday into an unforgettable one.

## Winter (October – February): The Golden Season

This is Munnar at its most magical. The monsoon has washed everything clean, temperatures sit between 5°C and 15°C, and the skies are crystal clear. The tea estates glow an almost impossible green. This is peak season for a reason — book well in advance.

**Best for:** Trekking, sightseeing, photography, honeymoons

## Summer (March – May): Warm and Wonderful

Temperatures rise to 25°C but remain pleasant compared to lowland Kerala. The Neelakurinji flowers (which bloom once every 12 years) often appear in April-May. Gardens are in full bloom.

**Best for:** Families, budget travelers, flower viewing

## Monsoon (June – September): For the Adventurous Soul

Munnar during monsoon is dramatic and moody. Waterfalls roar, valleys fill with mist, and you'll likely have the roads to yourself. Some attractions close, but the landscape is extraordinary for photographers.

**Best for:** Photographers, solo travelers, those seeking solitude

## Our Recommendation

For first-time visitors, October to February is ideal. For repeat visitors wanting to see Munnar differently — come during the monsoon. You'll see a side of it most tourists never experience.`,
  },
  {
    slug: "what-to-do-in-munnar",
    title: "10 Things You Must Do in Munnar Beyond the Tea Gardens",
    excerpt: "While tea estates are Munnar's signature, there's a world of experiences beyond the green hills. Here are 10 experiences that will surprise you.",
    category: "Experiences",
    readTime: "7 min read",
    date: "April 28, 2025",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    alt: "Trekking trail through Munnar forest",
    content: `Most visitors to Munnar spend their days hopping between tea estate viewpoints and calling it a trip. But Munnar has layers that most tourists never peel back.

## 1. Kayak on Mattupetty Dam at Sunrise

The dam is busy by 9am. Get there before dawn with a private kayak and you'll have the glass-still water to yourself.

## 2. Visit Eravikulam National Park (Early Weekday)

Home to the endangered Nilgiri Tahr, the park is magical early on weekday mornings before tour buses arrive.

## 3. Explore the Spice Gardens of Munnar

Beyond tea, Munnar grows cardamom, pepper, and vanilla. A guided spice garden walk is deeply sensory and educational.

## 4. Take the Sunset Jeep Safari

The trails above Munnar only accessible by jeep reveal a completely different landscape — moorland, shola forest, and wildlife.

## 5. Attend a Local Onam or Vishu Celebration

If your timing is right, participating in a local festival is transformative. Ask your homestay to help you connect.

## 6. Cook a Kerala Sadya

Book a cooking class and learn to prepare the traditional banana-leaf feast. The skills — and flavours — come home with you.

## 7. Trek the Meesapulimala Peak

At 2640m, it's the second highest peak in Kerala. The all-night trek rewards you with an unforgettable dawn view.

## 8. Visit the Rajamala Wildlife Sanctuary

Less visited than Eravikulam, this sanctuary offers excellent birdwatching and a quieter wilderness experience.

## 9. Stay in a Cave-Themed Homestay

Yes, we're biased — but the experience of sleeping in our cave suite genuinely changes how you see Munnar accommodation.

## 10. Sit in Silence at a Tea Factory

Most tours rush through the factory. Ask to spend time just sitting and watching the processing. The aromas and rhythms are meditative.`,
  },
  {
    slug: "kerala-homestay-vs-hotel",
    title: "Homestay vs Hotel in Munnar: Which Is Right for You?",
    excerpt: "Both have their place, but for a destination like Munnar, the choice profoundly affects the quality of your experience. Here's how to decide.",
    category: "Travel Tips",
    readTime: "4 min read",
    date: "March 12, 2025",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    alt: "Cozy homestay room interior in Kerala",
    content: `The debate between hotels and homestays is especially relevant in Munnar, where the destination itself is intimate and personal. Here's a candid breakdown.

## The Case for Hotels

Hotels offer consistency. You know exactly what you're getting — reliable room service, standard amenities, professional staff trained to a corporate protocol.

For business travelers, couples who want privacy without social interaction, or guests who prefer predictability — hotels are the right choice.

## The Case for Homestays (Like Ours)

A homestay puts you inside a local family's world. At S&B Dreams House, you're not a room number — you're a guest we've been expecting.

**What you gain:**
- Home-cooked meals made that morning with market-fresh ingredients
- Local knowledge that no TripAdvisor review can replicate
- Flexibility — we'll rearrange tours, meals, and schedules around you
- Stories — the kind that only happen when strangers become friends over dinner

**What to consider:**
- Homestays vary enormously in quality — read reviews carefully
- You're sharing a space with the property, which some guests prefer to avoid
- Amenities may be simpler than a 5-star hotel

## Our Honest Recommendation

If you're visiting Munnar for the first time and want to truly understand the place — choose a homestay. If you're coming for a business conference or want a spa weekend — choose a hotel.

We'll always tell you honestly if we're not the right fit for your trip.`,
  },
  {
    slug: "munnar-food-guide",
    title: "A Food Lover's Guide to Munnar: What to Eat and Where",
    excerpt: "Kerala cuisine is one of India's most celebrated. In Munnar, you'll find it at its most authentic. This is your complete guide to eating well.",
    category: "Food & Culture",
    readTime: "6 min read",
    date: "February 5, 2025",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
    alt: "Traditional Kerala cuisine spread on banana leaf",
    content: `Kerala food is coconut-rich, spice-forward, and deeply rooted in the land. In Munnar, you're close to the source — the spices, the tea, the vegetables all grow within sight of your table.

## Must-Try Dishes in Munnar

### Appam with Stew
The quintessential Kerala breakfast. Lacy, fermented rice pancakes served with a mild coconut milk stew with vegetables or chicken.

### Puttu and Kadala Curry
Steamed rice cylinders with a black chickpea curry. Simple, filling, and deeply satisfying on a cold Munnar morning.

### Fish Molee
A delicate, coconut milk-based fish curry. In Munnar, freshwater fish from the dams is the local option.

### Kerala Sadya
The grand banana-leaf feast served during festivals. Up to 28 dishes served on a single leaf — rice, sambar, avial, thoran, pachadi, payasam.

### Cardamom Tea
Not just tea — tea brewed with freshly crushed cardamom grown minutes away. The difference from anything you've had before is immediate.

## Where to Eat

**At your homestay:** The best meals in Munnar are almost always home-cooked. At S&B Dreams House, our cook prepares everything fresh using produce from our garden and the local market.

**Rapsy Restaurant:** Reliable local favourite in Munnar town for Kerala meals.

**Sri Mahalakshmi Hotel:** Excellent vegetarian meals, popular with locals.

## What to Bring Home

- Munnar cardamom (far superior to supermarket versions)
- Single-estate Munnar tea
- Kerala spice blends
- Homemade banana chips`,
  },
];

// ─── Gallery Images ────────────────────────────────────────────────────────────
export const GALLERY_IMAGES = [
  { src: "/hero_slides/Slide1.webp", alt: "S&B Dreams House exterior cave architecture", category: "property" },
  { src: "/hero_slides/Slide2.webp", alt: "Tropical garden and outdoor seating area", category: "garden" },
  { src: "/hero_slides/Slide3.webp", alt: "Cozy interior room at S&B Dreams House", category: "rooms" },
  { src: "/hero_slides/Slide4.webp", alt: "Panoramic mountain view from S&B Dreams House", category: "views" },
  { src: "/hero_slides/Slide5.webp", alt: "Evening gathering at the homestay", category: "experiences" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80", alt: "Cave Suite room interior", category: "rooms" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80", alt: "Garden View Room", category: "rooms" },
  { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80", alt: "Kerala home-cooked breakfast spread", category: "food" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80", alt: "Nature walk trail through Munnar forest", category: "experiences" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", alt: "Sunrise over misty Munnar mountains", category: "views" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Tea estate tour in Munnar", category: "experiences" },
  { src: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80", alt: "Sunrise viewing point", category: "views" },
];
