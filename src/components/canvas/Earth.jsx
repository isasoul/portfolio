import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh >

      <hemisphereLight intensity={1}
        groundColor="black" />
      <pointLight intensity={3} />
      <primitive
        object={earth.scene}
        scale={0.9}
        position-y={-1}
        rotation-y={-1}
        position-x={2}

      />
    </mesh>
  )
}

const EarthCanvas = () => {

  return (
    <Canvas
      shadows
      frameLoop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [30 , 3, 10], fov: 25 }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}

        />

        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;