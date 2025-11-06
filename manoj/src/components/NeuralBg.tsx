import { useEffect, useRef } from 'react';

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

export default function NeuralBg() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    let DPR = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(DPR, DPR);

    // Create subtle floating dots
    const dots: Dot[] = [];
    const dotCount = Math.floor((width * height) / 15000);
    
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    const mouse = { x: -1000, y: -1000 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    let raf = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(100, 100, 100, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and update dots
      dots.forEach((dot, i) => {
        // Subtle movement
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;

        // Mouse proximity highlight
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inRange = dist < 150;

        // Draw dot
        ctx.fillStyle = inRange 
          ? `rgba(50, 50, 50, ${0.15 + (1 - dist / 150) * 0.25})` 
          : 'rgba(100, 100, 100, 0.08)';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw subtle connections
        for (let j = i + 1; j < dots.length; j++) {
          const other = dots[j];
          const dx2 = dot.x - other.x;
          const dy2 = dot.y - other.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          
          if (dist2 < 100) {
            const alpha = (1 - dist2 / 100) * 0.08;
            ctx.strokeStyle = `rgba(100, 100, 100, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      raf = requestAnimationFrame(draw);
    }

    function onResize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      DPR = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
    }

    window.addEventListener('resize', onResize);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-50" />;
}
