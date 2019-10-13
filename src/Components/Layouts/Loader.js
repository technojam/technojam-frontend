import React, { useContext } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import AuthContext from '../../context/auth/authContext';

const ColorLinearProgress = withStyles({
	colorPrimary: {
		backgroundColor: '#b2dfdb'
	},
	barColorPrimary: {
		backgroundColor: '#00695c'
	}
})(LinearProgress);

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	margin: {
		margin: theme.spacing(0)
	}
}));

export default function Loader() {
	const classes = useStyles();
	const authContext = useContext(AuthContext);

	const { loading } = authContext;
	return <div>{<ColorLinearProgress />}</div>;
}
