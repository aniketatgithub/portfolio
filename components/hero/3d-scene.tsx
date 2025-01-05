"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html, SpotLight } from "@react-three/drei";
import { useTheme } from "next-themes";
import { useRef } from "react";
import * as THREE from "three";

function PremiumOrb() {
  const { theme } = useTheme();
  const orbRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (orbRef.current) {
      // Floating and subtle rotation
      orbRef.current.position.y = Math.sin(time * 0.5) * 0.2;
      orbRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={orbRef} castShadow>
      <sphereGeometry args={[1.5, 128, 128]} />
      <meshPhysicalMaterial
        transmission={0.95} // Frosted glass effect
        roughness={0.05}
        clearcoat={1}
        clearcoatRoughness={0.1}
        color={theme === "dark" ? "#e0e7ff" : "#ffffff"}
        thickness={1.2} // Adds depth to the glass
      />
    </mesh>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        shadows
        camera={{ position: [0, 0, 6], fov: 45 }}
        className="h-screen"
      >
        {/* Subtle Ambient Lighting */}
        <ambientLight intensity={0.4} />
        <SpotLight
          intensity={1.5}
          angle={0.4}
          penumbra={1}
          position={[10, 10, 10]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Floating Premium Orb */}
        <PremiumOrb />

        {/* Environment Map for Realistic Lighting */}
        <Environment preset="sunset" background={false} />
      </Canvas>
    </div>
  );
}
