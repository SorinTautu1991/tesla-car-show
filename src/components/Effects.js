import React, { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";

const Effects = () => {
  const [lights, setLights] = useState(null);
  const { scene } = useThree();

  useEffect(() => {
    if (scene.lights && scene.lights.length === 3) {
      setLights(scene.lights);
    }
  }, [scene.lights]);

  return lights ? (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.5}
        bokehScale={2}
        height={480}
      />
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      {/* {lights.map(light => {
        return <GodRays key={light.current.uuid} sun={light.current} />;
      })} */}
    </EffectComposer>
  ) : null;
};

export default Effects;
