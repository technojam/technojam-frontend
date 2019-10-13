import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	SUBMIT_CONTACT,
	SHOW_CONTACT,
	DELETE_CONTACT,
	backendUrl
} from '../types';

const ContactState = props => {
	const initialState = {};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// submit contact form
	const submitContact = async contactData => {
		try {
			const res = await axios.post(backendUrl + '/api/contact', contactData);

			dispatch({
				type: SHOW_CONTACT,
				payload: res.data
			});
		} catch (err) {
			dispatch({ type: AUTH_ERROR });
		}
	};

	return (
		<AlertContext.Provider
			value={{
				alerts: state,
				setAlert
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default ContactState;
