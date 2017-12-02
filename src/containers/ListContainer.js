import React, { Component } from "react";
import List from "../components/List";

class ListContainer extends Component {
	constructor(props) {
		// Pass props to parent class
		super(props);
		// Set initial state
	}
	makeList = function(array) {
		return array.map((item, i) => <li key={i}>{item}</li>);
	};
	render() {
		return <List children={this.makeList(this.props.list)} />;
	}
}

export default ListContainer;
