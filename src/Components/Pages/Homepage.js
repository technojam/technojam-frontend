import React from 'react'
import {FullScreenFigure} from '../Generics'
import {createStyles,makeStyles} from '@material-ui/styles'
const hero=require('./../../bg.jpg')
const useStyle=makeStyles(theme=>createStyles({
	homepage: {
		marginTop: '-1em',
	}
}))
function Homepage() {
	const classes=useStyle()
    return(
        <div className={classes.homepage}>
		<FullScreenFigure
			action={event=>console.log('I am clicked')}
			ctaText={'Lorem Ipsum'}
			fig={{
				backgroundImage: `url(${hero})`,
			}}
		/>
        </div>
    );
}
export default Homepage
