import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  // these buttons will be aligned to right side of abbBar
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  },
  menuButton: {
    marginRight: 20,
    marginLeft: -12
  }
};


const NavBar = () => {
return(
  <div>
    <AppBar position="static">
      <Toolbar>
      <IconButton edge="start" color="inherit" className="classes.menuButton" aria-label="menu" position="middle">
            <MenuIcon />
      </IconButton>
        <Typography variant="title" color="inherit">
            TechnoJam
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

}

export default NavBar;