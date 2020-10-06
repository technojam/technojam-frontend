import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '@material-ui/core';

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
        label: {
            color: '#e83b7c'
        }
	}
};

const  AddEventSectionTwo = ({handleChange}) => {

return (
    <React.Fragment>
    <FormGroup>
        <label style={style.form.label}>Time</label>

        <input
            style={style.form.text}
            type='time'
            name='timing'
            defaultValue='07:30'
            onChange={handleChange}
        />
    </FormGroup>
    <FormGroup>
        <label style={style.form.label}>Date</label>

        <input
            style={style.form.text}
            type='date'
            name='date'
            onChange={handleChange}
        />
    </FormGroup>
    <FormGroup>
        <label style={style.form.label}>Venue</label>

        <input
            style={style.form.text}
            type='text'
            name='venue'
            onChange={handleChange}
        />
    </FormGroup>
            
    </React.Fragment>
)
}

AddEventSectionTwo.propTypes = {
    handleChange: PropTypes.func,
};

export default AddEventSectionTwo;