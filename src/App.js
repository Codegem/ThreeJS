import "./App.css";
import { Canvas } from "react-three-fiber";
import { useState } from "react";

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial
        attach="material"
        color={hovered ? "gray" : "purple"}
      />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  );
}

export default App;
