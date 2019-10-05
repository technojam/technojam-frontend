
import React from "react";
import {Switch, Route} from "react-router-dom";
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
  pannel,
  ProfilePage

} from "./Pages/";


const Maincontent = () => (
 
    <div className="main-content" id="ToggleButton">

      <Switch>
        <Route exact path="/login" component={login} />
        <Route exact path="/" component={homepage} />
        <Route exact path="/aboutus" component={aboutus} />
        <Route exact path="/events" component={events} />
        <Route exact path="/achievements" component={achievements} />
        <Route exact path="/contactus" component={contactus} />
        <Route exact path="/mentorship" component={mentorship} />
        <Route exact path="/Alumni" component={alumni} />
        <Route exact path="/team" component={team} />
        <Route exact path="/groups" component={groups} />
        <Route exact path="/profile/:id" component={ProfilePage} />
        <Route exact path="/pannel" component={pannel} />

      </Switch>
   </div>
);


export default Maincontent;
