import React, { Component } from "react";
import Header from "./components/Header";
import AddItemFormContainer from "./containers/AddItemFormContainer";
import ListContainer from "./containers/ListContainer";

const myTitle = "To Do Now List";

class App extends Component {
	constructor(props) {
		// Pass props to parent class
		super(props);
		// Set initial state
		this.state = {
			data: ["wake up", "grab a brush", "put on a little makeup"]
		};
	}
	addItemHandler = (e, value) => {
		e.preventDefault();
		this.setState({
			data: [...this.state.data, value]
		});
	};
	render() {
		return (
			<div className="wrapper">
				<Header title={myTitle} /> {/*presentational component*/}
				<AddItemFormContainer submitHandler={this.addItemHandler} />
				<ListContainer list={this.state.data} />
			</div>
		);
	}
}

export default App;
