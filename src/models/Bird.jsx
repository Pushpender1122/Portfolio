import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import birdScene from '../assets/3d/bird.glb'
import { useFrame } from '@react-three/fiber'
const Bird = () => {
  const { scene, animations } = useGLTF(birdScene)
  const birdref = useRef()
  const { actions } = useAnimations(animations, birdref)
  useEffect(() => {
    actions['Take 001'].play()
  }, [actions])
  useFrame(({ clock, camera }) => {

    birdref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdref.current.position.x > camera.position.x + 10) {

      birdref.current.rotation.y = Math.PI;
    } else if (birdref.current.position.x < camera.position.x - 10) {

      birdref.current.rotation.y = 0;
    }

    // Move the bird forward or backward based on the direction
    if (birdref.current.rotation.y === 0) {
      // Moving forward
      birdref.current.position.x += 0.01;
      birdref.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdref.current.position.x -= 0.01;
      birdref.current.position.z += 0.01;
    }
  });
  return (
    <mesh ref={birdref} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird
