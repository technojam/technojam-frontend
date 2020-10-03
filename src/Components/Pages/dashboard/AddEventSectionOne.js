import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const style = {
	marginTop: '112px',
	form: {
		text: {
			appearance: 'none',
			width: '100%',
			padding: '5px',
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

const useStyles = makeStyles(() => ({
    eventTypeGroup: {
        '& .MuiToggleButton-root.Mui-selected': {
            backgroundColor: '#ffeef8',
            color: 'black',
            border: '2px solid #e83b7c',
            '& p' : {
                borderBottom: 'black 2px solid'
            }
        },
        '& *:focus': {
            outline: 'none'
        }
    },
    eventTypeLeft: {
      backgroundColor: 'none',
      borderRadius: '.5rem 0 0 .5rem',
      color: 'black',
      width: 70,
      height: 42,
      paddingTop: 15,
      border: '2px solid #e83b7c'
    },
    eventTypeRight: {
        backgroundColor: 'none',
        borderRadius: '0 .5rem .5rem 0',
        color: 'black',
        width: 70,
        height: 42,
        paddingTop: 15,
        border: '2px solid #e83b7c'
    },
    label: {
        color: '#e83b7c'
    }
  }));

const AddEventSectionOne = ({handleChange, handleEventType, details}) => {
const classes = useStyles();

return (
    <React.Fragment>
            <FormGroup>
                <label className={classes.label}>Event Name</label>

                <input
                    style={style.form.text}
                    type='text'
                    name='name'
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <label className={classes.label}>Event Type</label>
                <ToggleButtonGroup
                value={details.type}
                exclusive
                onChange={handleEventType}
                className={classes.eventTypeGroup}
                >
                    <ToggleButton className={classes.eventTypeLeft} value="single">
                        <p> Single </p>
                    </ToggleButton>
                    <ToggleButton className={classes.eventTypeRight} value="team">
                        <p> Team </p>
                    </ToggleButton>
                </ToggleButtonGroup>
            </FormGroup>
            <FormGroup>
                <label className={classes.label}>Short Description</label>
                    <textarea name="description" rows="3" cols="50" onChange={handleChange} style={style.form.text}>
                    </textarea>
            </FormGroup>
            <FormGroup>
                <label className={classes.label}>Resources (Link)</label>
                <input
                    style={style.form.text}
                    type='text'
                    name='resources'
                    onChange={handleChange}
                />
            </FormGroup>
    </React.Fragment>
)
}

AddEventSectionOne.propTypes = {
    handleChange: PropTypes.func,
    handleEventType: PropTypes.func,
    details: PropTypes.object
};

export default AddEventSectionOne;