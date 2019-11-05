import React from 'react';
import { Link } from 'react-router-dom';

/* Material Components */
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';

/* Icons */
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div >
      <div className={classes.toolbar} />

      <List  >
        <ListItem button component={Link} to={'/'} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
     
        <ListItem button component={Link} to={'/Pannel'} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to={'/events'} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>

        <ListItem button component={Link} to={'/achievements'} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Achievements" />
        </ListItem>

        <ListItem button component={Link} to={'/team'} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Team" />
        </ListItem>

        <ListItem button component={Link} to={'/Alumni'} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Alumni" />
        </ListItem>

        <ListItem button component={Link} to={'/mentorship'} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Mentorship" />
        </ListItem>

        <ListItem button component={Link} to={'/groups'} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>
        <ListItem button component={Link} to={'/aboutus'} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={Link} to={'/contactus'} onClick={handleDrawerToggle}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {/* <CssBaseline /> */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
