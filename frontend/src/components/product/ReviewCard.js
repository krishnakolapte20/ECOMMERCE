import React from "react";
import "./ReviewCard.css";
import { Rating } from "@material-ui/lab";
import profilePng from "../../../src/images/Profile.png";

const ReviewCard = ({ review }) => {
	const options = {
		size: "large",
		readOnly: true,
		precision: 0.5,
		value: review.rating,
	};
	return (
		<div className="reviewCard">
			<img src={profilePng} alt="User" />
			<p>{review?.name}</p>
			<Rating {...options} />
			<span className="reviewCardComment">{review?.comment}</span>
		</div>
	);
};

export default ReviewCard;
