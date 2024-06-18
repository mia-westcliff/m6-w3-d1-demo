import React from 'react';
import { Canvas } from '@react-vertex/core';
import { useViewportSize } from '@react-vertex/dom-hooks';
import Scene from './Scene';
import './styles.css';  // Create a new CSS file if necessary

const Demo2 = () => {
  const { width, height } = useViewportSize();

  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
};

export default Demo2;
