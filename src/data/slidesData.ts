import { SlideData } from '../types';

export const slides: SlideData[] = [
  // Question 1
  {
    id: 1,
    number: 1,
    question: "What is Amit's favorite pose?",
    subtitle: "Click any box to reveal the pose & name",
    type: 'reveal-options',
    options: [
      {
        id: 'phone-scroll',
        name: 'Phone Scrolling Pose',
        tagline: 'Deep in thought, scrolling through Slack & Twitter',
        imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-blue-600 to-indigo-900',
        iconName: 'Smartphone',
        description: 'Constantly glancing at notifications, checking metrics, or replying with lightning speed.'
      },
      {
        id: 'chin-thinker',
        name: 'The Thinker (Chin Touch)',
        tagline: 'Deep contemplative strategic master pose',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-amber-600 to-yellow-900',
        iconName: 'Brain',
        description: 'Resting the chin on hand, analyzing product architecture and world-domination plans.'
      },
      {
        id: 'arms-crossed-boss',
        name: 'Arms Crossed Boss Pose',
        tagline: 'Commanding the room with quiet confidence',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-emerald-600 to-teal-900',
        iconName: 'UserCheck',
        description: 'Leaning back with folded arms, observing team discussions with a discerning smile.'
      }
    ]
  },

  // Question 2
  {
    id: 2,
    number: 2,
    question: "Where is Amit most likely to be when he's not working?",
    subtitle: "Click any location to reveal",
    type: 'reveal-options',
    options: [
      {
        id: 'gym',
        name: 'At the Gym',
        tagline: 'Crushing heavy sets & hitting PRs',
        imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-red-600 to-stone-900',
        iconName: 'Dumbbell',
        description: 'Pushing iron, perfecting form, and listening to high-tempo workout beats.'
      },
      {
        id: 'party',
        name: 'At a Party',
        tagline: 'Vibrant vibes, DJ beats & great conversations',
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-purple-600 to-pink-900',
        iconName: 'PartyPopper',
        description: 'Lighting up the room, mingling with friends, and enjoying the weekend.'
      },
      {
        id: 'movie',
        name: 'Watching a Movie',
        tagline: 'Immersed in cinema, popcorn & epic stories',
        imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-amber-600 to-stone-900',
        iconName: 'Film',
        description: 'Binge-watching classic thrillers, sci-fi masterpieces, or new box-office hits.'
      },
      {
        id: 'chilling-home',
        name: 'Lounging at Home',
        tagline: 'Cozy coffee, peace & recharging energy',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-emerald-700 to-slate-900',
        iconName: 'Coffee',
        description: 'Unwinding in absolute comfort with a warm brew and calm ambient silence.'
      }
    ]
  },

  // Question 3
  {
    id: 3,
    number: 3,
    question: "What is Amit's favorite game or sport?",
    subtitle: "Click to reveal the sports & games",
    type: 'reveal-options',
    options: [
      {
        id: 'poker',
        name: 'Poker',
        tagline: 'High stakes, bluffing & calculating odds',
        imageUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-red-700 to-neutral-900',
        iconName: 'Spade',
        description: 'Reading opponents, stacking chips, and executing calculated all-in bluffs.'
      },
      {
        id: 'basketball',
        name: 'Basketball',
        tagline: 'Fast breaks, crossovers & swishing threes',
        imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-orange-600 to-amber-900',
        iconName: 'Trophy',
        description: 'Dribbling past defenders on the hardwood and draining clutch jumpers.'
      },
      {
        id: 'football',
        name: 'Football',
        tagline: 'Tactical gameplay, teamwork & top-corner goals',
        imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-emerald-600 to-green-950',
        iconName: 'Goal',
        description: 'Sprinting across the pitch, threading through-balls, and celebrating victories.'
      },
      {
        id: 'cricket',
        name: 'Cricket',
        tagline: 'Cover drives, yorkers & electric match finishes',
        imageUrl: 'https://images.unsplash.com/photo-1531415074868-036b1c57e3ce?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-blue-600 to-sky-950',
        iconName: 'Activity',
        description: 'Timing cover drives with perfection and passionately cheering every boundary.'
      }
    ]
  },

  // Question 4
  {
    id: 4,
    number: 4,
    question: "On a scale of 0 to 5, how would you rate Amit's sense of humor?",
    subtitle: "Drag the slider or click the scale to see dynamic reactions",
    type: 'rating'
  },

  // Question 5
  {
    id: 5,
    number: 5,
    question: "How would you describe Amit's personality?",
    promptNote: "🙋‍♂️ (To people in the room) Raise your hand if you think...",
    subtitle: "Click each card to reveal the personality trait",
    type: 'reveal-options',
    options: [
      {
        id: 'humorous',
        name: 'Humorous',
        tagline: 'Witty, playful & bringing instant laughter',
        imageUrl: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-yellow-500 to-amber-800',
        iconName: 'Laugh',
        description: 'Cracking sharp jokes, keeping spirits soaring high, and never taking things too rigidly.'
      },
      {
        id: 'moderate',
        name: 'Moderate',
        tagline: 'Balanced, adaptable & seamlessly composed',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-sky-600 to-blue-900',
        iconName: 'Scale',
        description: 'Perfect equilibrium between serious execution and lighthearted team banter.'
      },
      {
        id: 'serious',
        name: 'Serious',
        tagline: 'Laser-focused, analytical & mission-driven',
        imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-slate-700 to-zinc-950',
        iconName: 'Target',
        description: 'Deep dedication, uncompromising standards, and relentless drive toward the vision.'
      }
    ]
  },

  // Question 6
  {
    id: 6,
    number: 6,
    question: "What is Amit's absolute favorite topic to discuss?",
    subtitle: "Click any topic to reveal",
    type: 'reveal-options',
    options: [
      {
        id: 'philosophy',
        name: 'Philosophy',
        tagline: 'Existential ideas, purpose & deep human thought',
        imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-purple-700 to-indigo-950',
        iconName: 'Compass',
        description: 'Debating consciousness, ethics, stoicism, and fundamental truths of existence.'
      },
      {
        id: 'mythology',
        name: 'Mythology',
        tagline: 'Ancient legends, epic sagas & timeless tales',
        imageUrl: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-amber-600 to-yellow-950',
        iconName: 'Sparkles',
        description: 'Exploring Mahabharata, Greek mythos, warrior archetypes, and symbolic metaphors.'
      },
      {
        id: 'history',
        name: 'History',
        tagline: 'Rise & fall of empires, revolutions & leaders',
        imageUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-stone-600 to-stone-900',
        iconName: 'BookOpen',
        description: 'Analyzing pivotal moments in world history, warfare tactics, and civilization shifts.'
      },
      {
        id: 'stories',
        name: 'Stories',
        tagline: 'Personal narratives, cinema lore & life anecdotes',
        imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-rose-600 to-pink-950',
        iconName: 'MessageSquare',
        description: 'Captivating everyone with engaging real-life storytelling and unexpected plot twists.'
      },
      {
        id: 'tech',
        name: 'Tech & Startups',
        tagline: 'AI disruption, future frameworks & scaling Waya',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-cyan-600 to-blue-950',
        iconName: 'Cpu',
        description: 'Dissecting cutting-edge technology, user experience paradigms, and product scaling.'
      },
      {
        id: 'reality-shows',
        name: 'Reality Shows',
        tagline: 'Drama, celebrity antics & guilty-pleasure popcorn TV',
        imageUrl: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-fuchsia-600 to-purple-950',
        iconName: 'Tv',
        description: 'Dissecting reality show showdowns, wild drama moments, and social dynamics.'
      }
    ]
  },

  // Question 7
  {
    id: 7,
    number: 7,
    question: "Where do you see Amit if not Waya?",
    subtitle: "Click any alternate career to reveal the persona",
    type: 'reveal-options',
    options: [
      {
        id: 'bartender',
        name: 'Bartender',
        tagline: 'Master of Mixology & Midnight Stories',
        imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-amber-600 to-orange-800',
        iconName: 'Wine',
        description: 'Crafting signature cocktails, entertaining the crowd, and listening to everyone\'s best stories behind a glowing mahogany bar.'
      },
      {
        id: 'host',
        name: 'Host',
        tagline: 'Charismatic Master of Ceremonies',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-purple-600 to-indigo-800',
        iconName: 'Mic',
        description: 'Commanding the main stage with a microphone in hand, keeping the energy electric at premier galas and talk shows.'
      },
      {
        id: 'gym-trainer',
        name: 'Gym Trainer',
        tagline: 'High-Energy Fitness & Beast-Mode Coach',
        imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-emerald-600 to-teal-900',
        iconName: 'Dumbbell',
        description: 'Pushing everyone to crush their fitness PRs with relentless motivation, protein shake recipes, and discipline.'
      },
      {
        id: 'f1-racer',
        name: 'F1 Racer',
        tagline: 'Apex Speed & 300km/h Adrenaline',
        imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-red-600 to-rose-900',
        iconName: 'Zap',
        description: 'Blazing through Monaco chicane corners in a custom fireproof suit, chasing pole position and checkered flags.'
      },
      {
        id: 'sheriff',
        name: 'Sheriff',
        tagline: 'Upholder of Law & Office Order',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-yellow-700 to-stone-900',
        iconName: 'Shield',
        description: 'Wearing the gleaming golden star badge, maintaining absolute justice, and keeping the wild west in total check.'
      },
      {
        id: 'counselor',
        name: 'Counselor',
        tagline: 'Empathetic Guide & Life Strategist',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-sky-600 to-blue-900',
        iconName: 'HeartHandshake',
        description: 'Offering deep life insights, zen perspective, conflict resolution, and thoughtful mentorship over warm coffee.'
      },
      {
        id: 'actor',
        name: 'Actor',
        tagline: 'Blockbuster Hero & Stage Virtuoso',
        imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-fuchsia-600 to-violet-900',
        iconName: 'Clapperboard',
        description: 'Delivering dramatic punchlines, commanding the big silver screen, and receiving standing ovations under Hollywood lights.'
      },
      {
        id: 'chef',
        name: 'Chef',
        tagline: 'Michelin-Star Culinary Virtuoso',
        imageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
        fallbackColor: 'from-amber-500 to-red-800',
        iconName: 'Utensils',
        description: 'Orchestrating kitchen symphonies, searing gourmet dishes with precision, and crafting unforgettable flavor experiences.'
      }
    ]
  }
];
