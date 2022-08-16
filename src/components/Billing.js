import {apple,bill,google} from "../assets"
import styles,{layout} from '../style'
import {motion} from "framer-motion"
const Billing = () => (
    <section id="product"
             className={layout.sectionImgReverse}
    >
      <div className={layout.sectionImg}>
        <div>

        <img src={bill} alt="billing"
           className="w-[100%] h-[100%] relative z-[5]"  
        />
        <div className="z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} flex-1`}>
        <h2 className={styles.heading2}>Easily Control <br className="sm:block hidden"/> your billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Elit enim sed massa etiam MAuris euadipscing ultrices ametodio aenanen anenwue. Fuse ipsum orci rhoncus aliporttiot integer platea placerat</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple" className="w-128px h-[42px] object-contain mr-5 cursor-pointer"/>
          <img src={google} alt="apple" className="w-128px h-[42px] object-contain  cursor-pointer"/>
        </div>
      </div>

      
    </section>
  )


export default Billing