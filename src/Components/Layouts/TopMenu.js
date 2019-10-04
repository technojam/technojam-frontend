import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo_small.png';
import ResponsiveDrawer from './ResponsiveDrawer';

//material ui component

import {
  AppBar,
  Toolbar,
  Button,
  Badge,
  IconButton,
  Hidden
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import PersonIcon from "@material-ui/icons/Person";
import Tooltip from "@material-ui/core/Tooltip";
import Modal from "@material-ui/core/Modal";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import "../style.css";

const style = {
  marginleft: 200,
  toolbarButtons: {
    marginLeft: 'auto',
    marginRight: -12
  }
};

export default function TopMenu() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ color: '#fff' }}>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: '#24292e' }}>
          <Hidden mdUp>
            <ResponsiveDrawer />
          </Hidden>
          <Grid alignItems="flex-start" justify="flex-start">
            <Button color="inherit" component={Link} to={'/'}>
              <img src={Logo} alt="TechnoJam.tech" height="50px" align="center" />
              <Typography className="topMenu_typo_name">TECHNOJAM</Typography>
            </Button>
          </Grid>
          <Hidden smDown>

            <div className="topMenu_wrapper">
              <Grid

                alignItems="flex-end"
                justify="flex-end"
                spacing={800}
                style={{ marginLeft: '75px' }}
              >

                <Button style={{ style }} component={Link} to={"/events"}>
                  <Typography className="topMenu_typo_name">Events</Typography>

                </Button>
                <Badge
                  style={{ marginBottom: '30px', marginRight: '5px' }}
                  badgeContent={'New'}
                  color="secondary"
                ></Badge>

                <Button style={{ style }} component={Link} to={"/achievements"}>
                  <Typography className="topMenu_typo_name">
                    Achievements
                  </Typography>
                </Button>
                <Button style={{ style }} component={Link} to={"/team"}>
                  {" "}
                  <Typography className="topMenu_typo_name">Team</Typography>
                </Button>
                <Button style={{ style }} component={Link} to={"/alumni"}>
                  <Typography className="topMenu_typo_name">Alumni</Typography>
                </Button>

                <Button style={{ style }} component={Link} to={"/mentorship"}>
                  <Typography className="topMenu_typo_name">
                    Mentorship
                  </Typography>
                </Button>
                <Button style={{ style }} component={Link} to={"/groups"}>
                  <Typography className="topMenu_typo_name">Groups</Typography>
                </Button>
                <Button style={{ style }} component={Link} to={"/aboutus"}>
                  <Typography className="topMenu_typo_name">
                    About Us
                  </Typography>
                </Button>
                <Button style={{ style }} component={Link} to={"/contactus"}>
                  <Typography className="topMenu_typo_name">

                    Contact Us
                  </Typography>
                </Button>
              </Grid>
            </div>
          </Hidden>
          <div style={{ marginLeft: 'auto' }}>
            <Tooltip title="Night Mode">
              <IconButton 
                color="inherit"
                aria-label="Night Mode"
                style={{ style }}
                component={Link}
                to={'/'}
              >
                <WbIncandescentIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Our Projects">
              <a
                className="btn btn-social-icon btn-github"
                href="https://github.com/technojam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-lg" style={{ color: '#fcfcfc' }}></i>
              </a>
            </Tooltip>

            <Tooltip title="Log-in">

              <IconButton
                color="inherit"
                // onClick={handleOpen}
                aria-label="Login"
                style={{ style }}
                component={Link}
                to={"/login"}
              >

                <PersonIcon />
              </IconButton>
            </Tooltip>
            <Modal open={open} onClose={handleClose}>

              <div id="login_modal_container">
                <div id="login_modal_content">
                  <img
                    src={Logo}
                    alt="TechnoJam.tech"
                    height="50px"
                    align="center"
                  />

                  <br></br>

                  <FormControl component="fieldset">
                    <Grid container alignItems="flex-start">
                      <Grid item xs={12} sm={12} md={12}>
                        <TextField
                          id="outlined-email-input"
                          label="Email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          margin="normal"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <TextField
                          id="outlined-password-input"
                          label="password"
                          type="password"
                          autoComplete="current-password"
                          margin="normal"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <br></br>

                    <Grid container direction="row" justify="center" alignItems="center">
                      <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleClose} 
                        component={Link} 
                        to={'/login'}
                      >
                        Login
                      </Button>
                    </Grid>
                  </FormControl>
                </div>
              </div>
            </Modal>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
