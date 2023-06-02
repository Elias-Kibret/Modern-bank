import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
const CardDeal = () => (
	<section className={layout.section}>
		<div className={layout.sectionInfo}>
			<h4 className={styles.heading2}>
				We're building <br className="sm:block hidden" />
				the future, together
			</h4>
			<p className={`${styles.paragraph} max-w-[470px]`}>
				Contact us today to learn more about how we can help you take your
				business to the next level.
				<p className="mt-6"></p> We have a team of experienced professionals who
				can help you with everything from website design and development to
				marketing and sales.
				<p className="mt-6"></p>
				We're here to help you achieve your business goals, so don't hesitate to
				contact us today.
			</p>
			<Button styles="mt-10" />
		</div>
		<div className={layout.sectionImg}>
			<img src={card} alt="card" className="w-[100%] h-[100%]" />
		</div>
	</section>
);

export default CardDeal;
