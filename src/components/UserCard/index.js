import React from "react";

function UserCard(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src={props.picture.large}
				className="card-img-top"
				alt={props.name}
			/>
			<div className="card-body">
				<h5 className="card-title">
					{props.name.title}
					{props.name.first} {props.name.last}
				</h5>
				<p className="card-text">{props.email}</p>
				<p className="card-text">{props.phone}</p>
			</div>
		</div>
	);
}

export default UserCard;
