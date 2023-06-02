import styles from "../style";

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div className="flex w-full justify-between items md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3F45]">
			<p
				className={`font-poppins font-normal text-center text-[18px] leading-[27px] text-white`}
			>
				Copyright &copy; 2023 THS 2405 LLC. All Rights Reserved.
			</p>
			<div className="flex flex-row md:mt-o mt-6"></div>
		</div>
	</section>
);

export default Footer;
