import React, {useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../../images/logo_small.png";
import ResponsiveDrawer from "./ResponsiveDrawer";

//material ui component

import {

  AppBar,
  Toolbar,
  Button,
  Badge,
  IconButton,
  Hidden
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import PersonIcon from "@material-ui/icons/Person";
import Tooltip from "@material-ui/core/Tooltip";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "../style.css";

const style = {
  marginleft: 200,
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  }

};

const modalCardBaseStyle = {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	padding: '4rem 1rem 3rem',
	backgroundColor: '#fff',
	backgroundImage:
		'url("https://tj-static.s3.ap-south-1.amazonaws.com/etc/Capture.png")',
	backgroundSize: '125%',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: '160% -12px',
	borderRadius: '.25rem',
	boxShadow: '0 0 3rem rgb(36, 41, 46)',
	outline: 'none'
};


export default function TopMenu({toggleButton}) {
  const theme = useTheme();
  const modalCardStyle = {...modalCardBaseStyle};

  if (useMediaQuery(theme.breakpoints.up("sm"))) {
    modalCardStyle.width = 400;
    modalCardStyle.padding = "4rem 2rem 3rem";
  } else {
    modalCardStyle.width = "80%";
    modalCardStyle.maxWidth = "calc(100% - 2rem)";
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);
	const [user, setUser] = React.useState({ role: 'user', name: 'Guest' });

	const { role, name } = user;

	//here we will call the backend which will give us the name of the user and his role
	//if role is admin dasboard link will be visible otherwise not
	//obvisouly the dasboard link will be protected so that only admins can access that
	//for now i am setting it default to admin
	const handleLogin = () => {
		// mock data from backend
		// actual data will have more properties
		const dataFromBackEnd = { role: 'admin', name: 'Admin' };
		setUser({ role: dataFromBackEnd.role, name: dataFromBackEnd.name });
		setOpen(false);
	};

	return (
		<div style={{ color: '#fff' }}>
			<AppBar position='fixed'>
				<Toolbar style={{ backgroundColor: '#24292e' }}>
					<Hidden mdUp>
						<ResponsiveDrawer />
					</Hidden>
					<Grid alignItems='flex-start' justify='flex-start'>
						<Button color='inherit' component={Link} to={'/'}>
							<img
								src={Logo}
								alt='TechnoJam.tech'
								height='50px'
								align='center'
							/>
              <Hidden smDown>
							<Typography className='topMenu_typo_name' style={{fontSize:"14px"}}>TECHNOJAM</Typography>
              </Hidden>
						</Button>
					</Grid>
					<Hidden smDown>
						<div className='topMenu_wrapper'>
							<Grid
								alignItems='flex-end'
								justify='flex-end'
								spacing={800}
								style={{ marginLeft: '75px' }}
							>
								<Button style={{ style }} component={Link} to={'/events'}>
									<Typography className='topMenu_typo_name'>Events</Typography>
								</Button>
								<Badge
									style={{ marginBottom: '30px', marginRight: '5px' }}
									badgeContent={'New'}
									color='secondary'
								></Badge>

								<Button style={{ style }} component={Link} to={'/achievements'}>
									<Typography className='topMenu_typo_name'>
										Achievements
									</Typography>
								</Button>
								<Button style={{ style }} component={Link} to={'/team'}>
									{' '}
									<Typography className='topMenu_typo_name'>Team</Typography>
								</Button>
								<Button style={{ style }} component={Link} to={'/alumni'}>
									<Typography className='topMenu_typo_name'>Alumni</Typography>
								</Button>

								<Button style={{ style }} component={Link} to={'/mentorship'}>
									<Typography className='topMenu_typo_name'>
										Mentorship
									</Typography>
								</Button>
								<Button style={{ style }} component={Link} to={'/groups'}>
									<Typography className='topMenu_typo_name'>Groups</Typography>
								</Button>
								<Button style={{ style }} component={Link} to={'/aboutus'}>
									<Typography className='topMenu_typo_name'>
										About Us
									</Typography>
								</Button>
								<Button style={{ style }} component={Link} to={'/contactus'}>
									<Typography className='topMenu_typo_name'>
										Contact Us
									</Typography>
								</Button>
								{role == 'admin' ? (
									<Button style={{ style }} component={Link} to={'/dashboard'}>
										<Typography className='topMenu_typo_name'>
											Dashboard
										</Typography>
									</Button>
								) : null}
								<Button style={{ style }} component={Link} to={'/pannel'}>
									<Typography className='topMenu_typo_name'>
										Welcome, {name}
									</Typography>
								</Button>
							</Grid>
						</div>
					</Hidden>
					<div style={{ marginLeft: 'auto' }}>
						<Tooltip title='Night Mode'>
							<IconButton
								color='inherit'
								aria-label='Night Mode'
								style={{ style }}
								component={Link}
								to={'/'}
							>
								<WbIncandescentIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title='Our Projects'>
							<a
								className='btn btn-social-icon btn-github'
								href='https://github.com/technojam'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i
									className='fab fa-github fa-lg'
									style={{ color: '#fcfcfc' }}
								></i>
							</a>
						</Tooltip>
						<Tooltip title='Log-in'>
							<IconButton
								color='inherit'
								onClick={handleOpen}
								aria-label='Login'
								style={{ style }}
								component={Link}
							>
								<PersonIcon />
							</IconButton>
						</Tooltip>

						<Modal
							open={open}
							onClose={handleClose}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Fade in={open}>
								<div style={modalCardStyle}>
									<img
										src={Logo}
										alt='TechnoJam.tech'
										style={{
											position: 'absolute',
											top: '0',
											left: '50%',
											width: '100px',
											transform: 'translate(-50%, -50%)'
										}}
									/>

									<IconButton
										aria-label='close'
										onClick={handleClose}
										style={{
											position: 'absolute',
											top: '.5rem',
											right: '.5rem'
										}}
									>
										<CloseIcon />
									</IconButton>
									<TextField
										id='outlined-email-input'
										label='Email'
										type='email'
										name='email'
										autoComplete='email'
										margin='normal'
										variant='outlined'
									/>
									<TextField
										id='outlined-password-input'
										label='password'
										type='password'
										autoComplete='current-password'
										margin='normal'
										variant='outlined'
									/>
									<Button
										variant='contained'
										color='primary'
										size='large'
										onClick={handleLogin}
										to={'/login'}
										style={{ marginTop: '16px' }}
									>
										Login
									</Button>
								</div>
							</Fade>
						</Modal>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);

}
