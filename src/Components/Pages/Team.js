import React from 'react';

import { Link } from "react-router-dom";
import { TEAM_MEMBERS } from '../../util/constants';

// material ui component
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import '../style.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '100px',
    marginBottom: 20,
    minHeight: '580px'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '25px 0px'
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    margin: '5px'
  },
  circle: {
    width: 200,
    margin: '20px',
    borderRadius: 100,
    boxShadow: '1px 4px 6px #404040',
    margin: '50px #fff'
  }, 
  name: {
    marginTop: '15px'
  }
});

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
        <Grid container spacing={5}>
          {TEAM_MEMBERS.map(member => (
            <Grid item xs={12} sm={6} md={3}>
              <Link className={classes.link} to={"/profile/" + member.id}>
                <Card className={classes.card}>
                  {/* <p>Opa</p> */}
                  <img src={member.Image} alt={member.title} className={classes.circle} key={member.id} />
                  <Typography>
                    <Box className={classes.name} fontWeight="bold" m={1}>{member.Name}</Box>
                  </Typography>
                  <div>
                    <Link className={classes.link}>
                      <LinkedInIcon />
                    </Link>
                    <Link className={classes.link}>
                      <TwitterIcon />
                    </Link>
                  </div>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};



/*{tile.name} To be deleted which is not in the tooltip after uploading pictures of every team members */
