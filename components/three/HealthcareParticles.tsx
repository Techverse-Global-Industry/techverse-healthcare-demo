"use client";

import { useMemo } from "react";

function pseudoRandom(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

export function HealthcareParticles({ count = 60 }: { count?: number }) {
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (pseudoRandom(index, 1) - 0.5) * 9;
      values[index * 3 + 1] = (pseudoRandom(index, 2) - 0.5) * 6;
      values[index * 3 + 2] = (pseudoRandom(index, 3) - 0.5) * 5;
    }
    return values;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#8BE3C1" size={0.035} transparent opacity={0.72} sizeAttenuation />
    </points>
  );
}
