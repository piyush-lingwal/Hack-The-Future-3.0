export const siteConfig = {
  name: "Hack The Future 3.0",
  tagline: "TRAIN. BUILD. BATTLE. EVOLVE.",
  description:
    "The ultimate Pokémon-themed hackathon where trainers from across the region come together to build, innovate, and compete. 36 hours of non-stop coding, mentorship, and evolution.",
  date: "September 11-12, 2026",
  venue: "Tulas University, Dehradun",
  registrationUrl: "#register",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "The Game", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Journey", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "Gym Leaders", href: "#mentors" },
  { label: "Allies", href: "#sponsors" },
  { label: "Prof's Lab", href: "#faq" },
];

export const stats = [
  { value: 500, suffix: "+", label: "Trainers", icon: "🎮" },
  { value: 36, suffix: "h", label: "Battle Hours", icon: "⏱️" },
  { value: 1, suffix: "L+", prefix: "₹", label: "Prize Pool", icon: "🏆" },
  { value: 5, suffix: "", label: "Battle Arenas", icon: "⚡" },
  { value: 50, suffix: "+", label: "Gym Leaders", icon: "🎓" },
];

export const tracks = [
  {
    name: "Verdant Growth",
    type: "Grass",
    color: "#78C850",
    bgGradient: "from-green-400 to-emerald-600",
    icon: "🌿",
    pokemon: "/pokemon/bulbasaur.png",
    description:
      "AI & Machine Learning — Grow intelligent systems that learn and evolve. Build models that can predict, classify, and generate.",
    challenges: ["Smart Agriculture AI", "NLP Chatbot", "Computer Vision"],
  },
  {
    name: "Inferno Forge",
    type: "Fire",
    color: "#F27C00",
    bgGradient: "from-orange-400 to-red-600",
    icon: "🔥",
    pokemon: "/pokemon/charmander.png",
    description:
      "Cloud & DevOps — Ignite scalable infrastructure. Deploy, orchestrate, and automate with blazing speed.",
    challenges: ["Auto-Scaling Platform", "CI/CD Pipeline", "Serverless App"],
  },
  {
    name: "Tidal Wave",
    type: "Water",
    color: "#30A7D7",
    bgGradient: "from-blue-400 to-cyan-600",
    icon: "💧",
    pokemon: "/pokemon/psyduck.png",
    description:
      "Web3 & Blockchain — Dive into decentralized solutions. Smart contracts, DeFi protocols, and the next wave of the internet.",
    challenges: ["DeFi Protocol", "NFT Marketplace", "DAO Governance"],
  },
  {
    name: "Thunderstrike",
    type: "Electric",
    color: "#F7D02C",
    bgGradient: "from-yellow-300 to-amber-500",
    icon: "⚡",
    pokemon: "/pokemon/electabuzz.png",
    description:
      "IoT & Hardware — Electrify the physical world. Sensors, microcontrollers, and connected devices that spark innovation.",
    challenges: ["Smart Home Hub", "Wearable Health Monitor", "Drone Control"],
  },
  {
    name: "Phantom Code",
    type: "Ghost",
    color: "#705898",
    bgGradient: "from-purple-400 to-indigo-600",
    icon: "👻",
    pokemon: "/pokemon/gengar.png",
    description:
      "Cybersecurity & Privacy — Haunt the vulnerabilities. Build tools that protect, encrypt, and secure the digital realm.",
    challenges: [
      "Zero-Knowledge Proof",
      "Threat Detection AI",
      "Encrypted Messaging",
    ],
  },
];

export const timeline = [
  {
    step: 1,
    title: "Registration Opens",
    date: "Aug 20, 2026",
    description:
      "Begin your journey! Sign up and choose your starter track. Form your team of up to 4 trainers.",
    pokemon: "/pokemon/caterpie.png",
    evolutionLabel: "Egg Phase",
  },
  {
    step: 2,
    title: "Opening Ceremony",
    date: "Sep 11, 9:00 AM",
    description:
      "The Professor welcomes all trainers. Problem statements revealed. The battle begins!",
    pokemon: "/pokemon/metapod.png",
    evolutionLabel: "Cocoon Phase",
  },
  {
    step: 3,
    title: "Hacking Begins",
    date: "Sep 11, 10:00 AM",
    description:
      "36 hours of intense building. Gym Leaders available for mentorship. Midnight snacks provided.",
    pokemon: "/pokemon/charmeleon.png",
    evolutionLabel: "Growth Phase",
  },
  {
    step: 4,
    title: "Mid-Check Review",
    date: "Sep 11, 10:00 PM",
    description:
      "Present your progress to Gym Leaders. Get feedback, pivot if needed, and power up your project.",
    pokemon: "/pokemon/ivysaur.png",
    evolutionLabel: "Evolution Phase",
  },
  {
    step: 5,
    title: "Final Submissions",
    date: "Sep 12, 10:00 PM",
    description:
      "Submit your project on Devfolio. Record your demo video. Prepare your pitch deck.",
    pokemon: "/pokemon/butterfree.png",
    evolutionLabel: "Metamorphosis",
  },
  {
    step: 6,
    title: "Demo Day & Awards",
    date: "Sep 12, 2:00 PM",
    description:
      "Present to the Elite Four judges. Winners crowned. Champion's League prizes awarded!",
    pokemon: "/pokemon/charizard.png",
    evolutionLabel: "Final Form",
  },
];

export const prizes = [
  {
    place: 1,
    title: "Champion",
    amount: "₹50,000",
    description: "The ultimate trainer. Supreme glory and eternal bragging rights.",
    pokemon: "/pokemon/arcanine.png",
    badge: "🥇",
  },
  {
    place: 2,
    title: "Elite Trainer",
    amount: "₹30,000",
    description: "A force to be reckoned with. Nearly unstoppable.",
    pokemon: "/pokemon/rapidash.png",
    badge: "🥈",
  },
  {
    place: 3,
    title: "Ace Trainer",
    amount: "₹20,000",
    description: "Rising through the ranks. A star in the making.",
    pokemon: "/pokemon/scyther.png",
    badge: "🥉",
  },
];

