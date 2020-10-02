import { EVENT_LOADED, EVENT_LOAD_ERROR, EVENT_UPDATE_ERROR } from '../types';

export default (state, action) => {
	switch (action.type) {
		case EVENT_LOADED:
			return {
				events: action.payload
			};
		case EVENT_LOAD_ERROR:
			return {
				events: []
			};
		case EVENT_UPDATE_ERROR:
			// todo - decide how you want to deal with an update error
			return state;

		default:
			return state;
	}
};
