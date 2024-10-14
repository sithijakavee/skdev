import {
  Environment,
  Float,
  OrbitControls,
  useCursor,
} from "@react-three/drei";
import { Book } from "./Book";
import { useEffect, useState } from "react";
import { Color, MeshBasicMaterial, MeshStandardMaterial } from "three";

export const Experience = ({ setLoading, pageNo, setPageNo }) => {
  const [hovered, setHovered] = useState(false);

  const whiteColor = new Color("white");

  let link;
     link = "/";


  useEffect(() => {
    setLoading(false);
     
  }, []);

  useCursor(hovered);

  return (
    <>
      <Book pageNo={pageNo} setPageNo={setPageNo} />
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
      <Environment preset="sunset" />
      <directionalLight
        position={[2, 5, 2]}
        intensity={0}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh
        position-y={-0.5}
        position-x={-1}
        rotation-x={-Math.PI / 2.4}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>


      {/* <group>
        <mesh
          position={[0.5, 1.1, 1]}
          onClick={() => link != "" && window.open(link)}
          onPointerEnter={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            setHovered(false);
          }}
        >
          <boxGeometry args={[0.6, 0.2, 0.1]} />
          <meshStandardMaterial map={homeMap} opacity={pageNo == 0 ? 1 : 0} transparent={true}/>
        </mesh>

        <mesh
          position={[0.5, 1.1, 1]}
          onClick={() => link != "" && window.open(link)}
          onPointerEnter={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            setHovered(false);
          }}
        >
          <boxGeometry args={[0.6, 0.2, 0.1]} />
          <meshStandardMaterial map={helpMap} opacity={pageNo == 1 ? 1 : 0} transparent={true}/>
        </mesh>

        <mesh
          position={[0.5, 1.1, 1]}
          onClick={() => link != "" && window.open(link)}
          onPointerEnter={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            setHovered(false);
          }}
        >
          <boxGeometry args={[0.6, 0.2, 0.1]} />
          <meshStandardMaterial map={aboutMap} opacity={pageNo == 2 ? 1 : 0} transparent={true}/>
        </mesh>

        <mesh
          position={[0.5, 1.1, 1]}
          onClick={() => link != "" && window.open(link)}
          onPointerEnter={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            setHovered(false);
          }}
        >
          <boxGeometry args={[0.6, 0.2, 0.1]} />
          <meshStandardMaterial map={fizzyMap} opacity={pageNo == 3 ? 1 : 0} transparent={true}/>
        </mesh>
      </group> */}
    </>
  );
};
