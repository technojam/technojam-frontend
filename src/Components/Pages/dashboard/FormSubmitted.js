import React from "react";
import PropTypes from "prop-types";
import { Typography, Button } from "@material-ui/core";
import { useStyles } from "../../Styles/dashboard.styles/FormSubmitted.styles";
const FormSubmitted = ({ handleAdditional }) => {
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<Typography className={classes.message}>
				Your event has been added!
			</Typography>
			<Button
				variant="contained"
				color="primary"
				onClick={handleAdditional}
				className={classes.button}
				type="button"
			>
				Add additional event
			</Button>
		</div>
	);
};

FormSubmitted.propTypes = {
	handleAdditional: PropTypes.func,
};

export default FormSubmitted;
