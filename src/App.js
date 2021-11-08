import React from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./components/Box";
import Orbit from "./components/Orbit";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        <Box position={[-1, 1, 0]} />
        <axesHelper args={[5]} />
        <Orbit />
      </Canvas>
    </div>
  );
};

export default App;
