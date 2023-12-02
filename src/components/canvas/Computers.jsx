import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const mixer = useRef(new THREE.AnimationMixer(computer.scene));
  const animationAction = useRef();

  useEffect(() => {
    const animations = computer.animations;

    if (animations && animations.length > 0) {
      animationAction.current = mixer.current.clipAction(animations[0]);
      animationAction.current.play();

      return () => {
        // Cleanup
        mixer.current.stopAllAction();
      };
    }
  }, [computer.animations]);

  useFrame((_, delta) => {
    if (animationAction.current) {
      mixer.current.update(delta);
    }
  });

  return <primitive object={computer.scene} scale={1.2} position-y={-1.7} rotation-y={0}/>;
};

const ComputersCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />

        {/* Controls */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5}
        />
        <Computers />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
