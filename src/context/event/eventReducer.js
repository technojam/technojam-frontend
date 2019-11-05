import { EVENT_LOADED, EVENT_LOAD_ERROR } from '../types';

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
		default:
			return state;
	}
};
