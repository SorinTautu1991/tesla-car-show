import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = props => {
  const ref = useRef();
  useFrame(state => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} {...props} castShadow receiveShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial color="blue" />
    </mesh>
  );
};

export default Box;
