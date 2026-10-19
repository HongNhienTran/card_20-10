"use client";

import React from "react";
import { PixelBackgroundCanvas } from "./PixelBackgroundCanvas";
import { AudioPlayer } from "./AudioPlayer";

interface GameLayoutProps {
  children: React.ReactNode;
}

export const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-x-hidden bg-[#5cb8ff]">
      {/* Authentic HTML5 Canvas Pixel Art Sky & Clouds */}
      <PixelBackgroundCanvas />

      {/* Main Centered Content Area */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 flex flex-col justify-center items-center">
        {children}
      </main>

      {/* Bottom-Left Pixel Speaker Music Toggle Button */}
      <AudioPlayer />
    </div>
  );
};
