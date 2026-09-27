"use client";

import { useEffect, useRef } from "react";
import { Float, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

export function FloatingCapsule({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number]; scale?: number }) {
  const group = useRef<Group>(null);
  const scrollRatio = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scrollRatio.current = window.scrollY / maxScroll;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.z += delta * 0.08;
    const targetX = state.pointer.y * 0.16 + scrollRatio.current * 0.28;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    group.current.rotation.y += state.pointer.x * 0.006 + scrollRatio.current * delta * 0.4;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.75}>
      <group ref={group} position={position} scale={scale} rotation={[0.4, -0.35, 0.6]}>
        <RoundedBox args={[1.12, 0.7, 0.7]} radius={0.34} smoothness={5} position={[-0.46, 0, 0]}>
          <meshPhysicalMaterial color="#0E7C66" roughness={0.2} metalness={0.05} clearcoat={0.75} clearcoatRoughness={0.15} />
        </RoundedBox>
        <RoundedBox args={[1.12, 0.7, 0.7]} radius={0.34} smoothness={5} position={[0.46, 0, 0]}>
          <meshPhysicalMaterial color="#F8FFFC" roughness={0.15} transmission={0.12} thickness={0.4} clearcoat={1} />
        </RoundedBox>
      </group>
    </Float>
  );
}
