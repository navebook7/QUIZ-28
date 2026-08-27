/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { slides } from './data/slidesData';
import { BlurRevealGrid } from './components/BlurRevealGrid';
import { RatingBar } from './components/RatingBar';
import { SlideNavigation } from './components/SlideNavigation';
import { Sparkles, Hand } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const totalSlides = slides.length;
  const slide = slides[currentSlide];

  // Navigation handlers
  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setSlideDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setSlideDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const jumpToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides && index !== currentSlide) {
      setSlideDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
  }, [currentSlide, totalSlides]);

  // Arrow Keys and Keyboard Navigation Functionality
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent navigation if user is typing in an input/textarea if any
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case ' ': // Spacebar
          e.preventDefault();
          nextSlide();
          break;
        case 'Home':
          e.preventDefault();
          jumpToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          jumpToSlide(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          if (!e.ctrlKey && !e.metaKey) {
            toggleFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, jumpToSlide, totalSlides]);

  // Touch Swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diffX = touchStartXRef.current - e.changedTouches[0].clientX;
    const threshold = 50;

    if (diffX > threshold) {
      nextSlide();
    } else if (diffX < -threshold) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  return (
    <div
      id="presentation-app"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-screen min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between overflow-x-hidden font-sans selection:bg-[#d4af37] selection:text-black"
    >
      {/* Top Gold Progress Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-white/10 z-30">
        <motion.div
          className="h-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37]"
          initial={false}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Cinematic Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-600/5 rounded-full blur-[120px]" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Main Slide Content Area */}
      <main className="relative flex-1 flex flex-col justify-center items-center px-3 sm:px-6 py-4 max-w-6xl w-full mx-auto z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            id={`slide-${slide.id}`}
            className="w-full flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: slideDirection * 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: slideDirection * -15, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Question Number Badge */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#d4af37] uppercase font-bold py-1 px-3.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 shadow-sm">
                Question {slide.number} of {totalSlides}
              </span>
            </div>

            {/* Question Text */}
            <h2
              id={`question-title-${slide.id}`}
              className="font-light leading-snug tracking-tight text-white text-xl sm:text-3xl md:text-4xl max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
            >
              {slide.question}
            </h2>

            {/* Optional Room Interactive Note (e.g. for Question 5) */}
            {slide.promptNote && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-2.5 px-4 py-1.5 bg-[#d4af37]/15 border border-[#d4af37]/40 rounded-full text-xs sm:text-sm font-medium text-[#f3e5ab] flex items-center gap-2 shadow-lg shadow-[#d4af37]/10"
              >
                <Hand className="w-4 h-4 text-[#d4af37] animate-bounce" />
                <span>{slide.promptNote}</span>
              </motion.div>
            )}

            {/* Subtitle */}
            {slide.subtitle && !slide.promptNote && (
              <p className="text-white/60 text-xs sm:text-sm mt-1.5 max-w-xl flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                {slide.subtitle}
              </p>
            )}

            {/* Reveal Options Grid (Questions 1, 2, 3, 5, 6, 7) */}
            {slide.type === 'reveal-options' && slide.options && (
              <BlurRevealGrid options={slide.options} slideId={slide.id} />
            )}

            {/* Rating Bar with dynamic emojis (Question 4) */}
            {slide.type === 'rating' && (
              <RatingBar />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer / Controls Section */}
      <footer className="w-full pb-5 pt-1 z-20">
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          slides={slides}
          onPrev={prevSlide}
          onNext={nextSlide}
          onJumpTo={jumpToSlide}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
      </footer>
    </div>
  );
}
