"use client";

import React from "react";
import { PokemonData } from "@/types/pokemon";
import { PokemonSprite } from "./PokemonSprite";

interface PokemonCardProps {
  pokemon: PokemonData;
  onSelect: (pokemon: PokemonData) => void;
  isOpening?: boolean;
  isDisabled?: boolean;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  onSelect,
  isOpening = false,
  isDisabled = false,
}) => {
  const handleClick = () => {
    if (isDisabled || isOpening) return;
    onSelect(pokemon);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-label={`Chọn thẻ ${pokemon.name} và mở thiệp`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{
        borderColor: isOpening ? pokemon.theme.primary : "#1b3858",
        boxShadow: isOpening
          ? `0 0 0 3px ${pokemon.theme.primary}, 8px 8px 0 0 #1b3858`
          : undefined,
      }}
      className={`group relative flex flex-col justify-between p-4 sm:p-5 select-none outline-none transition-all duration-200 ease-out
        border-4 bg-[#ffffff]
        ${
          isOpening
            ? "animate-card-confirm z-20 cursor-default"
            : isDisabled
            ? "opacity-40 scale-95 pointer-events-none shadow-[4px_4px_0_0_#1b3858]"
            : "cursor-pointer shadow-[6px_6px_0_0_#1b3858] hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#1b3858] focus-visible:scale-[1.04] focus-visible:shadow-[10px_10px_0_0_#1b3858] focus-visible:ring-4 focus-visible:ring-[#ffdf00] active:scale-[0.97] active:shadow-[2px_2px_0_0_#1b3858]"
        }
      `}
    >
      {/* 1. Top Type Badge & ID */}
      <div className="flex items-center justify-between w-full mb-2">
        <span
          className="px-2 py-0.5 text-[9px] font-pixel border-2 border-[#1b3858] font-bold shadow-[2px_2px_0_0_#1b3858]"
          style={{
            backgroundColor: pokemon.theme.badgeBg,
            color: pokemon.theme.badgeText,
          }}
        >
          {pokemon.typeBadge}
        </span>
        <span className="text-xs font-bold text-slate-500 font-body">
          #{pokemon.id.slice(0, 3).toUpperCase()}
        </span>
      </div>

      {/* 2. Image Frame & Sprite - Completely static */}
      <div
        className="w-full flex items-center justify-center my-2 py-3 sm:py-5 rounded border-2 border-dashed border-slate-200"
        style={{ backgroundColor: pokemon.theme.bgSoft }}
      >
        <PokemonSprite
          src={pokemon.sprite}
          name={pokemon.name}
          type={pokemon.type}
          size={90}
          animate={false}
        />
      </div>

      {/* 3. Name & Tagline */}
      <div className="text-center mt-2 flex flex-col items-center">
        <h3 className="font-pixel text-xs sm:text-sm text-[#1b3858]">
          {pokemon.name}
        </h3>
        <p className="text-xs font-body font-medium text-slate-600 mt-1 line-clamp-2 min-h-[32px] flex items-center justify-center text-center">
          {pokemon.tagline}
        </p>
      </div>

      {/* 4. Button & Arrow */}
      <div className="mt-4 pt-3 border-t-2 border-dashed border-slate-200 w-full flex items-center justify-center">
        <div
          className={`w-full py-2 px-3 text-center text-xs font-body font-extrabold uppercase tracking-wider
          border-2 border-[#1b3858] shadow-[3px_3px_0_0_#1b3858] transition-all duration-150 ease-out
          flex items-center justify-center gap-1.5
          ${
            isOpening
              ? "animate-pulse text-white"
              : "text-[#1b3858] group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0_0_#1b3858]"
          }`}
          style={{
            backgroundColor: isOpening ? pokemon.theme.primary : pokemon.theme.secondary,
            color: isOpening ? "#ffffff" : "#1b3858",
          }}
        >
          {isOpening ? (
            <span>ĐANG MỞ THIỆP...</span>
          ) : (
            <>
              <span>MỞ THIỆP</span>
              <span className="inline-block transition-transform duration-150 ease-out group-hover:translate-x-1.5">
                ▶
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
