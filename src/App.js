import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Bulb from "./components/Bulb";
import Background from "./components/Background";
import ColorPicker from "./components/ColorPicker";
import Dragable from "./components/Dragable";
import { Physics } from "@react-three/cannon";
import Model from "./components/Model";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ColorPicker />
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [7, 7, 7] }}
        shadows
      >
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <Orbit />
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <axesHelper args={[5]} />
        <Physics>
          <Dragable>
            <Suspense fallback={null}>
              <Model
                path="/tesla-model-3/scene.gltf"
                scale={new Array(3).fill(0.01)}
                position={[4, 0.6, 0]}
              />
              <Model
                path="/tesla-roadster/scene.gltf"
                scale={new Array(3).fill(15)}
                position={[-4, 0, 0]}
                rotation={[0, -1.5, 0]}
              />
            </Suspense>
          </Dragable>
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default App;
