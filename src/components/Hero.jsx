import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'

const Hero = ({activeHandler,active}) => {

  useEffect(()=>{
    const element = document.querySelector('.hacker');
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letterArr = element.textContent.split("")
    const length = letterArr.length;
    
    element.addEventListener('mouseover',()=>{
        let iterations = 0;
        const nameInterval = setInterval(()=>{

          letterArr = letterArr.map((ele,ind)=>{
            if(ind < iterations){
              return element.dataset.name[ind];
            }
            return letter[Math.floor(Math.random()*26)];
          });
          console.log(letterArr);
          const randStr = letterArr.join("");
          element.textContent = randStr;

          if(iterations >= 9){
            clearInterval(nameInterval);
          }

          iterations+=1;

        },30)
        
      
    })
  },[])

  const aboutScroll = (e)=>{
    const ele = e.target;
    ele.scrollIntoView();

  }

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start xs:gap-5 gap-2 max-h-fit z-10`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm&nbsp;&nbsp;<span className='text-[#915eff] hacker' data-name='AARADHYA'>AARADHYA</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I specialize in UI and <br className='sm:hidden block'/>Web frameworks like Next.js</p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center        items-center'>
        <a href="#about" onClick={(e)=>{aboutScroll(e)
                                        activeHandler("About")}}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{y:[0,24,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:"loop"} } className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero