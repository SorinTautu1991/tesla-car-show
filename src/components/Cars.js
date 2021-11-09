import React from "react";
import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Dragable from "./Dragable";
import Model from "./Model";

const Cars = () => {
  return (
    <Suspense fallback={null}>
      <Dragable transformGroup>
        <BoundingBox
          position={[4, 1, 0]}
          dims={[3, 2, 6]}
          offset={[0, -0.2, 0.8]}
        >
          <Model
            path={process.env.PUBLIC_URL + "/tesla-model-3/scene.gltf"}
            scale={new Array(3).fill(0.01)}
          />
        </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox
          position={[-4, 7, 0]}
          dims={[3, 2, 7]}
          offset={[0, -0.8, 2]}
          rotation={[0, 4.7, 0]}
        >
          <Model
            path={process.env.PUBLIC_URL + "/tesla-roadster/scene.gltf"}
            scale={new Array(3).fill(15)}
          />
        </BoundingBox>
      </Dragable>
      <group>
        <Model
          path={process.env.PUBLIC_URL + "/mech-drone/scene.gltf"}
          scale={new Array(3).fill(0.01)}
        />
      </group>
    </Suspense>
  );
};

export default Cars;
