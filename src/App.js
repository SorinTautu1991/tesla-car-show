import React, { useMemo } from "react";
import "./App.css";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import Box from "./components/Box";
import Orbit from "./components/Orbit";

const App = () => {
  const vertices = useMemo(() => {
    let p = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, -1],
    ];
    const flatArr = p.reduce((ac, cv) => [...cv, ...ac], []);
    return new Float32Array(flatArr);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        <Orbit />
        <axesHelper args={[5]} />
        <Box position={[-1, 1, 0]} />
        <line>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={["attributes", "position"]}
              array={vertices}
              itemSize={3}
              count={vertices.length / 3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="red" />
        </line>
      </Canvas>
    </div>
  );
};

export default App;
