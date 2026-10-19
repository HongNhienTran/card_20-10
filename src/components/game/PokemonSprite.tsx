"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PokemonSpriteProps {
  src: string;
  name: string;
  type?: string;
  size?: number;
  className?: string;
  animate?: boolean;
}

export const PokemonSprite: React.FC<PokemonSpriteProps> = ({
  src,
  name,
  type = "Pokemon",
  size = 96,
  className = "",
  animate = false,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${
        animate ? "animate-pixel-bounce" : ""
      } ${className}`}
      style={{ width: size, height: size }}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={`Sprite người bạn ${name} (${type})`}
          width={size}
          height={size}
          className="pixel-crisp object-contain pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]"
          onError={() => setHasError(true)}
          priority
          unoptimized
        />
      ) : (
        /* Clean fallback silhouette if image is not found */
        <div
          role="img"
          aria-label={`Biểu tượng đại diện ${name}`}
          className="w-full h-full flex flex-col items-center justify-center rounded bg-slate-100 border-2 border-dashed border-slate-400 p-2 text-center text-[10px] text-slate-700 font-pixel"
        >
          <span className="truncate max-w-full font-bold">{name}</span>
        </div>
      )}
    </div>
  );
};
