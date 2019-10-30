import React, { useReducer } from 'react';
import axios from 'axios';
import EventContext from './eventContext';
import eventReducer from './eventReducer';
import setAuthToken from '../../util/setAuthToken';
import {
	EVENT_LOADED,
	REGISTER_FOR_EVENT,
	DELETE_EVENT,
	EVENT_LOAD_ERROR,
	backendUrl
} from '../types';

const EventState = props => {
	const initialState = {
		events: []
	};

	const [state, dispatch] = useReducer(eventReducer, initialState);

	const registerForEvent = async eventId => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			try {
				const res = await axios.put(
					backendUrl + '/api/events/register/' + eventId
				);
				console.log('res:', res.data);
				loadEvents();
				// dispatch({
				// 	type: REGISTER_FOR_EVENT,
				// 	payload: res.data
				// });
			} catch (err) {
				dispatch({ type: EVENT_LOAD_ERROR });
			}
		}
	};

	// Load Events
	const loadEvents = async () => {
		console.log('loadevents called:');
		try {
			const res = await axios.get(backendUrl + '/api/events/');
			console.log('res:', res.data);
			dispatch({
				type: EVENT_LOADED,
				payload: res.data
			});
		} catch (err) {
			dispatch({ type: EVENT_LOAD_ERROR });
		}
	};
	// Delete Event
	const deleteEvent = async eventId => {
		console.log('deleteEvent called with id:', eventId);
		try {
			const res = await axios.delete(
				backendUrl + '/api/events/delete/' + eventId
			);
			console.log('res:', res.data);
			loadEvents();
			// dispatch({
			// 	type: EVENT_LOADED,
			// 	payload: res.data
			// });
		} catch (err) {
			dispatch({ type: EVENT_LOAD_ERROR });
		}
	};

	return (
		<EventContext.Provider
			value={{
				events: state.events,
				loadEvents,
				deleteEvent,
				registerForEvent
			}}
		>
			{props.children}
		</EventContext.Provider>
	);
};

export default EventState;
