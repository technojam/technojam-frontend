import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { useStyles } from "../../Styles/dashboard.styles/AddEventSectionOne.styles";

const style = {
	marginTop: "112px",
	form: {
		text: {
			appearance: "none",
			width: "100%",
			padding: "5px",
			height: "35px",
			borderRadius: "5px",
			outline: "none",
			border: "none",
			background: "#e8ebed",
			color: "#576366",
			fontSize: "14px",
		},
	},
};

const AddEventSectionOne = ({ handleChange, handleEventType, details }) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<FormGroup>
				<label className={classes.label}>Event Name</label>

				<input
					style={style.form.text}
					type="text"
					name="name"
					onChange={handleChange}
				/>
			</FormGroup>
			<FormGroup>
				<label className={classes.label}>Event Type</label>
				<ToggleButtonGroup
					value={details.type}
					exclusive
					onChange={handleEventType}
					className={classes.eventTypeGroup}
				>
					<ToggleButton
						className={classes.eventTypeLeft}
						value="single"
					>
						<p> Single </p>
					</ToggleButton>
					<ToggleButton
						className={classes.eventTypeRight}
						value="team"
					>
						<p> Team </p>
					</ToggleButton>
				</ToggleButtonGroup>
			</FormGroup>
			<FormGroup>
				<label className={classes.label}>Short Description</label>
				<textarea
					name="description"
					rows="3"
					cols="50"
					onChange={handleChange}
					style={style.form.text}
				></textarea>
			</FormGroup>
			<FormGroup>
				<label className={classes.label}>Resources (Link)</label>
				<input
					style={style.form.text}
					type="text"
					name="resources"
					onChange={handleChange}
				/>
			</FormGroup>
		</React.Fragment>
	);
};

AddEventSectionOne.propTypes = {
	handleChange: PropTypes.func,
	handleEventType: PropTypes.func,
	details: PropTypes.object,
};

export default AddEventSectionOne;
