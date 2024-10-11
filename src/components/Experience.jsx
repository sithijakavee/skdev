import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
import { useEffect } from "react";
export const Experience = ({ setLoading }) => {
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {/* <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        // floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      > */}
      <Book />
      <OrbitControls />
      <Environment preset="sunset"></Environment>
      <directionalLight
        position={[2, 5, 2]}
        intensity={0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      {/* </Float> */}
    </>
  );
};
