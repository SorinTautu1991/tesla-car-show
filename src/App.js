import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Orbit from "./components/Orbit";
import Floor from "./components/Floor";
import Bulb from "./components/Bulb";
import Background from "./components/Background";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
        shadows
      >
        {/* <fog attach="fog" args={["white", 1, 10]} /> */}
        <Orbit />
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Box position={[0, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
};

export default App;
