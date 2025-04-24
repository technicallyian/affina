'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF("/GLTF/Logo.glb");
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (Math.PI / 5);
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function ThreeD() {
  return (
    <Canvas camera={{ position: [0, 0, 500], fov: 1 }}>
      <ambientLight intensity={Math.PI} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Model />
    </Canvas>
  );
}
