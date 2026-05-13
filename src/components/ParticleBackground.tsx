"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

function generatePositions() {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 20 * Math.cbrt(Math.random());

        arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
        arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
}

function FloatingParticles() {
    const ref = useRef<THREE.Points>(null);
    const [positions] = useState(() => generatePositions());

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 20;
            ref.current.rotation.y -= delta / 30;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#60a5fa"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export default function ParticleBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-white">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <FloatingParticles />
            </Canvas>
        </div>
    );
}
