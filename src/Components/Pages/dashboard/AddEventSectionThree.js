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
        },
        textDisabled: {
            appearance: 'none',
			width: '100%',
			padding: '5px',
			height: '35px',
			borderRadius: '5px',
			outline: 'none',
			border: 'none',
			background: 'rgb(212, 213, 214)',
			color: '#576366',
			fontSize: '14px'
        },
        label: {
            color: '#e83b7c'
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
    }
  }));

const AddEventSectionThree = ({handleChange, handleIsPaid, details}) => {
const classes = useStyles();

return (
    <React.Fragment>
            <FormGroup>
                <label style={style.form.label}>Paid Event</label>
                <ToggleButtonGroup
                value={details.isPaid}
                exclusive
                onChange={handleIsPaid}
                className={classes.eventTypeGroup}
                >
                    <ToggleButton className={classes.eventTypeLeft} value="yes">
                        <p> Yes </p>
                    </ToggleButton>
                    <ToggleButton className={classes.eventTypeRight} value="no">
                        <p> No </p>
                    </ToggleButton>
                </ToggleButtonGroup>
            </FormGroup>
            <FormGroup>
                <label style={style.form.label}>Price per ticket</label>
                <input
                    style={details.isPaid === 'yes' ? style.form.text: style.form.textDisabled}
                    type='number'
                    name='amount'
                    defaultValue='0'
                    onChange={handleChange}
                    disabled={details.isPaid === 'no' ? true : false}
                />
            </FormGroup>
            <FormGroup>
                <label style={style.form.label}>Capacity</label>
                <input
                    style={style.form.text}
                    type='number'
                    name='capacity'
                    defaultValue='0'
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <label style={style.form.label}>Team Size</label>
                <input
                    style={style.form.text}
                    type='number'
                    name='teamSize'
                    defaultValue='0'
                    onChange={handleChange}
                />
            </FormGroup>
    </React.Fragment>
)
}

AddEventSectionThree.propTypes = {
    handleChange: PropTypes.func,
    handleIsPaid: PropTypes.func,
    details: PropTypes.object
};

export default AddEventSectionThree;