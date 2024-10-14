import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import BookLoader from "./components/BookLoader";
import Logic from "./components/Logic";
import Popup from "./components/Popup";

function App() {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pageNo, setPageNo] = useState(0);
  useEffect(() => {
    const width = screen.width;

    // console.log(width);

    if (width < 500) {
      setIsMobile(true);
    }
  }, []);

  // console.log(pageNo)

  return (
    <>
      {loading && <BookLoader />}
      <UI />
      <Canvas
        shadows
        camera={{ position: isMobile ? [-0.5, 0, 8] : [-0.5, 0, 6], fov: 30 }}
      >
        <group position-y={0}>
          <Suspense
            fallback={<Logic loading={loading} setLoading={setLoading} />}
          >
            <Experience setLoading={setLoading} pageNo={pageNo} setPageNo={setPageNo}/>
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default App;
