import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
	aboutus,
	achievements,
	contactus,
	groups,
	homepage,
	mentorship,
	team,
	events,
	login,
	alumni,
	Pannel,
	ProfilePage
} from './Pages/';

import LiveEvents from './Layouts/liveEvents';
import AdminRoute from '../util/AdminRoutes';
import LoggedinRoutes from '../util/LoggedinRoutes';

import Dashboard from './Pages/dashboard/Dashboard';
import Profile from './Pages/dashboard/Profile';

const Maincontent = () => (
	<div className='main-content' id='ToggleButton'>
		<Switch>
			<Route exact path='/login' component={login} />
			<Route exact path='/' component={homepage} />
			<Route exact path='/aboutus' component={aboutus} />
			<Route exact path='/events' component={events} />
			<Route exact path='/achievements' component={achievements} />
			<Route exact path='/contactus' component={contactus} />
			<Route exact path='/mentorship' component={mentorship} />
			<Route exact path='/Alumni' component={alumni} />
			<Route exact path='/team' component={team} />
			<Route exact path='/groups' component={groups} />
			<Route exact path='/profile/:id' component={ProfilePage} />
			<LoggedinRoutes exact path='/profile/' component={Profile} />
			<AdminRoute exact path='/pannel' component={Dashboard} />
		</Switch>
		<LiveEvents></LiveEvents>
	</div>
);

export default Maincontent;
