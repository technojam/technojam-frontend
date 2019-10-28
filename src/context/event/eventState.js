import React, { useReducer } from 'react';
import axios from 'axios';
import EventContext from './eventContext';
import eventReducer from './eventReducer';
import { EVENT_LOADED, EVENT_LOAD_ERROR, backendUrl } from '../types';

const EventState = props => {
	const initialState = {
		events: []
	};

	const [state, dispatch] = useReducer(eventReducer, initialState);

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

	return (
		<EventContext.Provider
			value={{
				events: state.events,
				loadEvents
			}}
		>
			{props.children}
		</EventContext.Provider>
	);
};

export default EventState;
