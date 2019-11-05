import React, { Component, Link, useState, useContext } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//material ui component
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FormGroup, Button, Container } from '@material-ui/core';
import AuthContext from './../../../context/auth/authContext';
import CreateIcon from '@material-ui/icons/Create';
import ProfileTabs from '../../Layouts/ProfileTabs';

import {
	Paper,
} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

const style = {
	form: {
		padding: '20px',
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',

		text: {
			appearance: 'none',
			width: '100%',

			height: '35px',

			borderRadius: '5px',
			outline: 'none',
			border: 'none',
			background: '#e8ebed',
			color: '#576366',
			fontSize: '14px'
		}
	},

	circle: {
		width: 180,
		borderRadius: 90,
		boxShadow: '1px 4px 6px  rgba(0, 0, 0, 0.5)',
		padding: '10px',
		marginRight: '12px',
		transform: 'translate(+50%, +65%)'
	},
	circle1: {
		width: 110,
		borderRadius: 55,
		boxShadow: '1px 4px 6px  rgba(0, 0, 0, 0.5)',
		padding: '4px',
		transform: 'translate(+15%, +65%)'
	},
	card: {
		back: {
			backgroundColor: '#1a2a6c',
			height: '10%'
		},

		borderRadius: '20px'
	}
};

const Profile = () => {
	const authContext = useContext(AuthContext);
	const { user } = authContext;

	const [updateUser, setUpdateUser] = useState({
		profileImg: ''
	});

	const getFiles = e => {
		// console.log("file obtained:",file)
		let reader = new FileReader();

		// Convert the file to base64 text
		reader.readAsDataURL(e.target.files[0]);

		// on reader load somthing...
		reader.onload = () => {
			let base64 = reader.result;
			console.log('ahsuhd', base64);
			setUpdateUser({ profileImg: base64 });
			// callBackend to update user
		};
	};

	return (
		<Container>
			<section>
				<div>
					<br />
					<br />
					<br />
					<br />
					<Card style={style.card}>
						<Hidden smDown>
							<CardContent style={style.card.back}>
								<Typography>
									<img
										src={
											updateUser.profileImg
												? updateUser.profileImg
												: 'https://i.pravatar.cc/150?img=56'
										}
										alt={user && user.name}
										style={style.circle}
									/>
									<Typography
										variant='h5'
										style={{
											textAlign: 'end',
											color: '#fafafa',
											fontFamily: 'Roboto',
											fontSize: '20pxpx'
										}}
									>
										{user && user.name}
									</Typography>
								</Typography>
							</CardContent>
						</Hidden>

						<Hidden smUp>
							<CardContent style={style.card.back}>
								<Typography>
									<img
										src='https://i.pravatar.cc/150?img=56'
										alt={user && user.name}
										style={style.circle1}
									/>
								</Typography>
							</CardContent>
						</Hidden>

						<CardContent className='profile-info'>
							<Grid container>
								<Grid item lg={10} md={12}>
									<Typography style={{ textAlign: 'end', padding: '0.5em' }}>
										{' '}
										<CreateIcon />
									</Typography>
									<Typography style={{ padding: '0.5em' }}>
										<input
											accept='image/*'
											style={{ display: 'none' }}
											id='raised-button-file'
											multiple
											type='file'
											onChange={getFiles}
										/>
										<label htmlFor='raised-button-file'>
											<Button variant='raised' component='span'>
												Upload
											</Button>
										</label>
									</Typography>

								
										<ProfileTabs />

									
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</div>
			</section>
		</Container>
	);
};

export default Profile;
