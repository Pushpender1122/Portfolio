import { useFrame } from '@react-three/fiber'
import React from 'react'

const Zoom = ({ setShowZoom, setCameraPosition }) => {
    useFrame(({ camera }) => {
        if (camera.position.z == 5) {
            setShowZoom(false)
            console.log("camera.position.z", camera.position.z)
            setCameraPosition([camera.position.x, camera.position.y, camera.position.z])
            return;
        }
        if (camera.position.z != 5) {
            camera.position.z -= 1
        }
        // console.log(camera.position.z)
    })
    return (
        <mesh>

        </mesh>
    )
}

export default Zoom
