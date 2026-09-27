"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MedicalShield } from "@/components/three/MedicalShield";

export default function ContactScene() {
  return (
    <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0, 6], fov: 42 }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.3} />
      <directionalLight position={[3, 4, 5]} intensity={2.4} color="#F4FFF9" />
      <pointLight position={[-3, -1, 3]} intensity={8} color="#19A982" distance={8} />
      <Suspense fallback={null}>
        <MedicalShield position={[1.25, 0.2, -1.4]} scale={1.2} />
      </Suspense>
    </Canvas>
  );
}
