import React from 'react'
import styles from '../style'
import { discount,robot } from '../assets'
import GetStarted from './GetStarted'
import { motion } from 'framer-motion'
const Hero = () =>  (
    <section id="home"
             className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
       <motion.div 
      
       className={`flex-1 ${styles.flexStart}
                     flex-col xl:px-0 sm:px-16 px-6`}>
                        <div className={`flex flex-row first-letter:
                                          items-center py-[6px] px-4
                                          bg-discount-gradient rounded-[10px] mb-2
                        `}>
                          <img 
                                src={discount}
                                 alt="discount"
                                 className="w-[32px] h-[32px]"
                                 />
                                 <p>
                                 <span className='text-white'>20% </span>
                                 <span className='text-gray-400'>DISCOUNT </span>
                                 <span className='text-white'>1 MONTH</span>
                                 <span className='text-gray-400'> ACCOUNT </span>
                                 </p>
                                 </div>
                                                 <div className='flex flex-row 
                                                            justify-between items-center w-full'>
                               <motion.h1 
                               initial={{x:-300,opacity:0.5}}
                               whileInView={{x:0,opacity:1}}
                               transition={{duration:.25}}
                               
                               className='flex-1 
                                              font-poppins font-semibold 
                                              ss:text-[72px] text-[52px]
                                               text-white ss:leading-[100px]'>The Next <br className='sm:block hidden'/>{" "} <span className='text-gradient'>Generation</span><br/> {" "}  </motion.h1>

                                               <div>
                                                <GetStarted/>
                                               </div>
                                                 </div>
                                                 <motion.h1 
                                                 initial={{scale:0.6,opacity:.4}}
                                                 whileInView={{scale:1,opacity:1}}
                                                 transition={{duration:0.3}}
                                                 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]'>Payment Method</motion.h1>
                                                 <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the creadit
                                                  credit cards most likely to fit your needs 
                                                  we examine annual percentage rates, annual fees
                                                 </p>
                        </motion.div>
                        <motion.div 
                         initial={{x:300,opacity:0.5}}
                         whileInView={{x:0,opacity:1}}
                         translate={{duration:.5, delay:0.2}}
                        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                          <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
                          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
                          <div className='absolute z-[1] w-[80%] rounded-full
                           bottom-40 h-[80%] top-0 white__gradient'></div>
                          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 top-0 blue__gradient'></div>
                        </motion.div>
                        <div className={`ss:hidden ${styles.flexCenter}`}>
                           <GetStarted/>
                        </div>
                    

    </section>
  )


export default Hero