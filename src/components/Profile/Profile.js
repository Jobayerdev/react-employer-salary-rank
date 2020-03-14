import React from "react";
import "./profile.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ people, addEventHandler }) => {
	const { name, imageUrl, salary, grade, connect } = people;
	return (
		<div className="profile">
			<div className="avatar">
				<img src={imageUrl} alt="" />
			</div>
			<div className="info">
				<h3>{name}</h3>
				<ul>
					<li>
						<p>Salary:</p>
						<span>${salary}</span>
					</li>
					<li>
						<p>Grade :</p>
						<span>{grade}</span>
					</li>
				</ul>
				<button
					className={`${connect ? "connected " : ""}addbtn`}
					onClick={() => addEventHandler(people)}>
					<FontAwesomeIcon icon={faFire} />
					{connect ? "Connected" : "Connect"}
				</button>
			</div>
		</div>
	);
};

export default Profile;
