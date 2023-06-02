import React from "react";

const Button = ({ styles }) => {
	return (
		<button
			type="button"
			className={`py-4 px-6
     bg-blue-gradient font font-medium text-[18px] rounded-[10px] text-primary outline-none  ${styles}`}
		>
			<a href="#contact"> Contact Us</a>
		</button>
	);
};

export default Button;
