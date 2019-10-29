import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	CONTACT_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
	SHOW_LOADING,
	LOGIN_DIALOG
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case LOGIN_DIALOG:
			return {
				...state,
				showLogin: action.payload
			};
		case SHOW_LOADING:
			return {
				...state,
				loading: action.payload.data
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			};
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		case CONTACT_LOADED:
			return {
				...state,
				contact: action.payload
			};
		default:
			return state;
	}
};
