import React, { Component } from "react";
import AddItemForm from "../components/AddItemForm";

class AddItemContainer extends Component {
	constructor(props) {
		// Pass props to parent class
		super(props);
		// Set initial state
		this.state = {
			inputValue: ""
		};
	}
	handleChange = e => {
		console.log("User Input", e.target.value);
		this.setState({
			inputValue: e.target.value
		});
	};
	render() {
		return (
			<AddItemForm
				handleChange={this.handleChange}
				value={this.state.inputValue}
				submitHandler={this.props.submitHandler}
			/>
		);
	}
}

export default AddItemContainer;
