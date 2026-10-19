"use client";

import React, { useEffect, useRef } from "react";

interface Cloud {
  x: number;
  y: number;
  speed: number;
  type: number;
}

export const PixelBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;

    // Scale factor: 3 physical pixels per 1 virtual retro pixel
    const PIXEL_SCALE = 3;

    let width = Math.ceil(window.innerWidth / PIXEL_SCALE);
    let height = Math.ceil(window.innerHeight / PIXEL_SCALE);

    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = Math.ceil(window.innerWidth / PIXEL_SCALE);
      height = Math.ceil(window.innerHeight / PIXEL_SCALE);
      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = false;
    };

    window.addEventListener("resize", handleResize);

    // Clouds array
    const clouds: Cloud[] = [
      { x: 30, y: 18, speed: 0.12, type: 0 },
      { x: 180, y: 35, speed: 0.08, type: 1 },
      { x: 330, y: 15, speed: 0.14, type: 0 },
      { x: 490, y: 42, speed: 0.09, type: 1 },
      { x: -50, y: 55, speed: 0.07, type: 2 },
    ];

    let animationFrameId: number;

    // Draw stepped pixel cloud
    const drawPixelCloud = (c: Cloud) => {
      const cx = Math.floor(c.x);
      const cy = Math.floor(c.y);

      // Dark blue pixel outline
      ctx.fillStyle = "#1b3858";

      if (c.type === 0) {
        // Medium cloud
        ctx.fillRect(cx + 8, cy, 48, 24);
        ctx.fillRect(cx + 18, cy - 6, 28, 8);
        ctx.fillRect(cx, cy + 6, 64, 16);

        // White cloud body
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(cx + 10, cy + 2, 44, 20);
        ctx.fillRect(cx + 20, cy - 4, 24, 8);
        ctx.fillRect(cx + 2, cy + 8, 60, 12);

        // Soft blue shadow
        ctx.fillStyle = "#d4ecff";
        ctx.fillRect(cx + 4, cy + 16, 56, 4);
      } else if (c.type === 1) {
        // Large compound cloud with multiple peaks
        ctx.fillRect(cx + 12, cy, 64, 28);
        ctx.fillRect(cx + 20, cy - 8, 24, 10);
        ctx.fillRect(cx + 48, cy - 6, 20, 8);
        ctx.fillRect(cx, cy + 8, 88, 18);

        // White cloud body
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(cx + 14, cy + 2, 60, 24);
        ctx.fillRect(cx + 22, cy - 6, 20, 10);
        ctx.fillRect(cx + 50, cy - 4, 16, 8);
        ctx.fillRect(cx + 2, cy + 10, 84, 14);

        // Soft blue shadow
        ctx.fillStyle = "#d4ecff";
        ctx.fillRect(cx + 4, cy + 20, 80, 4);
      } else {
        // Long drifting flat cloud
        ctx.fillRect(cx + 8, cy, 64, 20);
        ctx.fillRect(cx + 28, cy - 5, 24, 7);
        ctx.fillRect(cx, cy + 5, 80, 14);

        // White cloud body
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(cx + 10, cy + 2, 60, 16);
        ctx.fillRect(cx + 30, cy - 3, 20, 7);
        ctx.fillRect(cx + 2, cy + 7, 76, 10);

        // Soft blue shadow
        ctx.fillStyle = "#d4ecff";
        ctx.fillRect(cx + 4, cy + 13, 72, 4);
      }
    };

    // Draw authentic classic retro pixel grass & dirt platform
    const drawRetroPixelGround = () => {
      const groundHeight = 36; // 36 virtual pixels = 108 physical screen pixels
      const groundY = height - groundHeight;

      // 1. Warm retro brick / stone dirt foundation below grass (Kirby platform style)
      const blockSize = 12;
      for (let y = groundY; y < height; y += blockSize) {
        for (let x = 0; x < width; x += blockSize) {
          const blockCol = Math.floor(x / blockSize);
          const blockRow = Math.floor((y - groundY) / blockSize);
          const isAlt = (blockCol + blockRow) % 2 === 0;

          // Block base fill
          ctx.fillStyle = isAlt ? "#be7234" : "#944e20";
          ctx.fillRect(x, y, blockSize, blockSize);

          // Top and left edge highlight for 3D pixel brick look
          ctx.fillStyle = isAlt ? "#df9353" : "#af612c";
          ctx.fillRect(x + 1, y + 1, blockSize - 2, 2);
          ctx.fillRect(x + 1, y + 1, 2, blockSize - 2);

          // Bottom and right edge shadow
          ctx.fillStyle = "#6d3511";
          ctx.fillRect(x + 1, y + blockSize - 2, blockSize - 2, 1);
          ctx.fillRect(x + blockSize - 2, y + 1, 1, blockSize - 2);

          // Dark grid mortar line
          ctx.fillStyle = "#1b3858";
          ctx.fillRect(x, y, blockSize, 1);
          ctx.fillRect(x, y, 1, blockSize);
        }
      }

      // 2. Thick Retro Pixel Grass Ledge with Stepped Overhang
      // Overhang scallop wave pattern
      const toothPattern = [0, 1, 3, 5, 7, 8, 7, 5, 3, 1, 0, 0, 2, 4, 3, 1];

      for (let x = 0; x < width; x++) {
        const toothOffset = toothPattern[x % toothPattern.length];

        // Dark outline under tooth
        ctx.fillStyle = "#1b3858";
        ctx.fillRect(x, groundY + 5 + toothOffset, 1, 2);

        // Dark grass underside
        ctx.fillStyle = "#27ae60";
        ctx.fillRect(x, groundY + 3, 1, 3 + toothOffset);

        // Main bright grass green body
        ctx.fillStyle = "#4cd137";
        ctx.fillRect(x, groundY + 1, 1, 3);

        // Sunny grass highlight line on top
        ctx.fillStyle = "#95f985";
        ctx.fillRect(x, groundY, 1, 1);
      }

      // Top dark outline of the grass platform
      ctx.fillStyle = "#1b3858";
      ctx.fillRect(0, groundY - 2, width, 2);

      // Stepped grass tufts poking up above the platform
      const tuftSpacing = 28;
      for (let tx = 14; tx < width; tx += tuftSpacing) {
        // Dark outline
        ctx.fillStyle = "#1b3858";
        ctx.fillRect(tx, groundY - 6, 3, 5);
        ctx.fillRect(tx - 2, groundY - 5, 2, 4);
        ctx.fillRect(tx + 3, groundY - 5, 2, 4);

        // Green fill
        ctx.fillStyle = "#4cd137";
        ctx.fillRect(tx, groundY - 5, 3, 4);
        ctx.fillRect(tx - 1, groundY - 4, 1, 3);
        ctx.fillRect(tx + 3, groundY - 4, 1, 3);

        // Sunny highlight
        ctx.fillStyle = "#95f985";
        ctx.fillRect(tx + 1, groundY - 5, 1, 2);
      }

      // Bottom dark frame line
      ctx.fillStyle = "#1b3858";
      ctx.fillRect(0, height - 2, width, 2);
    };

    // Render loop
    const render = () => {
      const groundHeight = 36;

      // 1. Sky Gradient (Bright Pokemon Anime Sky)
      const skyGradient = ctx.createLinearGradient(0, 0, 0, height - groundHeight);
      skyGradient.addColorStop(0, "#3da5f5");
      skyGradient.addColorStop(0.5, "#7acaff");
      skyGradient.addColorStop(0.85, "#c6e9ff");
      skyGradient.addColorStop(1, "#ebf7ff");

      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, width, height - groundHeight);

      // 2. Draw Pixel Clouds
      clouds.forEach((c) => {
        c.x += c.speed;
        if (c.x > width + 30) {
          c.x = -100;
        }
        drawPixelCloud(c);
      });

      // 3. Draw Authentic Retro Pixel Ground & Platform
      drawRetroPixelGround();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 pixel-crisp"
      style={{
        imageRendering: "pixelated",
      }}
      aria-hidden="true"
    />
  );
};
