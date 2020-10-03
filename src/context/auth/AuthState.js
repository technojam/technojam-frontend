import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../util/setAuthToken';
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
	backendUrl,
	DELETE_CONTACT,
	LOGIN_DIALOG
} from '../types';

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: false,
		user: null,
		error: null,
		showLogin: false,
		contact: []
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	const loginDialog = setTo => {
		//console.log('Login dialog caled with value:', setTo);
		dispatch({
			type: LOGIN_DIALOG,
			payload: setTo
		});
	};

	// Load User
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			try {
				const res = await axios.get(backendUrl + '/api/login');

				dispatch({
					type: USER_LOADED,
					payload: res.data
				});
				if (res.data.role == 'admin') loadContact();
			} catch (err) {
				dispatch({ type: AUTH_ERROR });
			}
		}
	};

	const loadContact = async () => {
		console.log('Loading Contacts');
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			try {
				const res = await axios.get(backendUrl + '/api/contact');
				console.log('contacts from server:', res.data);
				dispatch({
					type: CONTACT_LOADED,
					payload: res.data
				});
			} catch (err) {
				dispatch({ type: CLEAR_ERRORS });
			}
		}
	};

	const deleteContact = async cids => {
		console.log('Deleting Contacts:', { cids: cids });
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};

			try {
				const res = await axios.delete(
					backendUrl + '/api/contact',
					{ cids: cids },
					config
				);
				console.log('contacts from server:', res.data);
				loadContact();
			} catch (err) {
				dispatch({ type: CLEAR_ERRORS });
			}
		}
	};
	// Register User
	const register = async formData => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const res = await axios.post(
				backendUrl + '/api/register',
				formData,
				config
			);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data
			});

			loadUser();
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response.data.msg
			});
		}
	};

	// Login User
	const login = async formData => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const res = await axios.post(backendUrl + '/api/login', formData, config);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data
			});

			loadUser();
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				payload: err.response.data.msg
			});
		}
	};

	// Logout
	const logout = () => dispatch({ type: LOGOUT });

	// Clear Errors
	const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

	//Loading
	const showLoading = data => dispatch({ type: SHOW_LOADING, payload: data });

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				loading: state.loading,
				user: state.user,
				error: state.error,
				contact: state.contact,
				showLogin: state.showLogin,
				register,
				loadUser,
				loadContact,
				deleteContact,
				login,
				logout,
				clearErrors,
				showLoading,
				loginDialog
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
