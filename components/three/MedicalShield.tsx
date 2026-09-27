"use client";

import { Float, RoundedBox } from "@react-three/drei";
import { MedicalCross } from "@/components/three/MedicalCross";

export function MedicalShield({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number]; scale?: number }) {
  return (
    <Float speed={0.8} rotationIntensity={0.12} floatIntensity={0.28}>
      <group position={position} scale={scale} rotation={[0.08, -0.22, 0]}>
        <RoundedBox args={[2.25, 2.75, 0.22]} radius={0.5} smoothness={6}>
          <meshPhysicalMaterial color="#0E7C66" transparent opacity={0.22} roughness={0.1} transmission={0.38} thickness={0.8} clearcoat={1} />
        </RoundedBox>
        <MedicalCross position={[0, 0, 0.2]} scale={0.58} />
      </group>
    </Float>
  );
}
