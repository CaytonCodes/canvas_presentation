import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canv = styled.canvas`
  border: 2px solid white;
`;

function Canvas(props) {
  const canvasRef = useRef();
  const frameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // draw a line
    context.moveTo(0, 0);
    context.lineTo(700, 500);
    context.stroke();

    // draw a circle
    context.beginPath();
    context.arc(350, 250, 100, 0, 2 * Math.PI);
    context.fill();

    // draw a triangle
    const l = (100 / (Math.tan((30 * Math.PI) / 180)));
    const w = l * Math.tan((60 * Math.PI) / 180);
    context.beginPath();
    context.moveTo(250, (250 - l));
    context.lineTo(250, (250 + l));
    context.lineTo(250 + w, 250);
    context.closePath();
    context.stroke();

  }, []);

  return (
    <Canv ref={canvasRef} width="700" height="500"><span>If you can see this, update your browser.</span></Canv>
  );
}

export default Canvas;
