"use client";

import { Float } from "@react-three/drei";

export function MedicineBottle({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number]; scale?: number }) {
  return (
    <Float speed={1.15} rotationIntensity={0.22} floatIntensity={0.45}>
      <group position={position} scale={scale} rotation={[0.1, 0.45, -0.08]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.42, 0.47, 1.1, 32]} />
          <meshPhysicalMaterial color="#F4FFF9" roughness={0.28} transmission={0.08} clearcoat={0.65} />
        </mesh>
        <mesh position={[0, 0.68, 0]} castShadow>
          <cylinderGeometry args={[0.31, 0.31, 0.26, 32]} />
          <meshStandardMaterial color="#0E7C66" roughness={0.55} />
        </mesh>
        <mesh position={[0, 0.03, 0.44]}>
          <planeGeometry args={[0.55, 0.46]} />
          <meshStandardMaterial color="#E9F8F2" roughness={0.75} />
        </mesh>
      </group>
    </Float>
  );
}
