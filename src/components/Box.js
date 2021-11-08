import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";

const Box = props => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/wood.jpg");
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
      <sphereBufferGeometry args={[1, 100, 100]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};

export default Box;
