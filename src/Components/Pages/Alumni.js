import React from 'react';

import { Link } from 'react-router-dom';
import { ALUMNI } from '../../util/constants';

// material ui component
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import ChatBox from '../Layouts/ChatBox';

import '../style.css';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		marginTop: '100px',
		marginBottom: 20,
		minHeight: '580px'
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '25px 0px',
		boxShadow: ' 0px 4px 8px rgba(0, 0, 0, 0.25) !important',
		lineHeight: '20px'
	},
	link: {
		textDecoration: 'none',
		color: '#000',
		margin: '5px'
	},
	circle: {
		width: 125,
		margin: '20px',
		borderRadius: 100,
		margin: '50px #fff',
		boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
	},
	name: {
		marginTop: '15px'
	}
});

export default function Team() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant='h3' className='view_title'>
				<br></br>
				Our Alumni
			</Typography>
			<hr className='view_line' />

			<br />

			<Container maxWidth='lg'>
				<Grid container spacing={5}>
					{ALUMNI.map(member => (
						<Grid item xs={12} sm={6} md={2}>
							<Link className={classes.link} to={'/profile/' + member.id}>
								<Card className={classes.card}>
									{/* <p>Opa</p> */}
									<img
										src={member.Image}
										alt={member.title}
										className={classes.circle}
										key={member.id}
									/>
									<Typography>
										<Box className={classes.name} fontWeight='bold' m={1}>
											{member.Name}
										</Box>
									</Typography>
									<div>
										<Link className={classes.link}>
											<LinkedInIcon />
										</Link>
										<Link className={classes.link}>
											<TwitterIcon />
										</Link>
										<Link className={classes.link}>
											<ChatBox user={member} />
										</Link>
									</div>
								</Card>
							</Link>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}