export const trackPrizes = [
  { track: "Best AI Hack", amount: "₹10,000", pokemon: "/pokemon/alakazam.png" },
  { track: "Best Web3 Hack", amount: "₹10,000", pokemon: "/pokemon/mewtwo.png" },
  { track: "Best IoT Hack", amount: "₹10,000", pokemon: "/pokemon/zapdos.png" },
  { track: "Fan Favorite", amount: "₹5,000", pokemon: "/pokemon/pikachu.png" },
];

export const mentors = [
  {
    name: "Prof. Rowan Oak",
    role: "AI Research Lead",
    org: "DeepMind Labs",
    specialty: "Machine Learning & Neural Networks",
    pokemon: "/pokemon/alakazam.png",
    type: "Psychic",
    color: "#F85888",
  },
  {
    name: "Leader Surge",
    role: "Cloud Architect",
    org: "AWS Solutions",
    specialty: "Distributed Systems & Kubernetes",
    pokemon: "/pokemon/electabuzz.png",
    type: "Electric",
    color: "#F8D030",
  },
  {
    name: "Master Agatha",
    role: "Security Engineer",
    org: "CrowdStrike",
    specialty: "Penetration Testing & Threat Analysis",
    pokemon: "/pokemon/gengar.png",
    type: "Ghost",
    color: "#705898",
  },
  {
    name: "Captain Brock",
    role: "Full-Stack Developer",
    org: "Google",
    specialty: "React, Next.js & System Design",
    pokemon: "/pokemon/onix.png",
    type: "Rock",
    color: "#B8A038",
  },
  {
    name: "Ranger Erika",
    role: "Data Scientist",
    org: "Meta AI",
    specialty: "NLP & Computer Vision",
    pokemon: "/pokemon/vileplume.png",
    type: "Grass",
    color: "#78C850",
  },
  {
    name: "Elite Lorelei",
    role: "Blockchain Developer",
    org: "Ethereum Foundation",
    specialty: "Smart Contracts & DeFi",
    pokemon: "/pokemon/golduck.png",
    type: "Water",
    color: "#6890F0",
  },
];

export const sponsors = [
  { name: "Silph Co.", tier: "Platinum", logo: "🏢" },
  { name: "Devon Corp.", tier: "Platinum", logo: "🔬" },
  { name: "PokéTech Inc.", tier: "Gold", logo: "💻" },
  { name: "Safari Zone Labs", tier: "Gold", logo: "🌿" },
  { name: "Battle Tower Ventures", tier: "Silver", logo: "🗼" },
  { name: "Nurse Joy Foundation", tier: "Silver", logo: "💊" },
  { name: "Officer Jenny Security", tier: "Bronze", logo: "🛡️" },
  { name: "Professor's Grant Fund", tier: "Bronze", logo: "📚" },
];

export const faq = [
  {
    question: "Who can participate in the hackathon?",
    answer:
      "Any student currently enrolled in a university or college can participate. Whether you're a first-year trainer or a seasoned veteran, all skill levels are welcome!",
  },
  {
    question: "How do I form a team?",
    answer:
      "Teams can have 2-4 members. You can register with your team or join our Discord server to find teammates. We'll also have a team formation event at the opening ceremony.",
  },
  {
    question: "What should I bring?",
    answer:
      "Your laptop, charger, and any hardware you need for IoT projects. We'll provide food, drinks, Wi-Fi, and a place to crash if you need rest. Think of it as your Pokémon Center!",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Nope! The hackathon is completely free. We believe every trainer deserves a chance to prove themselves regardless of their Pokédollars.",
  },
  {
    question: "Can I use pre-built projects?",
    answer:
      "All projects must be started from scratch during the hackathon. You can come with ideas and wireframes, but no pre-written code. Using open-source libraries and APIs is totally fine!",
  },
  {
    question: "What are the judging criteria?",
    answer:
      "Projects are judged on Innovation (30%), Technical Complexity (25%), Design & UX (20%), Impact & Practicality (15%), and Presentation (10%). Our Elite Four judges will evaluate each submission.",
  },
  {
    question: "Will there be food and refreshments?",
    answer:
      "Absolutely! We'll have meals, snacks, energy drinks, and coffee available 24/7. Vegetarian and vegan options will be provided. Consider it unlimited Rare Candies!",
  },
  {
    question: "What platforms can I build on?",
    answer:
      "You can build web apps, mobile apps, browser extensions, APIs, hardware projects, or anything else. Use any programming language or framework you like. The world is your Pokédex!",
  },
];

export const aboutFeatures = [
  {
    title: "Choose Your Starter",
    description: "Pick from 5 unique tracks and build something extraordinary in your chosen domain.",
    icon: "🎯",
    pokemon: "/pokemon/pikachu.png",
  },
  {
    title: "Train With The Best",
    description: "Get mentored by industry Gym Leaders from top tech companies worldwide.",
    icon: "🎓",
    pokemon: "/pokemon/mewtwo.png",
  },
  {
    title: "Battle & Evolve",
    description: "36 hours of intense hacking. Push your limits, level up your skills, evolve as a developer.",
    icon: "⚔️",
    pokemon: "/pokemon/charizard.png",
  },
  {
    title: "Win Champion Rewards",
    description: "Over ₹1 Lakh in prizes, swag bags, internship opportunities, and eternal glory.",
    icon: "🏆",
    pokemon: "/pokemon/arcanine.png",
  },
];
