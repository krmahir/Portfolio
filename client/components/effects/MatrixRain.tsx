"use client";

import { useEffect, useRef } from "react";
import useReducedMotion from "@/hooks/useReducedMotion";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || reducedMotion) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let columns = 0;

    const fontSize = 15;
    const characters = "01ABCDEF<>[]{}";
    let drops: number[] = [];

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      columns = Math.ceil(width / fontSize);

      drops = Array.from(
        { length: columns },
        () => Math.random() * (height / fontSize)
      );
    };

    const draw = () => {
      context.fillStyle = "rgba(5, 10, 9, 0.08)";
      context.fillRect(0, 0, width, height);

      context.fillStyle = "#20e3a2";
      context.font = `${fontSize}px monospace`;

      for (let index = 0; index < drops.length; index++) {
        const character =
          characters[Math.floor(Math.random() * characters.length)];

        const x = index * fontSize;
        const y = drops[index] * fontSize;

        context.fillText(character, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[index] = 0;
        } else {
          drops[index] += 0.45;
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas"
      aria-hidden="true"
    />
  );
}