import { stats } from "../constants"
import styles from "../style"
import {motion} from 'framer-motion'
const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`} >
      {stats.map((stat,index)=>(
        <motion.div 
         initial={{y:100, scale:0.3,opacity:0.3}}
         whileInView={{y:0,scale:1,opacity:1}}
         transition={{duration:0.3,delay:0.4, stiffness:110}}

        key={stat.id} className={`flex-1 flex flex-row justify-start items-center m-3`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] 
          text-[30px] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
          <p className="font-poppins font-semibold xs:text-[20px] 
          text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
        </motion.div>
      ))}
      </section>
  )


export default Stats