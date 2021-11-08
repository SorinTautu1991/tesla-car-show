import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Bulb from "./components/Bulb";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
        shadows
      >
        <Orbit />
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <axesHelper args={[5]} />
        <Box position={[-1, 1, 0]} />
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
};

export default App;
