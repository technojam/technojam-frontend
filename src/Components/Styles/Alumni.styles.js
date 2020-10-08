import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		marginTop: "100px",
		marginBottom: 20,
		minHeight: "580px",
	},
	card: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "25px 0px",
		boxShadow: " 0px 4px 8px rgba(0, 0, 0, 0.25) !important",
		lineHeight: "20px",
	},
	link: {
		textDecoration: "none",
		color: "#000",
		margin: "5px",
	},
	circle: {
		width: 125,
		margin: "20px",
		borderRadius: 100,
		margin: "50px #fff",
		boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
	},
	name: {
		marginTop: "15px",
	},
});
