import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Glasses from "./Glasses";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CanvasContainer = () => {
  return (
    <Canvas style={{ width: "100vw" }} camera={{}}>
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
      <ambientLight intensity={1} castShadow={false} />

      <directionalLight position={[5, 5, 15]} intensity={4} />

      <Glasses />

      <Environment preset="forest" />
    </Canvas>
  );
};

export default CanvasContainer;
