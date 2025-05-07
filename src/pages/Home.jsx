
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Island from '../models/Island.jsx'
import Loader from '../components/Loader.jsx'
import Sky from '../models/Sky.jsx'
import { OrbitControls } from '@react-three/drei'
import Bird from '../models/Bird.jsx'
import Plane from '../models/Plane.jsx'
import Info from '../components/Info.jsx'
import { soundoff, soundon } from "../assets/icons";
import sakura from '../assets/sakura.mp3'
import Zoom from '../models/zoom.jsx'
import { useCurrentDetails } from '../context/getCurrentDetails.jsx'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const islandRef = useRef();
    const intervalRef = useRef(null);
    const [isRotating, setIsRotating] = useState(false);
    var speedFactor = 0.01;
    var delta = 0.2
    // const [currentStage, setCurrentStage] = useState(1);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);
    // const [cameraPosition, setCameraPosition] = useState([0, 0, 200]);
    const [showZoom, setShowZoom] = useState(true);

    const { currentStage, setCurrentStage, cameraPosition, setCameraPosition } = useCurrentDetails()
    useEffect(() => {
        if (isPlayingMusic) {
            audioRef.current.play();
        }

        return () => {
            audioRef.current.pause();
        };
    }, [isPlayingMusic]);
    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;
        let rotation = [0.1, 4.7, 0];
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -6.5, -43.4];
        } else {
            screenScale = [1, 1, 1];
            screenPosition = [0, -6.5, -43.4];
        }

        return [screenScale, screenPosition, rotation];
    };
    const adjustBiplaneForScreenSize = () => {
        let screenScale, screenPosition;

        // If screen width is less than 768px, adjust the scale and position
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    };
    const startRepeating = (action) => {
        action(); // Immediate call on press
        setIsRotating(true); // Set rotating state
        const animate = () => {
            action();
            intervalRef.current = requestAnimationFrame(animate);
        };
        intervalRef.current = requestAnimationFrame(animate);
    };

    const stopRepeating = () => {
        if (intervalRef.current) {
            cancelAnimationFrame(intervalRef.current);
            intervalRef.current = null;
            setIsRotating(false);
        }
    };
    const handleLeftArrowClick = () => {

        if (islandRef.current) {
            islandRef.current.rotation.y += delta * speedFactor * Math.PI;
        }
    }
    const handleRightArrowClick = () => {

        if (islandRef.current) {

            islandRef.current.rotation.y -= delta * speedFactor * Math.PI;
        }
    }

    const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
    const [screenScale, screenPosition, rotation] = adjustIslandForScreenSize();
    return (
        <>
            <section className='w-full h-screen relative' >
                <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                    {currentStage && <Info currentStage={currentStage} />}
                </div>
                <Canvas className={`h-screen w-full bg-tansparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                    camera={{ near: 0.1, far: 1000, position: cameraPosition }}
                >

                    <Suspense fallback={<Loader />}>
                        {/* <OrbitControls /> */}
                        <directionalLight position={[1, 1, 1]} intensity={2} />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 5, 10]} intensity={2} />
                        <spotLight
                            position={[0, 50, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={2}
                        />
                        <hemisphereLight
                            skyColor='#b1e1ff'
                            groundColor='#000000'
                            intensity={1}
                        />
                        {showZoom && <Zoom setShowZoom={setShowZoom} setCameraPosition={setCameraPosition} />}
                        <Bird />
                        <Plane
                            scale={biplaneScale}
                            position={biplanePosition}
                            isRotating={isRotating}
                            rotation={[0, 20, 0]}
                        />
                        <Sky
                            isRotating={isRotating}
                        />
                        <Island
                            scale={screenScale}
                            position={screenPosition}
                            rotation={rotation}
                            setIsRotating={setIsRotating}
                            isRotating={isRotating}
                            setCurrentStage={setCurrentStage}
                            currentStage={currentStage}
                            islandRef={islandRef}
                        />
                    </Suspense>
                </Canvas>

            </section >
            <div className='absolute bottom-5 left-0 right-0 z-10 flex items-center justify-center  px-4 py-2'>
                <button
                    className="cursor-pointer"
                    onMouseDown={() => startRepeating(handleLeftArrowClick)}
                    onMouseUp={stopRepeating}
                    onMouseLeave={stopRepeating}
                    onTouchStart={() => startRepeating(handleLeftArrowClick)}
                    onTouchEnd={stopRepeating}
                >
                    <FaArrowLeft size={22} />
                </button>
                <button
                    className="cursor-pointer ml-6"
                    onMouseDown={() => startRepeating(handleRightArrowClick)}
                    onMouseUp={stopRepeating}
                    onMouseLeave={stopRepeating}
                    onTouchStart={() => startRepeating(handleRightArrowClick)}
                    onTouchEnd={stopRepeating}
                >
                    <FaArrowRight size={22} />
                </button>
            </div>
            <div className='absolute bottom-2 left-2' >
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt='jukebox'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className='w-10 h-10 cursor-pointer object-contain'
                />
            </div>
        </>

    )
}

export default Home
