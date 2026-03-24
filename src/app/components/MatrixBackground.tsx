import { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
  isDark?: boolean;
}

export function MatrixBackground({ isDark = false }: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix effect configuration - INCREASED VISIBILITY
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~<>[]{}';
    const fontSize = 16; // Increased font size
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.random() * -100);

    // Colors based on theme - MORE VISIBLE
    const primaryColor = isDark ? '#00ff88' : '#00dd77';
    const secondaryColor = isDark ? 'rgba(0, 255, 136, 0.15)' : 'rgba(0, 221, 119, 0.15)'; // Increased opacity
    const fadeColor = isDark ? 'rgba(10, 10, 10, 0.08)' : 'rgba(255, 255, 255, 0.08)'; // Slower fade

    let animationFrameId: number;

    const draw = () => {
      // Fade effect
      ctx.fillStyle = fadeColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix characters
      ctx.font = `bold ${fontSize}px monospace`; // Made bold

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Add glow effect for leading characters
        if (Math.random() > 0.95) {
          ctx.shadowBlur = 15; // Increased glow
          ctx.shadowColor = primaryColor;
          ctx.fillStyle = primaryColor;
        } else {
          ctx.shadowBlur = 3; // Subtle glow on all
          ctx.shadowColor = secondaryColor;
          ctx.fillStyle = secondaryColor;
        }

        ctx.fillText(text, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: isDark ? 0.7 : 0.6 }} // Increased opacity
    />
  );
}