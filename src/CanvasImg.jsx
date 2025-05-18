// src/CanvasComImagem.jsx
import { useEffect, useRef } from 'react';
import cat from './img/cat.png';

export default function CanvasComImagem() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = cat;

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  return <canvas ref={canvasRef} width={300} height={300} />;
}
