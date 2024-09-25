import { useFrame } from '@react-three/fiber'
import React from 'react'

const Zoom = ({ setShowZoom }) => {
    useFrame(({ camera }) => {
        if (camera.position.z == 5) {
            setShowZoom(false)
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
