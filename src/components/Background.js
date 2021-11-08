import React, { useMemo } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Background = props => {
  const texture = useLoader(THREE.TextureLoader, "./autoshop.jpg");
  const { gl } = useThree();

  const formatted = useMemo(() => {
    return new THREE.WebGLCubeRenderTarget(
      texture.image.height
    ).fromEquirectangularTexture(gl, texture);
  }, [gl, texture]);

  return <primitive attach="background" object={formatted.texture} />;
};

export default Background;
