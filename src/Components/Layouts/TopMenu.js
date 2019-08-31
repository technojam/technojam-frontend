import React from 'react'
import { AppBar, Toolbar, Button , Badge ,  IconButton , Hidden} from '@material-ui/core';
import { Link } from 'react-router-dom'
import Logo from '../../images/logo_small.png'
import MenuIcon from '@material-ui/icons/Menu';
const style ={
    padding: 10
}

export default props =>
    <div style={{color: '#fff'}}>
        <AppBar position="static">
            <Toolbar>
            <Hidden mdUp>
            <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          </Hidden>
                <Button style={{ flexGrow:1, padding:10}} color="inherit" component={Link} to={'/'}>
                    <img src={Logo} alt="TechnoJam.tech" height="50px" /> TechnoJam
                    </Button>
                <Hidden smDown>
                <Button style={{style}} color="inherit" component={Link} to={'/aboutus'}>About Us</Button>
                <Button style={{style}} color="inherit" component={Link} to={'/achievements'}>Our Achievements</Button>
                <Button style={{style}} color="inherit" component={Link} to={'/team'}>Team</Button>
                <Badge badgeContent={'New'} color="secondary">
                <Button style={{style}} color="inherit" component={Link} to={'/mentorship'}>Mentorship Programme</Button></Badge>  
                <Button style={{style}} color="inherit" component={Link} to={'/groups'}>Groups</Button>
                <Button style={{style}} color="inherit" component={Link} to={'/contactus'}>Contact Us</Button>
                <Button style={{style}} color="inherit" component={Link} to={'/login'}>Login</Button>
                </Hidden>
            </Toolbar>
        </AppBar>
    </div>