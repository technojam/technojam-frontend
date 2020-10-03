import React, { useState, useContext } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import AddEvent from './AddEvent';
import FormSubmitted from './FormSubmitted';
//material ui component
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EventContext from './../../../context/event/eventContext';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EventTable from './EventTable';
import {backendUrl} from "../../../context/types";

const style = {
	marginTop: '112px',
	form: {
		padding: '20px',
		width: '100%',
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
	const eventContext = useContext(EventContext);
	const { events } = eventContext;
	const [formComplete, setFormComplete ] = useState();
	const [formSubmitted, setFormSubmitted] = useState(false);

	const [details, setDetails] = useState({
		type: 'single',
		name: '',
		description: '',
		longDescription:'',
		capacity:'',
		venue: '',
		timing: '',
		date: '',
		isPaid:'no',
		amount: 0,
		teamSize: '',
		resources:''
	});

	const handleChange = e => {
		if (
			details.amount !== '' && 
			details.capacity !== '' && 
			details.name !== '' && 
			details.description !== '' && 
			details.venue !== '' && 
			details.timing !== '' &&
			details.date !== '' &&
			details.teamSize !== '' &&
			details.resources !== ''
		) {
			setFormComplete(true);
		}
		setDetails({
			...details,
			[e.target.name]: e.target.value
		});
	};

	const handleEventType = (event, newType) => {
		setDetails({
			...details,
			'type': newType});
	};

	const handleIsPaid = (event, newType) => {
		setDetails({
			...details,
			'isPaid': newType});
	};

	const handleSubmit=(e)=>{
		e.preventDefault();
		if(
			details.amount === '' || 
			details.capacity === '' || 
			details.name === '' || 
			details.description === '' || 
			details.venue === '' || 
			details.timing === '' ||
			details.date === '' ||
			details.teamSize === '' ||
			details.resources === ''
			) {
				setFormComplete(false);
				console.log('fields not complete')
			} else {
				setFormComplete(true);
				setFormSubmitted(true);
				// alert("hello"+JSON.stringify(details))
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
	}

	const handleAdditional = () => {
		setFormSubmitted(false);
		setDetails({
			type: 'single',
			name: '',
			description: '',
			longDescription:'',
			capacity:'',
			venue: '',
			timing: '',
			date: '',
			isPaid:'no',
			amount: 0,
			teamSize: '',
			resources:''
		});
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
								{!formSubmitted ?
									<AddEvent 
									handleChange={(e) => handleChange(e)} 
									details={details} 
									handleEventType={(e, newType) => handleEventType(e, newType)}
									handleIsPaid={(e, newType) => handleIsPaid(e, newType)}
									formComplete={formComplete}
									/>
									: <FormSubmitted handleAdditional={handleAdditional}/>
								}
									
							</form>
						</div>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		</section>
	);
};

export default Event;
