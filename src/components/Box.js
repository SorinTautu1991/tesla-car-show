import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Box = props => {
  const ref = useRef();
  useFrame(state => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      // receiveShadow
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial
        color="white"
        roughness={0}
        clearcoat={1}
        transmission={0.7}
        transparent
        reflectivity={1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default Box;
