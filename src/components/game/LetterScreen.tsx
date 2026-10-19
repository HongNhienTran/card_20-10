"use client";

import React, { useState, useEffect } from "react";
import { PokemonData } from "@/types/pokemon";
import { PokemonSprite } from "./PokemonSprite";
import SoundFX from "@/utils/soundEffects";

interface LetterScreenProps {
  pokemon: PokemonData;
  onBackToSelection: () => void;
}

export const LetterScreen: React.FC<LetterScreenProps> = ({
  pokemon,
  onBackToSelection,
}) => {
  const { letter, theme } = pokemon;

  // Combine paragraphs for typewriter progression
  const fullContent = letter.paragraphs.join("\n\n");
  const [displayedTextLength, setDisplayedTextLength] = useState<number>(0);
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);

  // Typewriter effect controller
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setDisplayedTextLength(fullContent.length);
        setIsTypingComplete(true);
      }, 0);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setDisplayedTextLength((prev) => {
        const next = prev + 2;
        if (next >= fullContent.length) {
          clearInterval(interval);
          setIsTypingComplete(true);
          return fullContent.length;
        }
        return next;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [fullContent]);

  // Fast forward / Skip typewriter
  const handleShowFullText = () => {
    SoundFX.playButtonClick();
    setDisplayedTextLength(fullContent.length);
    setIsTypingComplete(true);
  };

  // Replay typewriter animation
  const handleReplay = () => {
    SoundFX.playButtonClick();
    setDisplayedTextLength(0);
    setIsTypingComplete(false);

    const interval = setInterval(() => {
      setDisplayedTextLength((prev) => {
        const next = prev + 2;
        if (next >= fullContent.length) {
          clearInterval(interval);
          setIsTypingComplete(true);
          return fullContent.length;
        }
        return next;
      });
    }, 20);
  };

  const handleBack = () => {
    SoundFX.playButtonClick();
    onBackToSelection();
  };

  // Split displayed text into paragraphs
  const currentDisplayedParagraphs = fullContent
    .slice(0, displayedTextLength)
    .split("\n\n");

  return (
    <div className="w-full max-w-3xl flex flex-col items-center">
      {/* Top Action Bar */}
      <div className="flex items-center justify-between w-full px-2 mb-3">
        <button
          onClick={handleBack}
          className="text-xs font-body font-black text-[#1b3858] bg-white hover:bg-slate-50 px-3.5 py-2 border-3 border-[#1b3858] shadow-[3px_3px_0_0_#1b3858] flex items-center gap-1.5 focus:outline-none cursor-pointer uppercase tracking-wide transition-all active:translate-x-0.5 active:translate-y-0.5"
        >
          <span>◀</span>
          <span>CHỌN THẺ KHÁC</span>
        </button>

        <div className="flex items-center space-x-2">
          {!isTypingComplete && (
            <button
              onClick={handleShowFullText}
              className="text-[11px] font-body font-extrabold uppercase tracking-wide bg-[#ffdf00] text-[#1b3858] px-2.5 py-1.5 border-3 border-[#1b3858] shadow-[2px_2px_0_0_#1b3858] hover:bg-yellow-300 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
              title="Bỏ qua hiệu ứng gõ chữ"
            >
              HIỂN THỊ HẾT
            </button>
          )}

          <button
            onClick={handleReplay}
            className="text-[11px] font-body font-extrabold uppercase tracking-wide bg-white text-[#1b3858] px-2.5 py-1.5 border-3 border-[#1b3858] shadow-[2px_2px_0_0_#1b3858] hover:bg-slate-50 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
            title="Đọc lại từ đầu"
          >
            ĐỌC LẠI
          </button>
        </div>
      </div>

      {/* Main Letter Card with Unfold Entrance */}
      <article
        className="w-full bg-[#ffffff] border-4 border-[#1b3858] shadow-[8px_8px_0_0_#1b3858] p-5 sm:p-8 md:p-10 relative overflow-hidden animate-letter-unfold"
        style={{
          backgroundImage: `
            radial-gradient(#e2e8f0 1.2px, transparent 1.2px),
            linear-gradient(to bottom, #ffffff, #fffdf8)
          `,
          backgroundSize: "20px 20px, 100% 100%",
        }}
      >
        {/* Pixel Art Postal Stamp in Top-Right */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col items-center">
          <div
            className="w-14 h-16 sm:w-16 sm:h-20 border-3 border-dashed border-[#1b3858] bg-[#fff3b0] p-1 flex flex-col items-center justify-between shadow-[2px_2px_0_0_#1b3858]"
            aria-label="Tem bưu thiếp kỷ niệm 20/10"
          >
            <span className="text-[8px] font-pixel text-[#9a3412]">20/10</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <PokemonSprite
                src={pokemon.sprite}
                name={pokemon.name}
                type={pokemon.type}
                size={40}
                animate={false}
              />
            </div>
            <span className="text-[7px] font-pixel text-[#9a3412]">POST</span>
          </div>
        </div>

        {/* Letter Header */}
        <header className="pr-16 sm:pr-24 mb-5">
          {/* Badge */}
          <div
            className="inline-block px-3 py-1 mb-2.5 text-[10px] font-pixel border-2 border-[#1b3858] shadow-[2px_2px_0_0_#1b3858] font-bold"
            style={{
              backgroundColor: theme.badgeBg,
              color: theme.badgeText,
            }}
          >
            {letter.badge}
          </div>

          {/* Letter Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1b3858] font-body tracking-tight leading-snug">
            {letter.title}
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1 font-body">
            {letter.subtitle}
          </p>
        </header>

        {/* Companion Speech Bubble in Letter */}
        <div
          className="p-3 sm:p-4 mb-5 border-2 border-[#1b3858] shadow-[3px_3px_0_0_#1b3858] rounded flex items-center gap-3"
          style={{ backgroundColor: theme.bgSoft }}
        >
          <div className="w-12 h-12 shrink-0 bg-white border-2 border-[#1b3858] rounded p-0.5 flex items-center justify-center">
            <PokemonSprite
              src={pokemon.sprite}
              name={pokemon.name}
              type={pokemon.type}
              size={38}
              animate={false}
            />
          </div>
          <div>
            <div className="text-xs font-body font-extrabold text-[#1b3858] uppercase tracking-wide mb-0.5">
              {pokemon.name} NHẮN NHỦ:
            </div>
            <div className="text-xs sm:text-sm font-body font-semibold text-[#1b3858]">
              &ldquo;{pokemon.greeting}&rdquo;
            </div>
          </div>
        </div>

        {/* Clean Retro Pixel Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-[#3ea5f5] via-[#ffdf00] to-[#ff4d6d] my-4 border border-[#1b3858]" />

        {/* Letter Body Paragraphs */}
        <section className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-800 font-body font-medium">
          {currentDisplayedParagraphs.map((para, index) => (
            <p key={index} className="transition-opacity duration-200">
              {para}
              {!isTypingComplete &&
                index === currentDisplayedParagraphs.length - 1 && (
                  <span className="inline-block w-2 h-4 ml-1 bg-[#ffdf00] border border-[#1b3858] animate-pulse align-middle" />
                )}
            </p>
          ))}
        </section>

        {/* Companion Quote / Motivation */}
        {letter.quote && (
          <div
            className="my-5 p-3 sm:p-4 border-l-4 border-[#1b3858] bg-[#f8fafc] text-xs sm:text-sm italic font-body font-bold text-[#1b3858] flex items-center gap-2"
            style={{ backgroundColor: theme.bgSoft }}
          >
            <span>&ldquo;{letter.quote}&rdquo;</span>
          </div>
        )}

        {/* Clean Retro Border Divider */}
        <div className="w-full border-t-2 border-dashed border-slate-300 my-5" />

        {/* Signature */}
        <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-[#1b3858] p-1 shadow-[2px_2px_0_0_#1b3858]">
              <PokemonSprite
                src={pokemon.sprite}
                name={pokemon.name}
                type={pokemon.type}
                size={40}
                animate={false}
              />
            </div>
            <div>
              <span className="block font-pixel text-[10px] text-[#1b3858]">
                {pokemon.name}
              </span>
              <span className="block text-xs font-semibold text-slate-600 font-body">
                {pokemon.role}
              </span>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <span className="block text-xs sm:text-sm font-extrabold text-[#1b3858] font-body">
              {letter.signature}
            </span>
            <span className="block text-xs font-body font-bold text-slate-500 mt-1 uppercase tracking-wider">
              20/10 • GỬI TRỌN YÊU THƯƠNG
            </span>
          </div>
        </footer>
      </article>
    </div>
  );
};
