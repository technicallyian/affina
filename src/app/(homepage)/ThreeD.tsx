'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF("/GLTF/Logo.glb");
  const groupRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
        const mesh = child as THREE.Mesh;
        const oldMaterial = mesh.material as THREE.MeshStandardMaterial;

        console.log("Original material type:", oldMaterial.constructor.name);

        const newMaterial = new THREE.MeshPhysicalMaterial({
          color: oldMaterial.color, 
          map: oldMaterial.map,
          transmission: 0.1,
          roughness: 0.5,
          thickness: 0.1,
          ior: 4.4,           
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false,
          emissive: new THREE.Color(0x259ee5), 
          emissiveIntensity: 0.1
        });

        mesh.material = newMaterial;
      }
    });
  }, [scene]);

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
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-[-1] w-full h-screen bg-gradient-to-b from-white from-2% via-[#DAFAFF] to-white to-98%">
      <Canvas camera={{ position: [0, 0, 500], fov: 1 }}>
        <ambientLight intensity={Math.PI} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
