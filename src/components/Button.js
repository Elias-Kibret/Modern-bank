import React from "react";

const Button = ({ styles }) => {
	return (
		<button
			type="button"
			className={`py-4 px-6
     bg-blue-gradient font font-medium text-[18px] rounded-[10px] text-primary outline-none  ${styles}`}
		>
			Contact Us
		</button>
	);
};

export default Button;
