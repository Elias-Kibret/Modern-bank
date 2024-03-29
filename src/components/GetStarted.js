import React from "react";
import styles from "../style";

const GetStarted = () => (
	<div
		className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
	>
		<div
			className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
		>
			<div className={`${styles.flexStart} flex-row items-center`}>
				<p className="font-poppins font-medium text-[18px]">
					<span className="text-gradient">JOIN</span>
				</p>
			</div>
			<p className="font-poppins font-medium text-[18px]">
				<span className="text-gradient">US</span>
			</p>
		</div>
	</div>
);

export default GetStarted;
