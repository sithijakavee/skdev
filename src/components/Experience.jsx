import {
  Environment,
  Float,
  OrbitControls,
  useCursor,
} from "@react-three/drei";
import { Book } from "./Book";
import { useEffect, useState } from "react";
import { Color, MeshBasicMaterial, MeshStandardMaterial } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import cardHomeBg from "../../public/images/cardHome.jpg";
import cardHelpBg from "../../public/images/cardHelp.jpg";
import cardAboutBg from "../../public/images/cardAbout.jpg";
import cardFizzyBg from "../../public/images/cardFizzy.jpg";
export const Experience = ({ setLoading, pageNo, setPageNo }) => {
  const [hovered, setHovered] = useState(false);

  const whiteColor = new Color("white");
  let colorMap;
  let link;
  
  useEffect(() => {
    setLoading(false);
     colorMap = useLoader(TextureLoader, cardHomeBg);
     link = "/";
  }, []);

  // useLoader(TextureLoader, cardBg);

  if (pageNo == 0) {
    colorMap = useLoader(TextureLoader, cardHomeBg);
    link = "";
  } else if (pageNo == 1) {
    colorMap = useLoader(TextureLoader, cardHelpBg);
    link = "";
  } else if (pageNo == 2) {
    colorMap = useLoader(TextureLoader, cardAboutBg);
    link = "";
  } else if (pageNo == 3) {
    colorMap = useLoader(TextureLoader, cardFizzyBg);
    link = "https://stackoverflow.com/";
  }

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
      <group>
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
          <meshStandardMaterial map={colorMap} />
        </mesh>
      </group>
    </>
  );
};
