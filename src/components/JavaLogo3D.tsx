"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Environment } from "@react-three/drei";
import * as THREE from "three";

function JavaCoffee() {
  const groupRef = useRef<THREE.Group>(null);
  const steamRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (steamRef.current) {
      steamRef.current.children.forEach((child, i) => {
        child.position.y = 0.8 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1 + i * 0.15;
        child.position.x = Math.sin(state.clock.elapsedTime * 1.5 + i * 0.5) * 0.1;
      });
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Coffee Cup Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.6, 1.2, 32]} />
          <MeshDistortMaterial
            color="#f89820"
            metalness={0.4}
            roughness={0.3}
            distort={0.1}
            speed={2}
          />
        </mesh>

        {/* Cup Rim */}
        <mesh position={[0, 0.6, 0]}>
          <torusGeometry args={[0.8, 0.05, 16, 32]} />
          <meshStandardMaterial
            color="#f89820"
            metalness={0.5}
            roughness={0.3}
            emissive="#f89820"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Cup Handle */}
        <mesh position={[0.95, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.3, 0.08, 16, 32, Math.PI]} />
          <meshStandardMaterial
            color="#f89820"
            metalness={0.4}
            roughness={0.3}
            emissive="#f89820"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Coffee Surface */}
        <mesh position={[0, 0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.75, 32]} />
          <meshStandardMaterial
            color="#3d2817"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>

        {/* Steam */}
        <group ref={steamRef}>
          {[0, 1, 2].map((i) => (
            <Sphere key={i} args={[0.08 - i * 0.015, 16, 16]} position={[-0.2 + i * 0.2, 0.8 + i * 0.15, 0]}>
              <meshStandardMaterial
                color="#5382a1"
                transparent
                opacity={0.5 - i * 0.1}
                emissive="#5382a1"
                emissiveIntensity={0.4}
              />
            </Sphere>
          ))}
        </group>

        {/* Java Code Symbol - Brackets */}
        <group position={[0, 0, 0.65]}>
          <Box args={[0.08, 0.4, 0.02]} position={[-0.15, 0, 0]}>
            <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
          </Box>
          <Box args={[0.15, 0.08, 0.02]} position={[-0.08, 0.16, 0]}>
            <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
          </Box>
          <Box args={[0.15, 0.08, 0.02]} position={[-0.08, -0.16, 0]}>
            <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
          </Box>

          <Box args={[0.08, 0.4, 0.02]} position={[0.15, 0, 0]}>
            <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
          </Box>
          <Box args={[0.15, 0.08, 0.02]} position={[0.08, 0.16, 0]}>
            <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
          </Box>
          <Box args={[0.15, 0.08, 0.02]} position={[0.08, -0.16, 0]}>
            <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
          </Box>
        </group>
      </group>
    </Float>
  );
}

function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const elements = useMemo(() => [
    { position: [2.5, 0.5, 0], color: "#8b5cf6", scale: 0.15, speed: 1.5 },
    { position: [-2.5, -0.3, 0.5], color: "#3b82f6", scale: 0.12, speed: 2 },
    { position: [1.8, -0.8, 1.5], color: "#f97316", scale: 0.1, speed: 1.8 },
    { position: [-1.5, 0.8, 1], color: "#10b981", scale: 0.13, speed: 1.6 },
    { position: [0, 1.5, 2], color: "#ec4899", scale: 0.11, speed: 2.2 },
    { position: [-2, 0, 1.5], color: "#6366f1", scale: 0.14, speed: 1.4 },
  ], []);

  return (
    <group ref={groupRef}>
      {elements.map((el, i) => (
        <Float
          key={i}
          speed={el.speed}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          {i % 3 === 0 ? (
            <Box args={[el.scale * 2, el.scale * 2, el.scale * 2]} position={el.position as [number, number, number]}>
              <MeshDistortMaterial
                color={el.color}
                metalness={0.8}
                roughness={0.2}
                distort={0.3}
                speed={3}
              />
            </Box>
          ) : i % 3 === 1 ? (
            <Sphere args={[el.scale, 16, 16]} position={el.position as [number, number, number]}>
              <MeshDistortMaterial
                color={el.color}
                metalness={0.8}
                roughness={0.2}
                distort={0.4}
                speed={2}
              />
            </Sphere>
          ) : (
            <Torus args={[el.scale, el.scale * 0.4, 16, 32]} position={el.position as [number, number, number]}>
              <MeshDistortMaterial
                color={el.color}
                metalness={0.8}
                roughness={0.2}
                distort={0.2}
                speed={4}
              />
            </Torus>
          )}
        </Float>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#f97316" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[0, 10, 5]} intensity={0.5} color="#3b82f6" />
      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#ffffff"
      />
      <JavaCoffee />
      <FloatingElements />
      <Environment preset="city" />
    </>
  );
}

export default function JavaLogo3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
