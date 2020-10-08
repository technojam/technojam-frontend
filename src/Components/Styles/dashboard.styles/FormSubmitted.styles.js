import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	content: {
		textAlign: "center",
		height: 300,
		display: "grid",
		alignItems: "center",
		alignContent: "center",
	},
	message: {
		fontFamily: "Roboto",
		letterSpacing: "1px",
		fontSize: "22px",
		marginBottom: 19,
	},
	button: {
		backgroundColor: "#e83b7c",
		color: "white",
		width: 210,
		margin: "auto",
		"&:hover": {
			background: "#e580a5",
		},
		"&:focus": {
			outline: "none",
		},
	},
}));
