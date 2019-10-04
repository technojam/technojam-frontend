
import React, { Component } from 'react';

// material ui component
import Container from '@material-ui/core/Container';
import { Typography, Hidden, Grid } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

var sectionStyle = {
	width: '100%',
	height: 'auto',
	backgroundImage: 'url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/pro.jpg)',
	backgroundRepeat: 'no-repeat',
	marginTop: '40px',
	backgroundPositionX: 'center'
};

class Mentorship extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: [
				{
					id: 1,
					title: 'Technojam-Frontend',
					info:
						'Technojam-Frontend is a web application. It is build on React. It also contain night mode and backend services.',
					repolink: 'https://github.com/technojam/technojam-frontend',
					slack: '#',
					mentor: 'Ravi, Aman and Prakhar',
					Skills: 'ReactJS, HTML, CSS, JAVASCRIPT',
					telegram: '#'
				},
				{
					id: 2,
					title: 'Technojam-backend',
					info: 'Technojam-Backend is build on Node and express Js. It uses MongoDB as its database.',
					repolink: 'https://github.com/technojam/technojam-backend',
					slack: '#',
					mentor: 'Himanshu, Shivam and Abhimanyu',
					Skills: 'NodeJS, Express, MongoDB',
					telegram: '#'
				}
			]
		};
	}
	render() {
		const project = this.state.project;

		return (
			<section>
				<div id="1">
					<div style={sectionStyle}>
						<div
							style={{
								paddingTop: '330px',
								right: '',
								marginLeft: 'auto',
								marginRight: 'auto',
								maxWidth: '550px',
								paddingLeft: '20px'
							}}
						>
							<Typography variant="h3" style={{ fontFamily: 'Roboto', letterSpacing: '2px' }}>
								2019 Projects
							</Typography>
							<br />
							<br />

							<Typography
								variant="body2"
								style={{
									fontFamily: 'Roboto',
									letterSpacing: '1px',
									fontSize: '21px',
									lineHeight: '35px',
									wordSpacing: '5px'
								}}
							>
								Technojam Mentorship initiative is a global program focused on introducing students to
								open source software development. Since its inception this program aims on giving the
								very best experince of GSOC to enthusiast.
							</Typography>

							<div
								style={{
									paddingTop: '20px',
									right: '',
									marginLeft: 'auto',
									marginRight: 'auto',
									maxWidth: '550px',
									paddingLeft: '20px'
								}}
							>
								<Typography variant="h6" style={{ fontFamily: 'Roboto', letterSpacing: '2px' }}>
									Know
									More&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;
								</Typography>
								<br />

								<Typography variant="h5" style={{ fontFamily: 'Roboto', letterSpacing: '2px' }}>
									<a href=" https://twitter.com/technojam_gu" target="_blank">
										<i className="fab fa-twitter fa-lg" style={{ color: '#28aae1' }} />
									</a>&#8194;
									<a href=" https://tjosc.slack.com/" target="_blank">
										<i className="fab fa-slack fa-lg" style={{ color: '#e44134' }} />
									</a>&#8194;
									<a href="#" target="_blank">
										<i className="fab fa-telegram-plane fa-lg" style={{ color: '#f4b602' }} />
									</a>&#8194;
									<a href="https://www.linkedin.com/company/technojam/" target="_blank">
										<i className="fab fa-linkedin fa-lg" style={{ color: '#28aae1' }} />
									</a>&#8194;
									<a href="https://www.facebook.com/technojam.scse/?ref=br_rs" target="_blank">
										<i className="fab fa-facebook fa-lg" style={{ color: '#33a351' }} />
									</a>&#8194;
									<a href="https://instagram.com/technojam_galgotias" target="_blank">
										<i className="fab fa-instagram fa-lg" style={{ color: '#e44134' }} />
									</a>&#8194;
								</Typography>
							</div>
						</div>
					</div>
				</div>

				<div id="2" style={{ marginTop: '50px' }}>
					<Container maxWidth="xl">
						<Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
							{project.map((project) => (
								<Grid item xs={12} sm={6} md={6}>
									<ExpansionPanel
										className="card--shadow"
										style={{
											marginTop: '20px',
											marginBottom: '20px',
											minHeight: '123px'
										}}
									>
										<ExpansionPanelSummary>
											<Grid item md={6} xl={6} alignContent="flex-end" justify="flex-end">
												<Typography
													variant="h5"
													component="p"
													style={{
														fontFamily: 'Roboto',
														letterSpacing: '2px',
														textAlign: 'end',
														fontSize: '32px'
													}}
												>
													{project.title}<Typography style={{textAlign:"center"}}><i class="fas fa-arrow-circle-down fa-2x" style={{color:"#33a351"}}></i></Typography>
												</Typography>
											</Grid>
											<Grid item md={6} xl={6}>
												<Typography
													style={{
														fontFamily: 'Roboto',
														letterSpacing: '0.9px',
														paddingLeft: '25px',
														paddingTop: '4px',
														wordSpacing: '3px'
													}}
												>
													{project.info}
												</Typography>
											</Grid>
										</ExpansionPanelSummary>

										<ExpansionPanelDetails>
											<Grid item md={6} xl={6}>
												<Typography
													variant="h6"
													style={{
														fontFamily: 'Roboto',
														letterSpacing: '2px',
														textAlign: 'end'
													}}
												>
													Skills
												</Typography>
											</Grid>
											<Grid item md={6} xl={6}>
												<Typography
													style={{
														fontFamily: 'Roboto',
														letterSpacing: '0.9px',
														paddingLeft: '25px',
														wordSpacing: '3px',
														paddingTop: '4px'
													}}
												>
													{project.Skills}
												</Typography>
											</Grid>
										</ExpansionPanelDetails>
										<ExpansionPanelDetails>
											<Grid item md={6} xl={6}>
												<Typography
													variant="h6"
													style={{
														fontFamily: 'Roboto',
														letterSpacing: '2px',
														textAlign: 'end'
													}}
												>
													Mentors
												</Typography>
											</Grid>
											<Grid item md={6} xl={6}>
												<Typography
													style={{
														fontFamily: 'Roboto',
														letterSpacing: '0.9px',
														paddingLeft: '25px',
														wordSpacing: '3px',
														paddingTop: '4px'
													}}
												>
													{project.mentor}
												</Typography>
											</Grid>
										</ExpansionPanelDetails>

										<ExpansionPanelDetails>
											<Grid item md={6} xl={6}>
												<Typography
													variant="h6"
													style={{
														fontFamily: 'Roboto',
														letterSpacing: '2px',
														textAlign: 'end'
													}}
												>
													Project Discussion
												</Typography>
											</Grid>
											<Grid item md={6} xl={6}>
												<Typography
													style={{
														fontFamily: 'Roboto',
														letterSpacing: '0.9px',
														paddingLeft: '25px',
														wordSpacing: '3px',
														paddingTop: '4px'
													}}
												>
													<a href={project.slack} target="_blank">
														<i
															className="fab fa-slack fa-2x"
															style={{ color: '#e44134' }}
														/>
													</a>&#8194;
													<a href={project.telegram} target="_blank">
														<i
															className="fab fa-telegram fa-2x"
															style={{ color: '#f4b602' }}
														/>
													</a>
												</Typography>
											</Grid>
										</ExpansionPanelDetails>
										<ExpansionPanelDetails>
											<Grid item md={6} xl={6}>
												<Typography
													variant="h6"
													style={{
														fontFamily: 'Roboto',
														letterSpacing: '2px',
														textAlign: 'end'
													}}
												>
													Project Repository
												</Typography>
											</Grid>
											<Grid item md={6} xl={6}>
												<Typography
													style={{
														fontFamily: 'Roboto',
														letterSpacing: '0.9px',
														paddingLeft: '25px',
														wordSpacing: '3px',
														paddingTop: '4px'
													}}
												>
													<a href={project.repolink} target="_blank">
														<i className="fa fa-link fa-2x" style={{ color: '#be38ae' }} />
													</a>&#8194;
												</Typography>
											</Grid>
										</ExpansionPanelDetails>
									</ExpansionPanel>
								</Grid>
							))}
						</Grid>
					</Container>
				</div>
			</section>
		);
	}

}

export default Mentorship;
