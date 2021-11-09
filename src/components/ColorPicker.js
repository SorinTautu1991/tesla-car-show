import React from "react";
import * as THREE from "three";
import state from "../state";

const ColorPicker = () => {
  const handleClick = e => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",
        display: "flex",
        top: "20px",
      }}
    >
      <div
        onClick={handleClick}
        style={{ width: 50, height: 50, background: "blue" }}
      ></div>
      <div
        onClick={handleClick}
        style={{ width: 50, height: 50, background: "yellow" }}
      ></div>
      <div
        onClick={handleClick}
        style={{ width: 50, height: 50, background: "white" }}
      ></div>
    </div>
  );
};

export default ColorPicker;
