import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo_small.png';
import ResponsiveDrawer from './ResponsiveDrawer';
import Alert from './Alerts';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//material ui component
import {
	AppBar,
	Toolbar,
	Button,
	Badge,
	IconButton,
	Hidden
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import EventContext from '../../context/event/eventContext';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import '../style.css';

const style = {


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

function TopMenu(props) {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const eventContext = useContext(EventContext);

	const { setAlert } = alertContext;
	const {
		login,
		register,
		logout,
		loadUser,
		loadContact,
		error,
		clearErrors,
		isAuthenticated,
		user,
		contact,
		loading,
		showLoading,
		showLogin,
		loginDialog
	} = authContext;

	const { loadEvents } = eventContext;

	useEffect(() => {
		loadUser();
		loadEvents();
		console.log('showLogin:', showLogin);
		if (isAuthenticated) {
			// props.history.push('/');
			setOpen(false);
			setRegisterOpen(false);
		}

		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}
		if (error === 'User already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}
		if (error === 'Email doesnt exist') {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const theme = useTheme();
	const modalCardStyle = { ...modalCardBaseStyle };

	if (useMediaQuery(theme.breakpoints.up('sm'))) {
		modalCardStyle.width = 400;
		modalCardStyle.padding = '4rem 2rem 3rem';
	} else {
		modalCardStyle.width = '80%';
		modalCardStyle.maxWidth = 'calc(100% - 2rem)';
	}

	const [anchorEl, setAnchorEl] = React.useState(null);
	const isOpen = Boolean(anchorEl);
	const [open, setOpen] = React.useState(false);
	const [registerOpen, setRegisterOpen] = React.useState(false);

	const [user1, setUser] = React.useState({
		role: 'user',
		name: 'Guest',
		email: '',
		password: ''
	});

	const { email, password, role, name } = user1;

	const handleOpen = () => {
		setOpen(true);
		setAnchorEl(null);
	};

	const handleRegisterOpen = () => {
		setOpen(false);
		setRegisterOpen(true);
		setAnchorEl(null);
	};

	const handleClose = () => {
		setOpen(false);
		loginDialog(false);
		setRegisterOpen(false);
	};

	const handleMenu = event => {
		console.log('handle menu called');
		setAnchorEl(event.currentTarget);
	};

	const handleClose1 = () => {
		setAnchorEl(null);
	};
	const onChange = e => {
		// console.log(`onChange called:${e.target.name},${e.target.value}`);
		setUser({ ...user1, [e.target.name]: e.target.value });
	};

	const handleLogin = e => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Please fill in all fields', 'danger');
		} else {
			console.log('login called');
			showLoading({ data: true });
			login({
				email,
				password
			});
		}
	};

	const handleRegister = e => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert('Please fill in all fields', 'danger');
		} else {
			console.log('register called');
			showLoading({ data: true });
			register({
				name,
				email,
				password
			});
		}
	};

	const handleLogout = () => {
		logout();
		handleClose1();
	};

	return (
		<div style={{ color: '#fff' }}>
			{console.log('show login value:', showLogin)}
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
								<Typography
									className='topMenu_typo_name'
									style={{ fontSize: '14px' }}
								>
									TECHNOJAM
								</Typography>
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
							</Grid>
						</div>
					</Hidden>
					<div style={{ marginLeft: 'auto' }}>
						<Tooltip title='Night Mode' >
							<IconButton
								color='inherit'
								aria-label='Night Mode'
								style={{padding:"4px" }}
								component={Link}
								to={'/'}
							>
								<WbIncandescentIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title='Our Projects'>
							<a
								className=' btn-social-icon btn-github'
								href='https://github.com/technojam'
								target='_blank'
								rel='noopener noreferrer'
							>
								<i
									className='fab fa-github fa-lg'
									style={{ color: '#fcfcfc',padding:'4px' }}
								></i>
							</a>
						</Tooltip>

						{/* <Tooltip title='Log-in'>
							<IconButton
								color='inherit'
								onClick={()=>handleOpen(login)}
								aria-label='Login'
								style={{ style }}
								component={Link}
							>
								<PersonIcon />
							</IconButton>
						</Tooltip> */}
						<React.Fragment>
							<IconButton
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleMenu}
								color='inherit'
								style={{padding:"4px" }}
							>
								<PersonIcon />
								<Typography className='topMenu_typo_name'>
									{/* {console.log('user:', user)} */}
									{user ? user.name : name}
								</Typography>
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'bottom',
									horizontal: 'right'
								}}
								open={isOpen}
								onClose={handleClose1}
							>
								{!isAuthenticated ? (
									<span>
										<MenuItem onClick={() => handleOpen()}>Login</MenuItem>
										<MenuItem onClick={() => handleRegisterOpen()}>
											Register
										</MenuItem>
									</span>
								) : (
									<div>
										{user && user.role == 'admin' ? (
											<MenuItem
												component={Link}
												to='/pannel'
												onClick={() => handleClose1()}
											>
												Dashboard
											</MenuItem>
										) : null}
										<MenuItem
											component={Link}
											to='/profile'
											onClick={() => handleClose1()}
										>
											View Profile
										</MenuItem>
										<MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
									</div>
								)}
							</Menu>
						</React.Fragment>
						<Modal
							open={showLogin || open}
							onClose={handleClose}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Fade in={showLogin || open}>
								<div style={modalCardStyle}>
									<Alert />
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
										value={email}
										onChange={onChange}
										autoComplete='email'
										margin='normal'
										variant='outlined'
									/>
									<TextField
										id='outlined-password-input'
										label='Password'
										type='password'
										name='password'
										value={password}
										onChange={onChange}
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
										disabled={loading}
										style={{ marginTop: '16px' }}
									>
										Login
									</Button>
									<div style={{ marginTop: '10px' }}>
										<p>Dont't have an account?</p>
										<Link
											style={{ color: '#007791' }}
											onClick={handleRegisterOpen}
										>
											Sign up
										</Link>
									</div>
								</div>
							</Fade>
						</Modal>
						<Modal
							open={registerOpen}
							onClose={handleClose}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Fade in={registerOpen}>
								<div style={modalCardStyle}>
									<Alert />
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
										label='Name'
										type='text'
										name='name'
										value={name}
										onChange={onChange}
										autoComplete='name'
										margin='normal'
										variant='outlined'
									/>
									<TextField
										id='outlined-email-input'
										label='Email'
										type='email'
										name='email'
										value={email}
										onChange={onChange}
										autoComplete='email'
										margin='normal'
										variant='outlined'
									/>
									<TextField
										id='outlined-password-input'
										label='password'
										type='password'
										name='password'
										value={password}
										onChange={onChange}
										autoComplete='current-password'
										margin='normal'
										variant='outlined'
									/>
									<Button
										variant='contained'
										color='primary'
										size='large'
										onClick={handleRegister}
										disabled={loading}
										to={'/login'}
										style={{ marginTop: '16px' }}
									>
										Register
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

export default TopMenu;
