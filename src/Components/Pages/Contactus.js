
import React, { Component } from 'react';

//material ui component
import Container from '@material-ui/core/Container';
import { Typography, Hidden, Grid, Button, CardHeader, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { FormGroup } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterFollowButton,
	TwitterHashtagButton,
	TwitterMentionButton,
	TwitterTweetEmbed,
	TwitterMomentShare,
	TwitterDMButton,
	TwitterVideoEmbed,
	TwitterOnAirButton
} from 'react-twitter-embed';

var sectionStyle = {
	width: '100%',
	height: '85vh',
	backgroundRepeat: 'no-repeat',
	marginTop: '100px',
	backgroundPositionX: 'center',
	Height: '100%'
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

class Mentorship extends Component {
	render() {
		return (
			<Container maxWidth="xl">
				<div style={sectionStyle}>
					<Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={5}>
						<Grid item xs={12} sm={12} md={6}>
							<Card className="card--shadow" style={{ borderRadius: '10px' }}>
								<div style={{ backgroundColor: '#24292E' }}>
									<br />
									<CardContent>
										<Typography
											variant="h2"
											style={{
												fontFamily: 'Roboto',
												letterSpacing: '1px',
												lineHeight: '28px',
												textAlign: 'center',
												color: 'white',
												fontSize: '24px',
												fontWeight: 'bold'
											}}
										>
											Get in touch
											</Typography>
									</CardContent>
								</div>
								<div style={style.form}>
									<form autoComplete="on">
										<Grid container spacing={3}>
											<Grid item xs={6}>
												<FormGroup>
													<TextField
														name="Firstname"
														id="standard-dense"
														label="First-Name"
														margin="dense"
														onChange={this.handleChange}
													/>
												</FormGroup>
											</Grid>
											<Grid item xs={6}>
												<FormGroup>
													<TextField
														name="Lastname"
														id="standard-dense"
														label="Last-Name"
														margin="dense"
														onChange={this.handleChange}
													/>
												</FormGroup>
											</Grid>
										</Grid>

										<Grid container spacing={3}>
											<Grid item xs={6}>
												<FormGroup>
													<TextField
														name="Email"
														id="standard-dense"
														label="Email"
														margin="dense"
														onChange={this.handleChange}
													/>
												</FormGroup>
											</Grid>
											<Grid item xs={6}>
												<FormGroup>
													<TextField
														type="tel"
														name="Mobile"
														id="standard-dense"
														label="Contact Number"
														margin="dense"
														onChange={this.handleChange}
													/>
												</FormGroup>
											</Grid>
										</Grid>
										<FormGroup>
											<TextField
												type="textarea"
												name="Reason"
												id="standard-multiline-static"
												multiline
												rows="2"
												label="Query"
												margin="dense"
												onChange={this.handleChange}
											/>
										</FormGroup>
										<br />
										<Typography style={{ fontFamily: 'Roboto' }}>
											<Button
												variant="contained"
												style={{ backgroundColor: ' #24292e', color: 'white' }}
											>
												Submit <a href="#" target="_blank" />
											</Button>
										</Typography>
									</form>
								</div>
							</Card>
						</Grid>
						<Grid item xs={12} sm={12} md={6}>
							<Card style={{ borderRadius: '10px', fontSize: '14px' }}>
								<TwitterTimelineEmbed
									sourceType="profile"
									screenName="technojam_gu"
									options={{ height: 440 }}
									size="20px"
								/>
							</Card>
						</Grid>
					</Grid>
					<br />
				</div>
			</Container>
		);
	}
}

export default Mentorship;
