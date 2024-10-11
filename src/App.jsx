import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import BookLoader from "./components/BookLoader";
import Logic from "./components/Logic";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <BookLoader />}
      <UI />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 30 }}>
        <group position-y={0}>
          <Suspense
            fallback={<Logic loading={loading} setLoading={setLoading} />}
          >
            <Experience setLoading={setLoading} />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default App;
