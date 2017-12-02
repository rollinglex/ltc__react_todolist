import React from "react";
import PropTypes from "prop-types";

const AddItemForm = ({ value, handleChange, submitHandler }) => {
	return (
		<form
			onSubmit={e => {
				submitHandler(e, value);
			}}>
			<input
				id="my-form"
				type="text"
				name="add"
				value={value}
				placeholder="Enter New Item"
				onChange={e => handleChange(e)}
			/>

			<button type="submit">Add Item</button>
		</form>
	);
};

AddItemForm.propTypes = {};
export default AddItemForm;
