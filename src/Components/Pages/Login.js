import React from "react";
import {
	Paper,
	TextField,
	Container,
	Typography,
	Button,
} from "@material-ui/core";

/* @person who is assigned this page set your styles here. height 600 is just for layout.*/

const Login = () => {
	const classes = useStyles();
	return (
		<Container className={classes.mentorship} maxWidth="sm">
			<Paper className={classes.paper}>
				<Typography variant="h5">
					<br />
					Log In
				</Typography>
				<TextField
					label="Email Address"
					className={classes.textField}
					type="email"
					name="email"
					autoComplete="email"
					margin="normal"
					variant="outlined"
					fullWidth
				/>
				<TextField
					label="Password"
					className={classes.textField}
					name="password"
					type="password"
					margin="normal"
					variant="outlined"
					fullWidth
				/>
				<Button
					variant="contained"
					color="primary"
					fullWidth
					className={classes.logInButton}
					size="large"
					type="submit"
				>
					Log In
				</Button>
			</Paper>
		</Container>
	);
};
export default Login;
