import { Container, Button, Link } from 'react-floating-action-button';
import React, { Fragment, useState, useContext } from 'react';
import { TopMenu, Footer } from './Components/Layouts';
import Maincontent from './Components/Maincontent';
import AuthContext from './context/auth/AuthState';
import AlertContext from './context/alert/AlertState';
import { Hidden } from '@material-ui/core';

const sectionStyle = {
	backgroundImage:
		'url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/Capture.png)',
	backgroundRepeat: 'repeat',
	backgroundPositionX: 'center',
	position: 'absolute',
	width: '100%',
	top: '0'
};

function App() {

	const [panel, setPanel] = useState(false);

	function toggleButton() {
		if (!panel) setPanel(true);
		else setPanel(false);

		if (panel === false) {
			document.getElementById('ToggleButton').style.background = '#161625';
		}
	}

	return (
		<div className='App' style={sectionStyle}>
			<AuthContext>
				<AlertContext>
					<TopMenu toggleButton={toggleButton} />
					<Maincontent />
					<br />
					<br />
					<br />
					<Footer />
				</AlertContext>
			</AuthContext>
		
			<Hidden smUp>
						<Container>
							<Button
								tooltip="The big plus button!"
								icon="fas fa-chevron-up"
								rotate={false}
								onClick={() => window.scrollTo(0,0)} />
						</Container>
			</Hidden>
		</div>
		
	);
}

export default App;
