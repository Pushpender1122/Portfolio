
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
const Home = () => {
    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const [isRotating, setIsRotating] = useState(false);
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

    const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
    const [screenScale, screenPosition, rotation] = adjustIslandForScreenSize();
    return (
        <section className='w-full h-screen relative'>
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
                    />
                </Suspense>
            </Canvas>
            <div className='absolute bottom-2 left-2'>
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt='jukebox'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className='w-10 h-10 cursor-pointer object-contain'
                />
            </div>

        </section >
    )
}

export default Home
