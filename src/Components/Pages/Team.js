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

const useStyles = makeStyles({
   root: {
      flexGrow: 1,

      marginTop: '100px',
      marginBottom: 20,
      minHeight: '580px'
   }
});

const circle = {
   width: 80,
   borderRadius: 40,
   boxShadow: '1px 4px 6px  rgba(0, 0, 0, 0.5)',
};


export default function Team() {
  const classes = useStyles();


  return (
    <div className={classes.root}>

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
                  <img src={member.Image} alt={member.title} style={circle} key={member.id}/>
                </Tooltip>
              </Link>
            </Grid>
          ))}
          </Grid>
         </Container>
      </div>
   );
};