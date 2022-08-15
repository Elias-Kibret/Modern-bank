import React from 'react'
import styles from '../style'
import { discount,robot } from '../assets'
import GetStarted from './GetStarted'
const Hero = () =>  (
    <section id="home"
             className={`flex md:flex-col flex-row ${styles.paddingY}`}
    >
       <div className={`flex-1 ${styles.flexStart}
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
                               <h1 className='flex-1 
                                              font-poppins font-semibold 
                                              ss:text-[72px] text-[52px]
                                               text-white ss:leading-[100px]'>The Next <br className='sm:block hidden'/>{" "} <span className='text-gradient'>Generation</span><br/> {" "}  </h1>

                                               <div>
                                                <GetStarted/>
                                               </div>
                                                 </div>
                                                 <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]'>Payment Method</h1>
                                                 <p></p>
                        </div>
                    

    </section>
  )


export default Hero