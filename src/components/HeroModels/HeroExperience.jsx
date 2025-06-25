import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import HeroLights from "./HeroLights";
import { StudyRoom } from "./StudyRoom";
import { Computer } from "./Computer";
import Particles from "./Particles";
const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={isMobile ? Math.PI / 3 : Math.PI / 6}
        maxPolarAngle={isMobile ? Math.PI / 3 : Math.PI / 2}
      />

      <HeroLights />
      <Particles />

      <group
        scale={isMobile ? 2.4 : 3.4}
        position={[0, -1.2, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Computer />
      </group>
    </Canvas>
  );
};

export default HeroExperience;