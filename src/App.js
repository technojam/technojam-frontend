import "./App.css";
import React, { useState, useContext } from "react";
import { TopMenu, Footer } from "./Components/Layouts";
import Maincontent from "./Components/Maincontent";
import AuthContext from "./context/auth/AuthState";
import AlertContext from "./context/alert/AlertState";
import EventContext from "./context/event/eventState";
import styled from "styled-components";

import { Hidden, Fab, Icon } from "@material-ui/core";
import { ThemeContext } from "./util/themeContext";

const fabPosition = {
	bottom: "10vh",
	position: "fixed",
	margin: "1em",
	right: "8vw",
	opacity: "0.9",
};

function App() {
	const { theme: currentTheme } = useContext(ThemeContext);
	const [panel, setPanel] = useState(false);
	//const [] = useState({ mode: 'light' });

	function toggleButton() {
		if (!panel) setPanel(true);
		else setPanel(false);

		if (panel === false) {
			document.getElementById("ToggleButton").style.background =
				"#161625";
		}
	}

	const Background = styled.div`
		top: 0;
		width: 100%;
		position: relative;
		background-repeat: repeat;
		background-position-x: center;
		position: absolute;
		&:after {
			z-index: -10;
			content: "";
			background-image: url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/Untitled-1.png);
			filter: invert(${currentTheme === "dark" ? 1 : 0});
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
		}
	`;

	return (
		<div className="dark-mode">
			<Background className="App ">
				<AuthContext>
					<EventContext>
						<AlertContext>
							<TopMenu toggleButton={toggleButton} />
							<Maincontent />
							<br />
							<br />
							<br />
							<Footer />
						</AlertContext>
					</EventContext>
				</AuthContext>
				<Hidden smUp>
					<div style={fabPosition}>
						<Fab
							color="secondary"
							onClick={() => window.scrollTo(0, 0)}
						>
							<Icon
								fontSize="inherit"
								style={{ height: "auto" }}
								className="fas fa-chevron-up"
							/>
						</Fab>
					</div>
				</Hidden>
			</Background>
		</div>
	);
}
export default App;
