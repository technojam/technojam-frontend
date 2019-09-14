import React from 'react'
import {makeStyles,createStyles} from '@material-ui/styles'
const useGlobalStyles=makeStyles(theme=>createStyles({
	FullScreenFigureContainer: {
		height: 'fit-content',
		width: 'fit-content',
		display: 'inline-block',
		margin: theme.margin||'0 0 1em 0',
		overflow: 'hidden',
		position: 'relative',
		textAlign: 'center',
		alignItems: 'center',
		verticalAlign: 'middle',
	},
	heroFig: {
		height: '80vh',
		width: '100vw',
		margin: 0,
		padding: 0,
		background: theme.backgroundBase||'#fff',
		backgroundSize: '100% 100%',
		zIndex: -10,
	},
	heroCTA: {
		height: '1.75em',
		fontSize: 'large',
		width: 'fit-content',
		minWidth: '3.5em',
		maxWidth: '8em',
		margin: '0 auto 0 auto',
		textAlign: 'center',
		borderRadius: '5px',
		padding: '.25em .5em',
		position: 'absolute',
		bottom: '5%',
		right: '45%',
		overflow: 'hidden',
		verticalAlign: 'middle',
		color: theme.primaryColor||'#00006f',
		background: theme.backgroundBase||'#ffffffde',
		fontWeight: '400',
		cursor: 'pointer',
		backdropFilter: 'blur(12px)',

	},
}))
const FullScreenFigure=props=>{
	const classes=useGlobalStyles(props.theme)
	console.log(props)
	return (
		<div className={classes.FullScreenFigureContainer}>
			<figure
				className={classes.heroFig}
				style={props.fig}
			>
				{props.component}
			</figure>
			{props.ctaText?
			<button
				className={classes.heroCTA}
				style={props.btn}
				onClick={
					event=>props.action?
						props.action(event):null
				}
			>
				{props.ctaText}
			</button>:null}
		</div>
	)
}
export {FullScreenFigure,useGlobalStyles}
