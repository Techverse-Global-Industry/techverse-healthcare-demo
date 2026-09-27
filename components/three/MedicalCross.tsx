"use client";

import { useRef } from "react";
import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export function MedicalCross({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number]; scale?: number }) {
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.16;
    group.current.rotation.x += (state.pointer.y * 0.1 - group.current.rotation.x) * 0.025;
  });

  return (
    <Float speed={1.05} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={group} position={position} scale={scale}>
        <mesh castShadow>
          <boxGeometry args={[0.52, 1.52, 0.28]} />
          <meshPhysicalMaterial color="#8BE3C1" roughness={0.24} clearcoat={0.8} />
        </mesh>
        <mesh castShadow>
          <boxGeometry args={[1.52, 0.52, 0.28]} />
          <meshPhysicalMaterial color="#8BE3C1" roughness={0.24} clearcoat={0.8} />
        </mesh>
      </group>
    </Float>
  );
}
