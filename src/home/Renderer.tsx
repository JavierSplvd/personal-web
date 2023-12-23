import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@chakra-ui/react";

const Box3D = (props: any) => {
  const mesh: any = useRef();
  const originalPosition = [...props.position];
  const frequency = getRandomValue(1, 1) / 10000;
  const amplitude = getRandomValue(0.5, 0.5);
  useFrame((state) => {
    // sinusoide movement over x and y axis
    const delta = Math.sin(new Date().getTime() * frequency) * amplitude;
    if(mesh.current) mesh.current.position.x = originalPosition[0] + delta;
    if(mesh.current) mesh.current.position.y = originalPosition[1] + delta;
  });

  // random rotation
  return (
    <>
      <mesh {...props} ref={mesh} rotation={[Math.random(), Math.random(), Math.random()]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};

const Camera = () => {
  const ref = useRef();
  return <perspectiveCamera ref={ref} />;
};

const Renderer: React.FC = () => {
  return (
    <Box position="absolute" left={0} right={0} top={0} zIndex={5}>
      <Canvas style={{ height: "100vh" }}>
        <Camera />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {Array(500)
          .fill(0)
          .map((_, i) => (
            <Box3D
              position={[
                getRandomValue(0, 50),
                getRandomValue(0, 50),
                getRandomValue(-20, 50),
              ]}
              key={i}
            />
          ))}
      </Canvas>
    </Box>
  );
};

function getRandomValue(center: number, range: number) {
  return center + (Math.random() * range - range / 2);
}

export default Renderer;
