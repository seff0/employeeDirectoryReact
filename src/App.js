import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import UserCard from "./components/UserCard";
import axios from "axios";

class App extends Component {
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
			<div>
				<Wrapper>
					{this.state.employees.map((employee, index) => (
						<UserCard
							key={index}
							name={employee.name}
							email={employee.email}
							picture={employee.picture}
							phone={employee.phone}
						/>
					))}
				</Wrapper>
			</div>
		);
	}
}

export default App;
