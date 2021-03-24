import React, { Component } from "react";
import axios from "axios";
import UserCard from "../UserCard";

class Wrapper extends Component {
	state = {
		employees: [],
	};

	componentDidMount() {
		axios
			.get("https://randomuser.me/api/?inc=name,email,picture,phone&results=30")
			.then((res) => {
				this.setState({ employees: res.data.results });
				console.log(res);
			});
	}

	render() {
		return (
			<div className="container">
				<div className="row row-cols-3">
					{this.state.employees.map((employee, index) => (
						<UserCard
							key={index}
							name={employee.name}
							email={employee.email}
							picture={employee.picture}
							phone={employee.phone}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Wrapper;
