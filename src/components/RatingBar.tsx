import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, Flame, Laugh, Smile, Meh, Award } from 'lucide-react';

export const RatingBar: React.FC = () => {
  const [rating, setRating] = useState<number>(3);
  const [hasInteracted, setHasInteracted] = useState(false);

  const levels = [
    {
      val: 0,
      emoji: '😐',
      title: 'Deadpan Serious',
      subtitle: 'Strictly business & zero jokes',
      color: 'from-slate-600 to-zinc-800',
      badge: 'Iron Poker Face'
    },
    {
      val: 1,
      emoji: '😏',
      title: 'Subtle Smirk',
      subtitle: 'Occasional dry one-liners & quiet smiles',
      color: 'from-blue-600 to-indigo-800',
      badge: 'Dry Wit'
    },
    {
      val: 2,
      emoji: '🙂',
      title: 'Mild Chuckle',
      subtitle: 'Clever situational humor & friendly banter',
      color: 'from-teal-600 to-emerald-800',
      badge: 'Lighthearted'
    },
    {
      val: 3,
      emoji: '😄',
      title: 'Great Vibes',
      subtitle: 'Constantly lightens the mood in meetings',
      color: 'from-amber-500 to-orange-700',
      badge: 'Room Brightener'
    },
    {
      val: 4,
      emoji: '🤣',
      title: 'Office Comedian',
      subtitle: 'Infectious laughter, comic timing & punchlines',
      color: 'from-orange-500 to-rose-700',
      badge: 'High-Energy Comic'
    },
    {
      val: 5,
      emoji: '👑',
      title: 'Standup Legend',
      subtitle: 'Ready for a Netflix Special & World Tour',
      color: 'from-yellow-400 to-amber-600',
      badge: 'Comedy Royalty'
    }
  ];

  const currentLevel = levels[rating];

  return (
    <div id="dynamic-rating-bar-section" className="w-full max-w-2xl mx-auto mt-6 px-4">
      {/* Big Dynamic Reacting Emoji Centerpiece */}
      <motion.div
        key={rating}
        initial={{ scale: 0.8, y: -10, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        className="flex flex-col items-center justify-center mb-6"
      >
        <div className="relative">
          {/* Animated Glow behind emoji */}
          <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-2xl animate-pulse" />
          
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-b from-[#222] to-[#121212] border-2 border-[#d4af37]/50 flex items-center justify-center shadow-2xl shadow-black/80">
            <span className="text-5xl sm:text-6xl select-none filter drop-shadow-md">
              {currentLevel.emoji}
            </span>
          </div>

          <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#d4af37] text-black font-extrabold text-xs rounded-full shadow-md whitespace-nowrap">
            {rating} / 5
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mt-4 tracking-tight flex items-center gap-2">
          {currentLevel.title}
        </h3>
        <p className="text-white/60 text-xs sm:text-sm mt-1 text-center max-w-md">
          {currentLevel.subtitle}
        </p>
      </motion.div>

      {/* Interactive Bar Track */}
      <div className="relative w-full py-4">
        {/* Track background */}
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm border border-white/5">
          {/* Animated Gold Fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-[#d4af37] via-[#ffe082] to-[#d4af37]"
            initial={false}
            animate={{ width: `${(rating / 5) * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Discrete Clickable Step Nodes along the Bar */}
        <div className="flex items-center justify-between w-full mt-3">
          {levels.map((item) => {
            const isSelected = rating === item.val;
            return (
              <button
                key={item.val}
                type="button"
                id={`rating-step-${item.val}`}
                onClick={() => {
                  setRating(item.val);
                  setHasInteracted(true);
                }}
                className={`group flex flex-col items-center cursor-pointer transition-transform ${
                  isSelected ? 'scale-110' : 'hover:scale-105 opacity-65 hover:opacity-100'
                }`}
              >
                {/* Node Pill */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border font-bold text-sm sm:text-base transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-lg shadow-[#d4af37]/40 ring-2 ring-white/30'
                      : 'bg-white/5 text-white/80 border-white/15 hover:border-white/40'
                  }`}
                >
                  {item.val}
                </div>
                
                {/* Small emoji label */}
                <span className="text-base sm:text-lg mt-1 select-none">
                  {item.emoji}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Interactive Tags */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs text-white/70 flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-[#d4af37]" />
          Level: <strong className="text-white">{currentLevel.badge}</strong>
        </span>
      </div>
    </div>
  );
};
