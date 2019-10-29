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

/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons.
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

const Events = () => {
	const eventContext = useContext(EventContext);
	const authContext = useContext(AuthContext);

	const { loginDialog, user, showLogin, isAuthenticated } = authContext;

	const { events, registerForEvent } = eventContext;

	const [paevent, setPaevent] = useState([]);
	const [upevent, setUpevent] = useState([]);

	useEffect(() => {
		// console.log('past events are:', paevent);
		// paevent = events.filter(e => new Date(e.timing) < new Date());
		setPaevent(events.filter(e => new Date(e.timing) < new Date()));
		setUpevent(events.filter(e => new Date(e.timing) >= new Date()));
		// console.log('past events are:', paevent);
		// eslint-disable-next-line
	}, [events]);

	const handleRegister = eventId => {
		console.log('Eventid:', eventId);
		if (isAuthenticated) {
			registerForEvent(eventId);
		} else {
			loginDialog(true);
		}
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
								{upevent.length < 1 ? (
									<Timeline style={{ border: 'black' }}>
										<TimelineEvent>
											<CardContent>
												<Typography
													variant='h5'
													component='p'
													className='letter_spacing'
												>
													<h6>No Live events currently</h6>
												</Typography>
											</CardContent>
										</TimelineEvent>
									</Timeline>
								) : (
									upevent.map(event => (
										<Timeline style={{ border: 'black' }} key={event.id}>
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
														onClick={() => handleRegister(event.eid)}
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
								{paevent.map(event => (
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
													href={event.feedback}
												>
													Feedback
												</Button>
												<Button
													variant='outlined'
													style={{ marginLeft: '10px' }}
													href={event.todo}
												>
													Resources
												</Button>
											</CardContent>
										</Card>
									</Grid>
								))}
							</div>
						</Grid>
					</Grid>
					<br />
					<br />
				</section>
			</Container>
		</div>
	);
};
export default Events;
