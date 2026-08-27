import React from 'react';
import { ArrowLeft, ArrowRight, Maximize, Minimize } from 'lucide-react';
import { SlideData } from '../types';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  slides: SlideData[];
  onPrev: () => void;
  onNext: () => void;
  onJumpTo: (index: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  slides,
  onPrev,
  onNext,
  onJumpTo,
  isFullscreen,
  onToggleFullscreen
}) => {
  return (
    <nav aria-label="Slide Presentation Controls" className="w-full flex flex-col items-center gap-3 z-20">
      {/* Primary Buttons & Slide indicators */}
      <div className="flex items-center justify-between w-full max-w-2xl px-4 gap-4">
        {/* Previous Button */}
        <button
          id="prevBtn"
          onClick={onPrev}
          disabled={currentSlide === 0}
          aria-label="Previous Slide"
          className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl border border-white/30 text-white font-medium text-sm sm:text-base uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none cursor-pointer group shadow-lg shadow-black/40"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Previous</span>
        </button>

        {/* Slide Counter & Dots */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-xs tracking-widest text-[#d4af37] font-mono uppercase">
            {currentSlide + 1} / {totalSlides}
          </span>
          <div className="flex items-center gap-1.5">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                id={`dot-slide-${idx}`}
                onClick={() => onJumpTo(idx)}
                title={`Go to Question ${idx + 1}`}
                aria-label={`Go to Question ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx
                    ? 'w-6 h-2 bg-[#d4af37] shadow-sm shadow-[#d4af37]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          id="nextBtn"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next Slide"
          className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl border border-white/30 text-white font-medium text-sm sm:text-base uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-20 disabled:pointer-events-none cursor-pointer group shadow-lg shadow-black/40"
        >
          <span>Next</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Floating Icon-Only Fullscreen Toggle in the bottom right corner */}
      <button
        id="btn-toggle-fullscreen"
        onClick={onToggleFullscreen}
        aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        className="fixed bottom-5 right-5 p-3 bg-black/60 hover:bg-black/90 backdrop-blur-md rounded-full border border-white/20 hover:border-[#d4af37]/60 text-white/80 hover:text-[#d4af37] shadow-lg shadow-black/50 transition-all duration-300 z-30 cursor-pointer group hover:scale-105 active:scale-95"
      >
        {isFullscreen ? (
          <Minimize className="w-5 h-5" />
        ) : (
          <Maximize className="w-5 h-5" />
        )}
      </button>
    </nav>
  );
};
