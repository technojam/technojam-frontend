import React from "react";
import clsx from "clsx";
import { useStyles } from "../../Styles/dashboard.styles/Dashboard.styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { mainListItems, secondaryListItems } from "./listitems";
import ContactTable from "./ContactTable";
import Event from "./Event";
import Main from "./Main";
import Team from "./Team";
import Users from "./Users";
import Profile from "./Profile";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				technojam.tech
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const drawerWidth = 200;

export default function Dashboard() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [currentComponent, setCurrentComponent] = React.useState(0);

	const changeComponent = (c) => {
		setCurrentComponent(c);
	};
	const loadComponent = () => {
		console.log("loadComponent called");
		switch (currentComponent) {
			case 0:
				return <Main />;
			case 1:
				return <Users />;
			case 2:
				return <Event />;
			case 3:
				return <Team />;
			case 4:
				return <ContactTable />;
			case 5:
				return <Profile />;
			default:
				return <Main />;
		}
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		if (open) setOpen(false);
		else setOpen(true);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(
						classes.drawerPaper,
						!open && classes.drawerPaperClose
					),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					{open ? (
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					) : (
						<IconButton onClick={handleDrawerClose}>
							<ChevronRightIcon />
						</IconButton>
					)}
				</div>
				<Divider />
				<div>
					<ListItem button onClick={() => changeComponent(0)}>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItem>
					<ListItem button onClick={() => changeComponent(1)}>
						<ListItemIcon>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText primary="Users" />
					</ListItem>
					<ListItem button onClick={() => changeComponent(2)}>
						<ListItemIcon>
							<BarChartIcon />
						</ListItemIcon>
						<ListItemText primary="Events" />
					</ListItem>
					<ListItem button onClick={() => changeComponent(3)}>
						<ListItemIcon>
							<LayersIcon />
						</ListItemIcon>
						<ListItemText primary="Team" />
					</ListItem>
					<ListItem button onClick={() => changeComponent(4)}>
						<ListItemIcon>
							<ContactSupportIcon />
						</ListItemIcon>
						<ListItemText primary="Contacts" />
					</ListItem>

					<ListItem button onClick={() => changeComponent(5)}>
						<ListItemIcon>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItem>
				</div>
				<Divider />
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12} style={{ paddingLeft: "60px" }}>
							<Paper className={classes.paper}>
								{loadComponent()}
							</Paper>
						</Grid>
					</Grid>
				</Container>
				<Copyright />
			</main>
		</div>
	);
}
