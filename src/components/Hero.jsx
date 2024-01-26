import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
   return (
      <section className='relative w-full h-screen mx.auto'>
         <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl 
         mx-auto flex flex-row items-start gap-5`}>
            <div
               className='flex flex-col justify-center items-center mt-5'>
               <div className='w-5 h-5 rounded-full bg-[#8765d6]' />
               <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div>
            <div>
               <h1 className={`${styles.heroHeadText} text-[#f1f6f7e5]`}>Hi there <br /> I'm 
               <span className=' text-[#def2f7e5]'> Isabel  </span> </h1>
               <p className={`${styles.heroSubText} mt-5 text-[#cce8f1]`}>
               I develop full-stack applications <br className='sm:block hiddem'/>
               using modern architecture and design.
               </p>
            </div>
         </div>

         <ComputersCanvas/>
      </section>

   )
}

export default Hero