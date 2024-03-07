import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";

function CarShow() {
  return null;
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
