import React from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import Box from "./components/Box";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ background: "black" }}>
        <Box />
      </Canvas>
    </div>
  );
};

export default App;
