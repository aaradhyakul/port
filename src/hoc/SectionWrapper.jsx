import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { staggerContainer } from '../utils/motion'


const SectionWrapper = (Component,idName)=>{
    function HOC(){
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
        return (
            <motion.section variants={staggerContainer()} 
               initial="hidden" whileInView="show" viewport={{once:true,amount:isMobile ? 0.1:0.25}}
               className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <span className='hash-span' id={idName}>&nbsp;</span>
                <Component/>
            </motion.section>
        )
    }
    return HOC
}

export default SectionWrapper