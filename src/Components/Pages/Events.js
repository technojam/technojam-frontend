import React, { useState, useContext, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import '../style.css';
import EventContext from '../../context/event/eventContext';
import AuthContext from '../../context/auth/authContext';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

// import Draggable from 'react-draggable';
/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons.
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	}
}));

function PaperComponent(props) {
	return <Paper {...props} />;
}
const Events = () => {
	const classes = useStyles();
	const eventContext = useContext(EventContext);
	const authContext = useContext(AuthContext);

	const { loginDialog, user, showLogin, isAuthenticated } = authContext;

	const { events, registerForEvent } = eventContext;

	const [paevent, setPaevent] = useState([]);
	const [upevent, setUpevent] = useState([]);
	const [selectedEvent, setSelectedEvent] = useState({});
	const [eventMessage, setEventMessage] = useState('Loading.....');
	const [open, setOpen] = React.useState(false);
	const [ratingValue, setRatingValue] = React.useState(4);
	const [openFeedback, setFeedbackOpen] = React.useState(false);

	const handleFeedbackOpen = () => {
		setFeedbackOpen(true);
	};

	const handleFeedbackClose = () => {
		setFeedbackOpen(false);
	};
	const handleClickOpen = event => {
		if (isAuthenticated) {
			setSelectedEvent(event);
			setOpen(true);
		} else {
			loginDialog(true);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		// console.log('past events are:', paevent);
		// paevent = events.filter(e => new Date(e.timing) < new Date());
		setPaevent(events.filter(e => new Date(e.timing) < new Date()));
		setUpevent(events.filter(e => new Date(e.timing) >= new Date()));
		setTimeout(() => {
			setEventMessage('No events currently available');
		}, 5000);
		// console.log('past events are:', paevent);
		// eslint-disable-next-line
	}, [events]);

	const handleRegister = () => {
		registerForEvent(selectedEvent.eid);
		handleClose();
	};
	return (
		<div>
			<Container maxWidth='xl' style={{ width: '100%', top: '0' }}>
				<section
					style={{ marginBottom: '15px', marginTop: '65px', width: '100%' }}
				>
					<Grid container direction='row' justify='center' alignItems='center'>
						<Grid
							item
							direction='column'
							justify='center'
							alignItems='center'
							spacing={2}
							md={4}
						>
							<div
								style={{
									display: 'inline',
									display: 'inlineblock',
									float: 'left'
								}}
							>
								<h4>Live Events</h4>
								{upevent.length < 1 ? (
									<Timeline style={{ border: 'black',width:'400px' }}>
										<TimelineEvent>
											<CardContent>
												<Typography
													variant='h5'
													component='p'
													className='letter_spacing'
												>
													<h6>{eventMessage}</h6>
												</Typography>
											</CardContent>
										</TimelineEvent>
									</Timeline>
								) : (
									upevent.map(event => (
										<Timeline style={{ border: 'black',width:'500px' }} key={event.id}>
											<TimelineEvent>
												<CardContent>
													<Typography
														variant='h5'
														component='p'
														className='letter_spacing'
													>
														{event.name}
													</Typography>
												</CardContent>
												<Divider />
												<CardContent>
													<Typography
														variant='body2'
														color='Secondary'
														component='p'
													>
														<b>{new Date(event.timing).toDateString()}</b>
													</Typography>
												</CardContent>
												<CardContent className='card_content_top'>
													<Typography
														variant='body2'
														color='textSecondary'
														component='p'
														style={{
															letterSpacing: '0.9px',
															lineHeight: '24px'
														}}
													>
														{event.desciption}
														<br />
														{event.longDescription}
													</Typography>
												</CardContent>
												<Divider />
												<CardContent>
													<Typography
														variant='body2'
														color='textSecondary'
														component='p'
													>
														<b>Venue:</b> {event.venue}
													</Typography>
													<Button
														variant='contained'
														color='secondary'
														size='small'
														style={{ marginTop: '5px' }}
														src={event.register}
														disabled={
															user && event.users.indexOf(user.uid) != -1
																? true
																: false
														}
														onClick={() => handleClickOpen(event)}
													>
														{user && event.users.indexOf(user.uid) != -1
															? 'Registered'
															: 'Register Now'}
													</Button>
												</CardContent>
											</TimelineEvent>
										</Timeline>
									))
								)}
							</div>
						</Grid>

						<Grid item md={2} />

						<Grid
							item
							direction='column'
							justify='center'
							alignItems='center'
							md={4}
						>
							<div>
								<h4>Past Events</h4>
								{paevent.length < 1 ? (
									<Grid item>
										<br />
										<Card
											className='card--shadow'
											style={{
												maxHeight: 'auto',
												minHeight: 'auto',
												borderRadius: '20px'
											}}
										>
											<CardContent>
												<Typography
													variant='h6'
													component='p'
													className='letter_spacing'
												>
													{eventMessage}
												</Typography>
											</CardContent>
										</Card>
									</Grid>
								) : (
									paevent.map(event => (
										<Grid item key={event.id}>
											<br />
											<Card
												className='card--shadow'
												style={{
													maxHeight: 'auto',
													minHeight: 'auto',
													borderRadius: '20px'
												}}
											>
												<CardContent>
													<Typography
														variant='h5'
														component='p'
														className='letter_spacing'
													>
														{event.name}
													</Typography>
												</CardContent>
												<Divider />
												<br />
												<CardContent className='card_content_top'>
													<Typography
														variant='body2'
														color='Secondary'
														component='p'
													>
														<b>{new Date(event.timing).toDateString()}</b>
													</Typography>
												</CardContent>
												<CardContent className='card_content_top'>
													<Typography
														variant='body2'
														color='textSecondary'
														component='p'
														style={{
															letterSpacing: '0.9px',
															lineHeight: '24px'
														}}
													>
														{event.desciption}
														<br />
														{event.longDescription}
													</Typography>
												</CardContent>
												<Divider variant='inset' />

												<CardContent style={{ marginLeft: '50px' }}>
													<Button
														variant='outlined'
														color='primary'
														style={{ marginLeft: '10px' }}
														onClick={handleFeedbackOpen}
													>
														Feedback
													</Button>
													<Button
														variant='outlined'
														style={{ marginLeft: '10px' }}
														target='_blank'
														href='https://github.com/technojam'
													>
														Resources
													</Button>
												</CardContent>
											</Card>
										</Grid>
									))
								)}
							</div>
						</Grid>
					</Grid>
					<br />
					<br />
				</section>
			</Container>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperComponent={PaperComponent}
				aria-labelledby='draggable-dialog-title'
			>
				<DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
					Confirm Registration-{selectedEvent.name}
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						This is a invite only event, registration confirmation will be send
						to your registered event once we evaluate your request.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={() => handleRegister()} color='primary'>
						Register
					</Button>
				</DialogActions>
			</Dialog>
			{/* Feedback submission form */}
			<Dialog
				open={openFeedback}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title'>Submit Feedback</DialogTitle>
				<DialogContent>
					<DialogContentText>Please submit your feedback.</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Email'
						type='email'
						value={user && user.email}
						fullWidth
					/>
					<TextField
						id='outlined-multiline-static'
						label='Feedback'
						multiline
						rows='2'
						placeholder='Your feedback'
						fullWidth
						// className={classes.textField}
						margin='dense'
					/>
					<div>
						<Rating
							name='half-rating'
							value={4}
							size='large'
							value={ratingValue}
							onChange={(event, newValue) => {
								setRatingValue(newValue);
							}}
						/>
					</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleFeedbackClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleFeedbackClose} color='primary'>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default Events;
