import React from "react";
import state from "../state";

const style = {
  zIndex: 1,
  position: "absolute",
  bottom: "30vh",
  height: "30px",
  width: "30px",
  borderRadius: "100%",
  background: "white",
  textAlign: "center",
  fontSize: 16,
  fontWeight: "bold",
  opacity: 0.7,
  border: "1px solid black",
  cursor: "pointer",
};

const CameraButtons = () => {
  const sets = {
    //   model 3
    1: {
      cameraPos: [9, 2, 4],
      target: [4, 0, 0],
      name: "Obj3d66-806492-66-78_Obj3d66-806492-66-78_mtl_0",
    },
    // roadster
    2: { cameraPos: [1, 2, 5], target: [-4, 0, 0], name: "body_primary_0" },
  };
  const handleClick = num => {
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.activeMeshName = sets[num].name;
    state.shouldUpdate = true;
  };

  return (
    <>
      <button onClick={e => handleClick(2)} style={{ ...style, left: "40vw" }}>
        {"<"}
      </button>
      <button
        onClick={e => handleClick(1)}
        style={{
          ...style,
          right: "40vw",
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
