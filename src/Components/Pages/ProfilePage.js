import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	Container,
	Typography,
	Grid,
	Paper,
	Table,
	TableRow,
	TableBody,
	TableCell,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ALUMNI, TEAM_MEMBERS } from "../../util/constants";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import { Color } from "../color";

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: "62px",
	},
	img: {
		maxWidth: "180px",
		minWidth: "100px",
		width: "100%",
		borderRadius: "50%",
		marginTop: "10px",
	},
	name: {
		color: theme.palette.text.primary,
	},
	linkedin_icon: {
		color: Color.color_linkedIn,
	},
	github_icon: {
		color: theme.palette.text.primary,
	},
}));

const handleValue = (title, value) => {
	if (title === "Batch" || title === "Position") {
		return (
			<TableRow>
				<TableCell component="th" scope="row">
					{title}
				</TableCell>
				<TableCell align="right">{value}</TableCell>
			</TableRow>
		);
	}
};

const handleIcons = (title, value, classes) => {
	if (title == "Github") {
		return (
			<a href={value} target="blank">
				{" "}
				<GitHubIcon className={classes.github_icon} />{" "}
			</a>
		);
	} else if (title == "Linkedin") {
		return (
			<a href={value} target="blank">
				{" "}
				<LinkedInIcon className={classes.linkedin_icon} />{" "}
			</a>
		);
	}
};

const ProfilePage = (props) => {
	const [currentProfile, setCurrentProfile] = useState(undefined);
	const classes = useStyles();
	const { match } = props;

	useEffect(() => {
		const profileID = match.params.id;
		let currentProfile = TEAM_MEMBERS.filter(
			(member) => member.id.toString() === profileID
		)[0];
		if (!currentProfile) {
			currentProfile = ALUMNI.filter(
				(member) => member.id.toString() === profileID
			)[0];
		}

		setCurrentProfile(currentProfile);
	}, []);

	if (!currentProfile) {
		return <div>No Data Found...</div>;
	}

	return (
		<div className={classes.container}>
			<Container fixed>
				<Grid justify="space-between">
					<Grid item lg={2} md={4} xs={4}>
						<img
							className={classes.img}
							src={currentProfile.Image}
						/>
					</Grid>
					<Grid
						item
						lg={10}
						md={8}
						xs={6}
						style={{ marginTop: "4%" }}
					>
						<Typography variant="h2" className={classes.name}>
							{currentProfile.Name}
						</Typography>
						<Typography className={classes.name}>
							<a href={"mailto:" + currentProfile.email}>
								{" "}
								<MailIcon />{" "}
							</a>
							{currentProfile.details.map((detail) =>
								handleIcons(detail.title, detail.value, classes)
							)}
						</Typography>
					</Grid>
				</Grid>
				<Grid style={{ marginTop: "16px" }}>
					<Grid item lg={10} md={12}>
						<Table style={{ tableLayout: "fixed" }}>
							<TableBody>
								{currentProfile.details.map((detail) =>
									handleValue(detail.title, detail.value)
								)}
							</TableBody>
						</Table>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

ProfilePage.propTypes = {
	match: PropTypes.object.isRequired,
};

export default ProfilePage;
