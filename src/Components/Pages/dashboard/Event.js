import React, { Component, Link, useState, useContext } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//material ui component
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FormGroup, Button } from '@material-ui/core';
import AuthContext from './../../../context/auth/authContext';
import EventContext from './../../../context/event/eventContext';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import EventTable from './EventTable';
import {backendUrl} from "../../../context/types"
const style = {
	marginTop: '112px',
	form: {
		padding: '20px',
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		text: {
			appearance: 'none',
			width: '100%',
			padding: '5px',
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

const Event = () => {
	const authContext = useContext(AuthContext);
	const eventContext = useContext(EventContext);
	const { user } = authContext;
	const { events } = eventContext;

	const [details, setDetails] = useState({
		type: '',
		name: '',
		description: '',
		longDescription:'',
		capacity:'',
		venue: '',
		timing: '',
		date: '',
		isPaid:'',
		amount:"",
		teamSize: ''
	});

	const handleChange = e => {
		setDetails({
			...details,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit=()=>{
		// const message={
		// 	"type":"single",
		// 	"name":"Web D workshop",
		// 	"description":"2 day workshop covering basic of HTML,CSS and JavaScript",
		// 	"longDescription":"wilruhsioghrouehuioghufhsodvhsdjfhorufgwrhcfoASDcfcfwejipiopflkwnflkscnvjeno",
		// 	"capacity":"150",
		// 	"venue":"Virtual",
		// 	"timing":"Sunday,Monday Aug 23&24 2020",
		// 	"isPaid":"false",
		// 	"amount":"0"
		// }
		alert("hello"+JSON.stringify(details))
		fetch(backendUrl+"/api/events/add",{
			method:'post',
			headers:{
				"Content-Type":"application/json",
				"x-auth-token":localStorage.getItem('token')
			},
			body:JSON.stringify(details)
		}).then(response=>{
			if(response.ok){
				alert("Event added successfully")
			}else{
				var error=new Error('Error'+response.status+':'+response.statusText);
				error.response=response;
				throw error;
			}
		})
		.catch(err=>{
            console.log(err)
		})
		
	}

	return (
		<section>
			<div id='event-showcase'>
				<Grid
					container
					direction='row'
					justify='center'
					alignItems='center'
					spacing={3}
				>
					<Grid item sm={12} xs={10} md={3} lg={4}>
						<Card className='card--shadow ab'>
							<CardContent>
								<Typography
									variant='h5'
									style={{
										fontFamily: 'roboto',
										letterSpacing: '0.9',
										color: '#fafafa'
									}}
								>
									Total Events
								</Typography>
								<Divider></Divider>
							</CardContent>
							<CardContent>
								<Typography
									variant='h2'
									style={{
										fontFamily: 'roboto',
										letterSpacing: '0.9',
										color: '#fafafa',
										textAlign: 'center'
									}}
								>
									{events.length}
								</Typography>
								<Divider></Divider>
							</CardContent>
						</Card>
					</Grid>
					<Grid item sm={12} xs={10} md={3} lg={4}>
						<Card className='card--shadow bc'>
							<CardContent>
								<Typography
									variant='h5'
									style={{
										fontFamily: 'roboto',
										letterSpacing: '0.9',
										color: '#fafafa'
									}}
								>
									Total Workshops
								</Typography>
								<Divider></Divider>
							</CardContent>
							<CardContent>
								<Typography
									variant='h2'
									style={{
										fontFamily: 'roboto',
										letterSpacing: '0.9',
										color: '#fafafa',
										textAlign: 'center'
									}}
								>
									2
								</Typography>
								<Divider></Divider>
							</CardContent>
						</Card>
					</Grid>
					<Grid item sm={12} xs={10} md={3} lg={4}>
						<Card className='card--shadow ca'>
							<CardContent>
								<Typography
									variant='h5'
									style={{
										fontFamily: 'roboto',
										letterSpacing: '0.9',
										color: '#fafafa'
									}}
								>
									Total Attendies
								</Typography>
								<Divider></Divider>
							</CardContent>
							<CardContent>
								<Typography
									variant='h2'
									style={{
										fontFamily: 'roboto',
										letterSpacing: '0.9',
										color: '#fafafa',
										textAlign: 'center'
									}}
								>
									700
								</Typography>
								<Divider></Divider>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
			<br></br>
			<br></br>

			<div id='eventlist'>
				<Grid
					container
					direction='row'
					justify='center'
					alignItems='center'
				></Grid>
				<ExpansionPanel className='card--shadow'>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography
							style={{
								fontFamily: 'Roboto',
								letterSpacing: '1px',
								fontSize: '22px'
							}}
						>
							<b>List of Events</b>
						</Typography>
					</ExpansionPanelSummary>
					<Divider></Divider>
					<ExpansionPanelDetails>
						<EventTable />
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<br></br>
			</div>
			<br></br>

			<div id='create-new-event'>
				<ExpansionPanel className='card--shadow'>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography
							style={{
								fontFamily: 'Roboto',
								letterSpacing: '1px',
								fontSize: '22px'
							}}
						>
							<b>Add Event</b>
						</Typography>
					</ExpansionPanelSummary>
					<Divider></Divider>
					<ExpansionPanelDetails>
						<div style={style.form}>
							<form autoComplete='on' onSubmit={handleSubmit}>
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Event Name</label>

											<input
												style={style.form.text}
												type='text'
												name='name'
												onChange={handleChange}
											/>
										</FormGroup>
										<br></br>
									</Grid>			
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Date</label>

											<input
												style={style.form.text}
												type='date'
												name='date'
												onChange={handleChange}
											/>
											<br></br>
										</FormGroup>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Time</label>

											<input
												style={style.form.text}
												type='time'
												name='timing'
												defaultValue='07:30'
												onChange={handleChange}
											/>
										</FormGroup>
										<br></br>
									</Grid>
								</Grid>
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Venue</label>

											<input
												style={style.form.text}
												type='text'
												name='venue'
												onChange={handleChange}
											/>
										</FormGroup>
										<br></br>
									</Grid>

									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Event Type</label>
											<select
												style={style.form.text}
												name='type'
												onChange={handleChange}
											>
												<option value='Single'>Single</option>
												<option value='Team'>Team</option>
											</select>
											<br></br>
										</FormGroup>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Team Size</label>

											<input
												style={style.form.text}
												type='text'
												name='teamSize'
												defaultValue='0'
												onChange={handleChange}
											/>
										</FormGroup>
										<br></br>
									</Grid>
								</Grid>
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Capacity</label>

											<input
												style={style.form.text}
												type='number'
												name='capacity'
												defaultValue='0'
												onChange={handleChange}
											/>
										</FormGroup>
										<br></br>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>IsPaid</label>

											<select
												style={style.form.text}
												name='isPaid'
												onChange={handleChange}
											>
												<option value='No'>No</option>
												<option value='Yes'>Yes</option>
											</select>
										</FormGroup>
										<br></br>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Amount</label>

											<input
												style={style.form.text}
												type='number'
												name='amount'
												defaultValue='0'
												onChange={handleChange}
											/>
										</FormGroup>
										<br></br>
									</Grid>
								</Grid>
								<FormGroup>
									<label>Short Description</label>

									<div
										style={{
											backgroundColor: '#e8ebed',
											borderRadius: '5px',
											overflowX: 'hidden',
											maxWidth: '100%'
										}}
									>
										
											<input
												style={style.form.text}
												type='textarea'
												name='description'
												onChange={handleChange}
											></input>
										
									</div>
								</FormGroup>

								<br></br>
								<br />
								<Typography className='align_center'>
									<Button
										type="submit"
										variant='contained'
										style={{ backgroundColor: '#f50057', color: 'white' }}
									>
										Submit
									</Button>
								</Typography>
							</form>
						</div>

						{/* <Grid item md={6} xl={6}>
							<Typography className='grid_item_typo'></Typography>
						</Grid> */}
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		</section>
	);
};

export default Event;
