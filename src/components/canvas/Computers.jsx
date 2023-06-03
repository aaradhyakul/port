import React,{Suspense,useState,useEffect} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Computers = ({isMobile}) => {
  
  // useEffect(()=>{
  //   console.log(isMobile);
  // },[isMobile])

  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={isMobile ? 0.6 : 0.75} position={!isMobile ?[0,-3.25,-1.5]:[-1,-3,-1.5]} rotation={!isMobile ? [-0.01,-0.2,-0.1]:[-0.01,0.6,-0.3]}/>
    </mesh>
  )
}

const ComputersCanvas = () =>{
  const [isMobile,setIsMobile] = useState();
  useEffect(()=>{
    const mediaString = `(max-width:500px)`
    const mediaQuery = window.matchMedia(mediaString);
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = e =>{
      setIsMobile(e.matches);
      // console.log(e.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return ()=> {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
      // console.log("returned")
    }

  },[])
  useEffect(()=>{
    console.log(isMobile);
  },[isMobile])
  
  return (
    <Canvas frameloop='demand' shadows  camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={<CanvasLoader/>}>

        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Computers isMobile={isMobile}/>
        </Suspense>


      
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas