"use client";

import React, { useState } from "react";
import { ScreenType, PokemonData } from "@/types/pokemon";
import { POKEMON_LIST, getPokemonById } from "@/data/pokemon";
import { GameLayout } from "@/components/game/GameLayout";
import { PokemonSelector } from "@/components/game/PokemonSelector";
import { LetterScreen } from "@/components/game/LetterScreen";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("select");
  const [selectedPokemonId, setSelectedPokemonId] = useState<string>("pikachu");

  const currentPokemon: PokemonData =
    getPokemonById(selectedPokemonId) || POKEMON_LIST[0];

  const handleSelectPokemon = (pokemon: PokemonData) => {
    setSelectedPokemonId(pokemon.id);
    setCurrentScreen("letter");
  };

  const handleBackToSelect = () => {
    setCurrentScreen("select");
  };

  return (
    <GameLayout>
      {currentScreen === "select" && (
        <PokemonSelector onSelectPokemon={handleSelectPokemon} />
      )}

      {currentScreen === "letter" && (
        <LetterScreen
          key={currentPokemon.id}
          pokemon={currentPokemon}
          onBackToSelection={handleBackToSelect}
        />
      )}
    </GameLayout>
  );
}
