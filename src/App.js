import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Bulb from "./components/Bulb";
import Background from "./components/Background";
import ColorPicker from "./components/ColorPicker";
import { Physics } from "@react-three/cannon";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [-4, 7, -10] }}
        shadows
      >
        <CameraControls />
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <Orbit />
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[6, 3, 0]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2 ** 10}
          shadow-mapSize-height={2 ** 10}
        />
        <Bulb position={[-6, 3, 0]} />
        <Bulb position={[0, 3, 0]} />
        <Bulb position={[6, 3, 0]} />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Physics>
          <Cars />

          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default App;
