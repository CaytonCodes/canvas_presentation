import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canv2 = styled.canvas`
  border: 2px solid white;
`;

const draw = (context) => {
  const now = new Date();
  const s = now.getSeconds();
  const ms = now.getMilliseconds();

  // 1.) clear the canvas
  context.clearRect(0, 0, 700, 500);

  // 2.) save the canvas
  context.save();

  // 3.) Perform animations and draw
  // translate moves origin to triangle's center
  context.translate(350, 250);

  // rotate the canvas BEFORE drawing
  context.rotate(((2 * Math.PI * s) / 15) + ((2 * Math.PI * ms) / 15000));

  // draw a triangle
  const l = 173;
  const w = 300;
  context.beginPath();
  context.moveTo(-100, -l);
  context.lineTo(-100, l);
  context.lineTo(-100 + w, 0);
  context.fill();

  // 4.) restore saved state before next frame
  context.restore();

  window.requestAnimationFrame(draw.bind(null, context));
};

function AnimatedCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    window.requestAnimationFrame(draw.bind(null, context));
  }, []);

  return (
    <Canv2 ref={canvasRef} width="700" height="500"><span>If you can see this, update your browser.</span></Canv2>
  );
}

export default AnimatedCanvas;
