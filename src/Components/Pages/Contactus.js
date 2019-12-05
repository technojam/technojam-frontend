import React, { useState, useContext } from 'react';

//material ui component
import Container from '@material-ui/core/Container';
import {
	Typography,
	Hidden,
	Grid,
	Button,
	CardContent
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { FormGroup } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import '../style.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Alert from '../Layouts/Alerts';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { backendUrl } from '../../context/types';
import axios from 'axios';
import SendIcon from '@material-ui/icons/Send';

const sectionStyle = {
	width: '100%',
	
	backgroundRepeat: 'no-repeat',
	marginTop: '100px',
	backgroundPositionX: 'center',
	
};
const style = {
	form: {
		padding: '20px',
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
	}
};

const Contactus = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const { setAlert } = alertContext;

	const { error, loading, clearErrors, showLoading } = authContext;

	const [details, setDetails] = useState({
		Firstname: '',
		Lastname: '',
		Email: '',
		Mobile: '',
		Reason: ''
	});

	const { FirstName, LastName, Email, Mobile, Reason } = details;

	const handleChange = e => {
		setDetails({
			...details,
			[e.target.name]: e.target.value
		});
	};

	const submitContact = async e => {
		console.log('called submit contact');
		e.preventDefault();
		showLoading({ data: true });
		let contactData = {
			name: FirstName + ' ' + LastName,
			email: Email,
			contact: Mobile,
			query: Reason
		};

		try {
			let res = await axios.post(backendUrl + '/api/contact', contactData);
			if (res.data.msg == 'Query submitted successfully') {
				setAlert(res.data.msg, 'success');
				setDetails({
					FirstName: '',
					LastName: '',
					Email: '',
					Mobile: '',
					Reason: ''
				});
			} else {
				setAlert(res.data.msg, 'danger');
			}
			clearErrors();
		} catch (err) {
			console.log('Error:', err);
			setAlert(
				'Error occured while submitting your query.Please try again or write to us at technojam@galogtiasuniversity.edu.in',
				'danger'
			);
			clearErrors();
			showLoading({ data: false });
		}
	};

	return (
		<Container maxWidth='lg'>
			<br />
			<div style={sectionStyle}>
				<Grid
					container
					direction='row'
					justify='flex-start'
					alignItems='flex-start'
					spacing={6}
				>
					<Grid direction='row' xs={12} sm={12} md={6} style={{padding:"20px"}}>
						<Card
							className='card--shadow'
							style={{ borderRadius: '10px', }}
						>
							<div style={{ backgroundColor: '#24292E' }}>
								<br />
								<CardContent>
									<Hidden smUp>
										<Typography
											variant='h4'
											className='contact_section_heading'
										>
											Get in touch
										</Typography>
									</Hidden>

									<Hidden mdDown>
										<Typography
											variant='h3'
											className='contact_section_heading'
										>
											Get in touch
										</Typography>
									</Hidden>
								</CardContent>
							</div>
							<Divider />
							<br />
							<div style={style.form}>
								<form autoComplete='on'>
									<Grid container spacing={3}>
										<Grid item xs={12}>
											<Alert />
										</Grid>
										<Grid item xs={6}>
											<FormGroup>
												<label>First-Name</label>
												<input
													style={style.form.text}
													type='text'
													name='FirstName'
													value={FirstName}
													onChange={handleChange}
												/>
											</FormGroup>
										</Grid>
										<Grid item xs={6}>
											<FormGroup>
												<label>Last-Name</label>
												<input
													style={style.form.text}
													type='text'
													name='LastName'
													value={LastName}
													onChange={handleChange}
												/>
											</FormGroup>
										</Grid>
									</Grid>
									<FormGroup>
										<label>Email</label>
										<input
											style={style.form.text}
											type='email'
											name='Email'
											value={Email}
											onChange={handleChange}
										/>
									</FormGroup>
									<FormGroup>
										<label>Contact Number</label>
										<input
											style={style.form.text}
											type='tel'
											name='Mobile'
											value={Mobile}
											onChange={handleChange}
										/>
									</FormGroup>
									<FormGroup>
										<label>Query</label>
										<input
											style={style.form.text}
											type='textarea'
											name='Reason'
											value={Reason}
											onChange={handleChange}
										/>
									</FormGroup>
									<br />
									<Typography className='align_center'>
										<Button
											variant='contained'
											color="primary"
											onClick={submitContact}
											disabled={loading}
											endIcon={<SendIcon />}
										>
											Submit
										</Button>
									</Typography>
								</form>
							</div>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={6}>
						<Card style={{ borderRadius: '10px', fontSize: '14px' }} className="card--shadow">
							<TwitterTimelineEmbed
								sourceType='profile'
								screenName='technojam_gu'
								options={{ height: 475 }}
								size='20px'
							/>
						</Card>
					</Grid>
				</Grid>
				<br />
			</div>
		</Container>
	);
};
export default Contactus;
