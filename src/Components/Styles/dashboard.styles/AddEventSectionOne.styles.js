import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
	eventTypeGroup: {
		"& .MuiToggleButton-root.Mui-selected": {
			backgroundColor: "#ffeef8",
			color: "black",
			border: "2px solid #e83b7c",
			"& p": {
				borderBottom: "black 2px solid",
			},
		},
		"& *:focus": {
			outline: "none",
		},
	},
	eventTypeLeft: {
		backgroundColor: "none",
		borderRadius: ".5rem 0 0 .5rem",
		color: "black",
		width: 70,
		height: 42,
		paddingTop: 15,
		border: "2px solid #e83b7c",
	},
	eventTypeRight: {
		backgroundColor: "none",
		borderRadius: "0 .5rem .5rem 0",
		color: "black",
		width: 70,
		height: 42,
		paddingTop: 15,
		border: "2px solid #e83b7c",
	},
	label: {
		color: "#e83b7c",
	},
}));
