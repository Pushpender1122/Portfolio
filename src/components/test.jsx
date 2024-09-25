import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import island from '../assets/3d/island.glb';
import skyScene from '../assets/3d/sky.glb';
import plane from '../assets/3d/plane.glb';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
const Island = () => {
    const { scene } = useGLTF(island);  // Load the island model
    const islandRef = useRef();         // Reference to the island mesh
    const [isDragging, setIsDragging] = useState(false);  // Track whether the mouse is dragging
    const [lastMouseX, setLastMouseX] = useState(0);      // Track the last mouse position

    // Function to handle mouse down (start dragging)
    const handlePointerDown = (event) => {
        setIsDragging(true);
        setLastMouseX(event.clientX);   // Save the initial mouse X position
    };

    // Function to handle mouse up (stop dragging)
    const handlePointerUp = () => {
        setIsDragging(false);
    };

    // Function to handle mouse movement while dragging
    const handlePointerMove = (event) => {
        if (isDragging) {
            const deltaX = event.clientX - lastMouseX;  // Calculate the change in mouse position
            if (islandRef.current) {
                islandRef.current.rotation.y += deltaX * 0.005;  // Update Y-axis rotation based on mouse movement
            }
            setLastMouseX(event.clientX);  // Update the last mouse X position
        }
    };

    return (
        <mesh
            ref={islandRef}
            onPointerDown={handlePointerDown}  // Start tracking mouse down
            onPointerUp={handlePointerUp}      // Stop tracking mouse up
            onPointerMove={handlePointerMove}  // Track mouse movement while dragging
        >
            <primitive object={scene} scale={0.1} />
        </mesh>
    );
};
const Sky = () => {
    const { scene } = useGLTF(skyScene);
    return (
        <mesh>
            {/* <meshBasicMaterial color="lightblue" side={2} /> */}
            <primitive object={scene} scale={0.1} />
        </mesh>
    )
}
const Plane = () => {
    const ref = React.useRef();
    const { scene, animations } = useGLTF(plane);
    const { actions } = useAnimations(animations, ref);
    useEffect(() => {
        // if (isRotating) {
        actions["Take 001"].play();
        // } else {
        // actions["Take 001"].stop();
        // }
    }, [actions]);
    return (
        <mesh
            position={[0, 0, 3]}
            rotation={[0, 1.5, 0]}
            scale={[5, 5, 4]}
            ref={ref}
        >

            <primitive object={scene} scale={0.2} />


        </mesh>
    )
}
const IslandScene = () => {
    return (
        <Canvas camera={{ position: [1, 1, 5] }} >
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
            />
            <ambientLight />
            <Sky />
            <Island />
            <Plane />
        </Canvas>
    );
};

export default IslandScene;
