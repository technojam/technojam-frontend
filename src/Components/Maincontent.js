import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { aboutus, achievements, contactus, groups, homepage, mentorship, team } from './Pages/'
import Events from './Pages/Events';
import Resources from './Pages/Resources';
import Login from './Pages/Login';
import Alumni from './Pages/Alumni';

function Maincontent() {
    return(
        <div className="main-content" >
            <Switch>
                <Route exact path="/login" component={Login} /> 
                <Route exact path="/" component={homepage} />
                <Route exact path="/aboutus" component={aboutus} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/achievements" component={achievements} />
                <Route exact path="/contactus" component={contactus} />
                <Route exact path="/mentorship" component={mentorship} />
                <Route exact path="/Alumni" component={Alumni} />
                <Route exact path="/team" component={team} />
                <Route exact path="/groups" component={groups} />
                
            </Switch>
        </div>
    );
}

export default Maincontent;