import styles from "../style";

import { footerLinks, socialMedia } from "../constants";
const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div
			className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full flex-1`}
		>
			<div className="flex-1 flex flex-col justify-start mr-10">
				<p className="text-[white] font-extrabold text-[27px] space-x-1">
					THS 2405 LLC
				</p>
				<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
					We are a fun and engaging team that loves to work hard and play hard
				</p>
			</div>
			<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
				{footerLinks.map((footerlink) => (
					<div
						key={footerlink}
						className="flex flex-col ss:my-8 my-4 min-w-[150px]"
					>
						<h4
							className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}
						>
							{footerlink.title}
						</h4>
						<ul className="list-none mt-4">
							{footerlink.links.map((link, index) => (
								<li
									key={link.name}
									className={`font-poppins font-normal text-[15px] leading-[24px]
                   text-dimWhite hover:text-secondary cursor-pointer ${
											index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
										}`}
								>
									{link.name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
		<div className="flex w-full justify-between items md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3F45]">
			<p
				className={`font-poppins font-normal text-center text-[18px] leading-[27px] text-white`}
			>
				Copyright &copy; 2021 HooBank. All Rights Reserved.
			</p>
			<div className="flex flex-row md:mt-o mt-6">
				{socialMedia.map((social, index) => (
					<img
						src={social.icon}
						key={social.id}
						alt="socialmedia"
						className={`w-[21px] h-[21px] object-contain cursor-pointer ${
							index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
						}`}
					/>
				))}
			</div>
		</div>
	</section>
);

export default Footer;
