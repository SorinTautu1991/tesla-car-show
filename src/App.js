import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Background from "./components/Background";
import ColorPicker from "./components/ColorPicker";
import { Physics } from "@react-three/cannon";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Lights from "./components/Lights";
import Effects from "./components/Effects";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [-4, 7, -10] }}
        shadows
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <CameraControls />
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <Orbit />
        <Lights />

        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Physics>
          <Cars />

          <Floor position={[0, -0.5, 0]} />
        </Physics>
        <Effects />
      </Canvas>
    </div>
  );
};

export default App;
