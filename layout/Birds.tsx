import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as THREE from 'three';

const Birds = (): JSX.Element => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          backgroundAlpha: 0,
          color1: '#5e81ac',
          color2: '#a3be8c',
          colorMode: 'lerp',
          birdSize: 1.2,
          wingSpan: 30.0,
          speedLimit: 5.0,
          separation: 20.0,
          alignment: 20.0,
          cohesion: 20.0,
          quantity: 2,
        })
      );
    }
    return () => {
      if (vantaEffect) setVantaEffect(0);
    };
  }, [vantaEffect]);
  return <BirdContainer ref={myRef} />;
};

export default Birds;

export const BirdContainer = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
`;
