import React from "react";
import { Switch, Route } from "react-router-dom";
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
  alumni
} from "./Pages/";

function Maincontent() {
  return (
    <div className="main-content">
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
      </Switch>
    </div>
  );
}

export default Maincontent;
