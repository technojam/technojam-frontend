import './App.css';
import React, { Fragment, useState, useContext } from 'react';
import { TopMenu, Footer } from './Components/Layouts';
import Maincontent from './Components/Maincontent';
import AuthContext from './context/auth/AuthState';
import AlertContext from './context/alert/AlertState';
import EventContext from './context/event/eventState';

import { Hidden, Fab, Icon } from '@material-ui/core';

const sectionStyle = {
	backgroundImage:
		'url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/Untitled-1.png)',
	backgroundRepeat: 'repeat',
	backgroundPositionX: 'center',
	position: 'absolute',
	width: '100%',
	top: '0'
};

const fabPosition = {
	bottom: '10vh',
	position: 'fixed',
	margin: '1em',
	right: '8vw',
	opacity: '0.9'
};

function App() {
	const [panel, setPanel] = useState(false);
	//const [] = useState({ mode: 'light' });

	function toggleButton() {
		if (!panel) setPanel(true);
		else setPanel(false);

		if (panel === false) {
			document.getElementById('ToggleButton').style.background = '#161625';
		}
	}

	return (
		<div className='dark-mode'>
			<div className='App ' style={sectionStyle}>
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
						<Fab color='secondary' onClick={() => window.scrollTo(0, 0)}>
							<Icon
								fontSize='inherit'
								style={{ height: 'auto' }}
								className='fas fa-chevron-up'
							/>
						</Fab>
					</div>
				</Hidden>
			</div>
		</div>
	);
}
export default App;
