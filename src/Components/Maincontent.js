import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { aboutus, achievements, contactus, groups, homepage, mentorship, team } from './Pages/'
/* Remove style here. This is just for demo purpose.*/
const style ={
    height:600,
}
function Maincontent() {
    return(
        <div className="main-content" style={style}>
            <Switch>
                <Route exact path="/" component={homepage} />
                <Route exact path="/aboutus" component={aboutus} />
                <Route exact path="/achievements" component={achievements} />
                <Route exact path="/contactus" component={contactus} />
                <Route exact path="/mentorship" component={mentorship} />
                <Route exact path="/team" component={team} />
                <Route exact path="/groups" component={groups} />
            </Switch>
        </div>
    );
}

export default Maincontent;