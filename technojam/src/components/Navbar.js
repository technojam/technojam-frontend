import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Icon, InlineIcon } from '@iconify/react';
import githubCircle from '@iconify/icons-mdi/github-circle';
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

const Navbar = withStyles(styles)(({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit">
        My Title
      </Typography>
      <span className={classes.toolbarButtons}>
        <IconButton color="inherit" aria-label="darktheme">
        <WbIncandescentIcon />
        </IconButton>
        <IconButton edge="end" color="inherit" aria-label="login">
          <AccountCircleIcon />
        </IconButton>
      </span>
    </Toolbar>
  </AppBar>
));
export default Navbar;