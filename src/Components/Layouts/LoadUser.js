import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const LoadUser = () => {
	const authContext = useContext(AuthContext);
	const { loadUser } = authContext;
	return loadUser;
};

export default LoadUser;
