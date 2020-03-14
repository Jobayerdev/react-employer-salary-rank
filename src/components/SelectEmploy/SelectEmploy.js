import React from "react";
import "./selectemploy.style.css";

const SelectEmploy = ({ info }) => {
	const { name, imageUrl, salary } = info;

	return (
		<div className="select-people">
			<img src={imageUrl} alt="" />
			<div className="select-people-info">
				<h6>{name}</h6>
				<p>
					Salary <span>${salary}</span>
				</p>
			</div>
		</div>
	);
};

export default SelectEmploy;
