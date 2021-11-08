import React from "react";
import { useLoader, extend } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
extend({ GLTFLoader });

const Model = props => {
  const model = useLoader(GLTFLoader, props.path);
  return <primitive object={model.scene} scale={props.scale} />;
};

export default Model;
