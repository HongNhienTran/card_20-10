"use client";

import React, { useState } from "react";
import { PokemonData } from "@/types/pokemon";
import { POKEMON_LIST } from "@/data/pokemon";
import { PokemonCard } from "./PokemonCard";
import SoundFX from "@/utils/soundEffects";

interface PokemonSelectorProps {
  onSelectPokemon: (pokemon: PokemonData) => void;
}

export const PokemonSelector: React.FC<PokemonSelectorProps> = ({
  onSelectPokemon,
}) => {
  const [openingPokemonId, setOpeningPokemonId] = useState<string | null>(null);

  const handleCardClick = (pokemon: PokemonData) => {
    if (openingPokemonId) return;

    setOpeningPokemonId(pokemon.id);
    SoundFX.playSelectJingle();

    setTimeout(() => {
      onSelectPokemon(pokemon);
    }, 420);
  };

  return (
    <div className="w-full max-w-5xl flex flex-col items-center">
      {/* Retro Title & Header */}
      <div className="text-center mb-6 sm:mb-8">
        {/* Retro Header Tag */}
        <div className="inline-block px-3 py-1 mb-3 bg-[#ffffff] border-3 border-[#1b3858] shadow-[3px_3px_0_0_#1b3858] font-body font-extrabold text-xs uppercase tracking-wide text-[#1b3858]">
          NGÀY PHỤ NỮ VIỆT NAM 20/10
        </div>

        {/* Main Title */}
        <h1 className="font-pixel text-2xl sm:text-4xl md:text-5xl text-[#ffffff] drop-shadow-[4px_4px_0_#1b3858] tracking-tight leading-tight">
          POKÉMON 20/10
        </h1>
        <div className="font-body font-black text-lg sm:text-2xl text-[#ffdf00] mt-1.5 drop-shadow-[2px_2px_0_#1b3858] tracking-wider uppercase">
          THIỆP CHÚC MỪNG
        </div>

        {/* Subtitle */}
        <p className="mt-3 text-xs sm:text-sm text-[#1b3858] font-body font-bold max-w-lg mx-auto bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded border-2 border-[#1b3858] shadow-[2px_2px_0_0_#1b3858]">
          Chọn một người bạn Pokémon đồng hành bên dưới để mở thiệp.
        </p>
      </div>

      {/* 4 Pokémon Cards Grid */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {POKEMON_LIST.map((poke) => (
          <PokemonCard
            key={poke.id}
            pokemon={poke}
            onSelect={handleCardClick}
            isOpening={openingPokemonId === poke.id}
            isDisabled={
              openingPokemonId !== null && openingPokemonId !== poke.id
            }
          />
        ))}
      </div>
    </div>
  );
};
