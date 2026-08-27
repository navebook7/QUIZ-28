import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Eye,
  EyeOff,
  Sparkles,
  Check,
  Info,
  X,
  Smartphone,
  Brain,
  UserCheck,
  Dumbbell,
  PartyPopper,
  Film,
  Coffee,
  Spade,
  Trophy,
  Activity,
  Laugh,
  Scale,
  Target,
  Compass,
  BookOpen,
  MessageSquare,
  Cpu,
  Tv,
  Wine,
  Mic,
  Zap,
  Shield,
  HeartHandshake,
  Clapperboard,
  Utensils,
  HelpCircle
} from 'lucide-react';
import { OptionItem } from '../types';

interface BlurRevealGridProps {
  options: OptionItem[];
  slideId: number;
}

export const BlurRevealGrid: React.FC<BlurRevealGridProps> = ({ options, slideId }) => {
  // Store revealed state per slide
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<OptionItem | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Reset or initialize state when slide changes
  useEffect(() => {
    setRevealedIds(new Set());
    setSelectedId(null);
    setActiveModal(null);
  }, [slideId]);

  const toggleReveal = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setRevealedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const revealAll = () => {
    setRevealedIds(new Set(options.map(o => o.id)));
  };

  const hideAll = () => {
    setRevealedIds(new Set());
    setSelectedId(null);
  };

  const allRevealed = options.length > 0 && revealedIds.size === options.length;

  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'PartyPopper': return <PartyPopper className="w-5 h-5" />;
      case 'Film': return <Film className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'Spade': return <Spade className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Laugh': return <Laugh className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Tv': return <Tv className="w-5 h-5" />;
      case 'Wine': return <Wine className="w-5 h-5" />;
      case 'Mic': return <Mic className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      case 'Clapperboard': return <Clapperboard className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  // Determine grid columns based on number of items
  const getGridClasses = () => {
    const count = options.length;
    if (count <= 3) {
      return 'grid-cols-1 sm:grid-cols-3 max-w-4xl';
    }
    if (count === 4) {
      return 'grid-cols-2 sm:grid-cols-4 max-w-4xl';
    }
    if (count === 6) {
      return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 max-w-5xl';
    }
    // 8 items (like alternate careers)
    return 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 max-w-5xl';
  };

  return (
    <div id={`reveal-grid-section-${slideId}`} className="w-full mx-auto mt-4">
      {/* Control bar: Reveal All / Hide All */}
      <div className="flex items-center justify-end gap-2 mb-3 max-w-5xl mx-auto px-2">
        <button
          type="button"
          onClick={allRevealed ? hideAll : revealAll}
          id="btn-toggle-all-reveal"
          className="flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-white/15 text-xs text-white/70 hover:text-white rounded-full border border-white/10 transition-all cursor-pointer"
        >
          {allRevealed ? (
            <>
              <EyeOff className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Hide All</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Reveal All ({revealedIds.size}/{options.length})</span>
            </>
          )}
        </button>
      </div>

      {/* Grid of Option Cards */}
      <div className={`grid ${getGridClasses()} gap-3.5 sm:gap-4 mx-auto max-h-[58vh] overflow-y-auto p-1.5 custom-scrollbar`}>
        {options.map((option, index) => {
          const isRevealed = revealedIds.has(option.id);
          const isSelected = selectedId === option.id;
          const hasError = imageErrors[option.id];

          return (
            <motion.div
              key={option.id}
              id={`option-card-${option.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (!isRevealed) {
                  toggleReveal(option.id);
                } else {
                  setSelectedId(isSelected ? null : option.id);
                }
              }}
              className={`group relative flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                isSelected
                  ? 'border-[#d4af37] ring-2 ring-[#d4af37]/60 shadow-lg shadow-[#d4af37]/20 bg-[#171510]'
                  : isRevealed
                  ? 'border-white/15 hover:border-[#d4af37]/50 bg-[#121212] hover:bg-[#181818]'
                  : 'border-white/10 hover:border-white/30 bg-[#101010]'
              }`}
            >
              {/* Image Box */}
              <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden select-none">
                {/* Real Image or Fallback */}
                {!hasError ? (
                  <img
                    src={option.imageUrl}
                    alt={option.name}
                    loading="lazy"
                    onError={() => setImageErrors(prev => ({ ...prev, [option.id]: true }))}
                    className={`w-full h-full object-cover object-center transition-all duration-500 ${
                      isRevealed
                        ? 'filter-none scale-100 group-hover:scale-105'
                        : 'blur-xl scale-110 brightness-40 grayscale'
                    }`}
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${option.fallbackColor || 'from-neutral-800 to-stone-900'} flex items-center justify-center p-4 ${
                    isRevealed ? 'filter-none' : 'blur-lg brightness-50'
                  }`}>
                    <span className="p-3 bg-black/40 backdrop-blur-sm rounded-full text-white/90">
                      {getIcon(option.iconName)}
                    </span>
                  </div>
                )}

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/20 pointer-events-none" />

                {/* BLUR OVERLAY & CLICK TO REVEAL PROMPT (When NOT revealed) */}
                {!isRevealed && (
                  <div className="absolute inset-0 backdrop-blur-md bg-black/50 flex flex-col items-center justify-center p-3 text-center transition-all group-hover:bg-black/40">
                    <div className="p-3 rounded-full bg-black/60 border border-white/20 text-[#d4af37] shadow-lg group-hover:scale-110 group-hover:border-[#d4af37] transition-all">
                      <HelpCircle className="w-6 h-6 animate-pulse" />
                    </div>
                    <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/90 group-hover:text-[#d4af37] transition-colors">
                      Click to Reveal
                    </span>
                    <span className="text-[10px] text-white/50 mt-0.5">
                      Option {index + 1}
                    </span>
                  </div>
                )}

                {/* WHEN REVEALED: Category icon badge & quick view info */}
                {isRevealed && (
                  <>
                    <div className="absolute top-2 left-2 px-2 py-1 bg-black/70 backdrop-blur-md rounded-md border border-white/15 text-xs text-white/90 flex items-center gap-1.5 shadow">
                      <span className="text-[#d4af37]">{getIcon(option.iconName)}</span>
                    </div>

                    <div className="absolute top-2 right-2 flex items-center gap-1">
                      {/* Hide/Blur individual toggle */}
                      <button
                        type="button"
                        id={`btn-hide-${option.id}`}
                        onClick={(e) => toggleReveal(option.id, e)}
                        title="Hide again"
                        className="p-1.5 bg-black/60 hover:bg-black/90 rounded-full border border-white/10 text-white/70 hover:text-white transition-colors"
                      >
                        <EyeOff className="w-3 h-3" />
                      </button>

                      {/* Details modal button */}
                      {option.description && (
                        <button
                          type="button"
                          id={`btn-info-${option.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModal(option);
                          }}
                          title="View description"
                          className="p-1.5 bg-black/60 hover:bg-black/90 rounded-full border border-white/10 text-white/70 hover:text-[#d4af37] transition-colors"
                        >
                          <Info className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </>
                )}

                {/* Selected Checkmark Overlay */}
                {isSelected && (
                  <div className="absolute inset-0 bg-[#d4af37]/20 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="p-2 bg-[#d4af37] text-black rounded-full font-bold shadow-lg animate-bounce">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </span>
                  </div>
                )}
              </div>

              {/* Below Box: Label & Name */}
              <div className="p-3 flex flex-col items-center justify-center text-center bg-[#121212] border-t border-white/5 min-h-[64px]">
                {isRevealed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center w-full"
                  >
                    <span className={`text-sm sm:text-base font-semibold tracking-wide transition-colors ${
                      isSelected ? 'text-[#d4af37]' : 'text-white group-hover:text-[#d4af37]'
                    }`}>
                      {option.name}
                    </span>
                    {option.tagline && (
                      <span className="text-[11px] text-white/50 line-clamp-1 mt-0.5 group-hover:text-white/70">
                        {option.tagline}
                      </span>
                    )}
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-1">
                    <span className="text-xs font-mono tracking-widest text-white/40 uppercase">
                      ???
                    </span>
                    <span className="text-[10px] text-white/30">Hidden</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Option Feedback Bar */}
      {selectedId && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 p-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex flex-wrap items-center justify-between gap-3 text-sm max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-2 text-white/90">
            <span className="text-[#d4af37] font-semibold">Selected Choice:</span>
            <span className="px-2.5 py-0.5 bg-[#d4af37] text-black font-bold rounded text-xs uppercase tracking-wider">
              {options.find(o => o.id === selectedId)?.name}
            </span>
            <span className="text-white/60 text-xs hidden md:inline">
              — {options.find(o => o.id === selectedId)?.tagline || options.find(o => o.id === selectedId)?.description}
            </span>
          </div>
          <button
            id="clear-selected-choice"
            onClick={() => setSelectedId(null)}
            className="text-xs text-white/60 hover:text-white underline cursor-pointer"
          >
            Clear selection
          </button>
        </motion.div>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md bg-[#161616] border border-[#d4af37]/40 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-48 w-full bg-neutral-900">
                <img
                  src={activeModal.imageUrl}
                  alt={activeModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-black/40 to-transparent" />
                <button
                  id="close-option-modal"
                  onClick={() => setActiveModal(null)}
                  className="absolute top-3 right-3 p-1.5 bg-black/70 hover:bg-black text-white rounded-full border border-white/20"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="p-2 bg-[#d4af37] text-black rounded-lg">
                    {getIcon(activeModal.iconName)}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{activeModal.name}</h3>
                    <p className="text-xs text-[#d4af37]">{activeModal.tagline}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 text-white/80 text-sm space-y-4">
                <p className="leading-relaxed text-white/90">
                  {activeModal.description}
                </p>

                <div className="flex gap-3 pt-2">
                  <button
                    id="modal-select-choice"
                    onClick={() => {
                      setSelectedId(activeModal.id);
                      setRevealedIds(prev => new Set(prev).add(activeModal.id));
                      setActiveModal(null);
                    }}
                    className="flex-1 py-2.5 bg-[#d4af37] hover:bg-[#c29e2f] text-black font-semibold rounded-lg text-sm transition-all"
                  >
                    Select "{activeModal.name}"
                  </button>
                  <button
                    id="modal-dismiss"
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
