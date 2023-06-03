import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'


const ServiceCard = ({index,title,icon}) =>{

  return (
    <Tilt className='sm:w-[250px] xs:w-[260px] w-[87%]'>
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={
          {max:45,
          scale:1,
        speed:450}
        } className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]'></div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} animate="show" initial="hidden">
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview .
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl  leading-[30px]'>
          I'm a skilled Web developer with experience in Javascript, Typescript 
          and expertise in UI libraries like React, StyledComponents, three.js and
          frameworks like NEXT.js, node.js. I'm a quick learner and like to work
          problems out in a holistic manner. Let's work together to bring your ideas
          to life!!

      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service,index)=><ServiceCard key={service.title} index={index} {...service}/>)}
      </div>
    </>
  )
}

export default About