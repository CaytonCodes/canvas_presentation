import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canv2 = styled.canvas`
  border: 2px solid white;
  height: 500px;
  width: 700px;
`;

function AnimatedCanvas(props) {
  const canvasRef = useRef();
  const frameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

  }, []);

  return (
    <Canv2 ref={canvasRef}><span>If you can see this, update your browser.</span></Canv2>
  );
}

export default AnimatedCanvas;
