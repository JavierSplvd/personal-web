import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@chakra-ui/react";
import { color3 } from "./colors";

const Box3D = (props: any) => {
  const mesh = useRef();
  useFrame(() => {
    (mesh.current as any).rotation.x += 0.001;
    (mesh.current as any).rotation.y += 0.015;
    (mesh.current as any).rotation.z += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={color3} />
    </mesh>
  );
};

const Renderer = (props: any) => {
  return (
    <Box position="absolute" left={0} right={0} top={0} zIndex={5}>
      <Canvas style={{ height: "300px" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box3D position={[0, 0, 0]} />
      </Canvas>
    </Box>
  );
};

export default Renderer;
