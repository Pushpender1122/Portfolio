import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb'
const Plane = ({ isRotating, ...props }) => {
    const planeRef = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, planeRef);
    return (
        useEffect(() => {
            if (isRotating) {
                actions['Take 001'].play();
            } else {
                actions['Take 001'].stop();
            }
        }, [isRotating]),
        <mesh {...props} ref={planeRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane
