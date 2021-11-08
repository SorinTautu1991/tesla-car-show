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
import BoundingBox from "./components/BoundingBox";

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
          <Suspense fallback={null}>
            <Dragable transformGroup>
              <BoundingBox
                visible
                position={[4, 1, 0]}
                dims={[3, 2, 6]}
                offset={[0, -0.4, 0.8]}
              >
                <Model
                  path="/tesla-model-3/scene.gltf"
                  scale={new Array(3).fill(0.01)}
                />
              </BoundingBox>
            </Dragable>
            <Dragable transformGroup>
              <BoundingBox
                visible
                position={[-4, 1, 0]}
                dims={[3, 2, 7]}
                offset={[0, -0.8, 2]}
              >
                <Model
                  path="/tesla-roadster/scene.gltf"
                  scale={new Array(3).fill(15)}
                  rotation={[0, -1.5, 0]}
                />
              </BoundingBox>
            </Dragable>
          </Suspense>
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
