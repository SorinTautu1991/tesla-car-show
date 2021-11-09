import React from "react";
import { useLoader, extend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
extend({ GLTFLoader });

const Model = props => {
  const model = useLoader(GLTFLoader, props.path);

  model.scene.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });
  return <primitive object={model.scene} scale={props.scale} />;
};

export default Model;
