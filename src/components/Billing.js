import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
const Billing = () => (
	<motion.section
		initial={{ scale: 0.7, opacity: 0.5 }}
		whileInView={{ scale: 1, opacity: 1 }}
		transition={{ duration: 0.1, delay: 0 }}
		id="product"
		className={layout.sectionImgReverse}
	>
		<div className={layout.sectionImg}>
			<div>
				<img
					src={bill}
					alt="billing"
					className="w-[100%] h-[100%] relative z-[5]"
				/>
				<div className="z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
				<div className="z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
			</div>
		</div>
		<div className={`${layout.sectionInfo} flex-1`}>
			<h2 className={styles.heading2}>About US</h2>
			<p className={`${styles.paragraph} max-w-[570px] mt-5 `}>
				At THS 2405 LLC , we are a trusted and legally registered LLC tech
				company located in Jacksonville, Florida, USA. We are committed to
				providing our customers with the best possible experience, and our teams
				are dedicated to making that happen. Our tech team is passionate about
				building innovative solutions that solve real-world problems. They are a
				group of highly skilled and experienced professionals who are always
				innovating and looking for new ways to improve our products and
				services. Our customer service team is dedicated to providing our
				customers with the best possible support. They are friendly,
				knowledgeable, and always willing to help.
			</p>
			<div className="flex flex-row flex-wrap sm:mt-10 mt-6"></div>
		</div>
	</motion.section>
);

export default Billing;
