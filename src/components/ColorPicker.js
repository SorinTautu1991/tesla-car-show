import React from "react";
import * as THREE from "three";

const ColorPicker = () => {
  const handleClick = e => {
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };
  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
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
