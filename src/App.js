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
        camera={{ position: [1, 5, 1] }}
        shadows
      >
        <fog attach="fog" args={["white", 1, 10]} />
        <Orbit />
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <axesHelper args={[5]} />
        <Box position={[0, 1, 0]} />
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
};

export default App;
