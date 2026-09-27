"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { FloatingCapsule } from "@/components/three/FloatingCapsule";
import { HealthcareParticles } from "@/components/three/HealthcareParticles";
import { MedicalCross } from "@/components/three/MedicalCross";
import { MedicineBottle } from "@/components/three/MedicineBottle";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function DnaStructure() {
  const nodes = Array.from({ length: 14 }, (_, index) => index);
  return (
    <Float speed={0.75} rotationIntensity={0.15} floatIntensity={0.22}>
      <group position={[1.65, -0.35, -1.2]} rotation={[0.1, 0.15, -0.28]} scale={0.7}>
        {nodes.map((index) => {
          const y = (index - 6.5) * 0.28;
          const angle = index * 0.82;
          const x = Math.sin(angle) * 0.48;
          const z = Math.cos(angle) * 0.48;
          return (
            <group key={index} position={[0, y, 0]}>
              <mesh position={[x, 0, z]}>
                <sphereGeometry args={[0.075, 14, 14]} />
                <meshStandardMaterial color="#19A982" roughness={0.3} />
              </mesh>
              <mesh position={[-x, 0, -z]}>
                <sphereGeometry args={[0.075, 14, 14]} />
                <meshStandardMaterial color="#8BE3C1" roughness={0.3} />
              </mesh>
            </group>
          );
        })}
      </group>
    </Float>
  );
}

function GlassOrb() {
  return (
    <Float speed={0.9} rotationIntensity={0.15} floatIntensity={0.5}>
      <mesh position={[0.55, 1.12, -1.7]}>
        <sphereGeometry args={[0.78, 40, 40]} />
        <meshPhysicalMaterial color="#BDF6DF" transparent opacity={0.28} transmission={0.5} roughness={0.08} thickness={0.9} clearcoat={1} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <div className="h-full w-full" data-cursor="view">
      <Canvas dpr={isMobile ? [1, 1.15] : [1, 1.5]} camera={{ position: [0, 0, 6.3], fov: 42 }} shadows gl={{ antialias: !isMobile, alpha: true }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 5, 6]} intensity={2.1} color="#F7FFFC" castShadow />
        <pointLight position={[-4, -1, 3]} intensity={12} color="#8BE3C1" distance={9} />
        <Suspense fallback={null}>
          <FloatingCapsule position={[-0.35, 0.05, 0.1]} scale={isMobile ? 0.9 : 1.18} />
          <MedicineBottle position={[-1.65, -1.05, -0.9]} scale={0.72} />
          <MedicalCross position={[1.78, 0.75, -0.65]} scale={0.62} />
          {!isMobile ? <DnaStructure /> : null}
          <GlassOrb />
          <HealthcareParticles count={isMobile ? 26 : 72} />
        </Suspense>
      </Canvas>
    </div>
  );
}
