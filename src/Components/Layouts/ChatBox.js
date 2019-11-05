import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ChatIcon from '@material-ui/icons/Chat';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
	avatar: {
		margin: 10
	},
	appBar: {
		position: 'relative',
		color: 'white',
		backgroundColor: '#000000'
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default function ChatBox(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<ChatIcon onClick={handleClickOpen} />
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar className={classes.appBar}>
					<Toolbar>
						<IconButton
							edge='start'
							color='inherit'
							onClick={handleClose}
							aria-label='close'
						>
							<CloseIcon />
						</IconButton>
						<Grid container justify='center' alignItems='center'>
							<Avatar className={classes.avatar}>{props.user.Name[0]}</Avatar>
							<Typography variant='h6' className={classes.title}>
								{props.user.Name}
							</Typography>
						</Grid>
						<MoreVertIcon />
					</Toolbar>
				</AppBar>
				<List>
					<ListItem button>
						<ListItemText primary='Phone ringtone' secondary='Titania' />
					</ListItem>
					<Divider />
					<ListItem button>
						<ListItemText
							primary='Default notification ringtone'
							secondary='Tethys'
						/>
					</ListItem>
				</List>
			</Dialog>
		</React.Fragment>
	);
}
