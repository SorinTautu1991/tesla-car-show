import React from "react";
import { useBox } from "@react-three/cannon";

const BoundingBox = ({
  position = [0, 0, 0],
  offset = [0, 0, 0],
  dims = [1, 1, 1],
  visible = false,
  rotation = [0, 0, 0],
  children,
}) => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    args: dims,
    position: position,
  }));
  return (
    <group ref={ref} api={api}>
      <mesh scale={dims} visible={visible}>
        <boxBufferGeometry />
        <meshPhysicalMaterial wireframe />
      </mesh>
      <group position={offset} rotation={rotation}>
        {children}
      </group>
    </group>
  );
};

export default BoundingBox;
