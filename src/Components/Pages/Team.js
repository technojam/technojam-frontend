import React from 'react';

import { Link } from "react-router-dom";
import {TEAM_MEMBERS} from '../../util/constants';

// material ui component
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import '../style.css';
import "../Styles/Teams.css";

export default function Team() {

  return (
    <div className="root">

      <Typography variant="h3" className="view_title">
        <br></br>
        Our Team
      </Typography>
      <hr className="view_line" />


      <br />

      <Container fixed>
        <Grid container spacing={3}>
          {TEAM_MEMBERS.map(member => (
            <Grid item xs={4} sm={3} lg={1}>
              <Link to={"/profile/" + member.id}>
                <Tooltip title={member.Name}>
                  <img src={member.Image} alt={member.title} className="circle" key={member.id}/>
                </Tooltip>
              </Link>
            </Grid>
          ))}
          </Grid>
         </Container>
      </div>
   );
}