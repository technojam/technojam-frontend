import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo_small.png'
import ResponsiveDrawer from './ResponsiveDrawer';

import { AppBar, Toolbar, Button, Badge, IconButton, Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import PersonIcon from '@material-ui/icons/Person';
import Tooltip from '@material-ui/core/Tooltip';

const style = {
    marginleft: 2000,
    toolbarButtons: {
        marginLeft: "auto",
        marginRight: -12
    }
}


export default props =>
    <div style={{ color: '#fff' }}>
        <AppBar position="static">

            <Toolbar>
                <Hidden mdUp>    
                    <ResponsiveDrawer />
                </Hidden>
                <Grid alignItems="flex-start" justify="flex-start" >
                    <Button color="inherit" component={Link} to={'/'}>
                        <img src={Logo} alt="TechnoJam.tech" height="50px" align="center" />TechnoJam
                    </Button>
                </Grid>
                <div style={{ marginLeft: 'auto' }}>
                    <Tooltip title="Night Mode">
                        <IconButton color="inherit" aria-label="Night Mode" style={{ style }} component={Link} to={'/'}>
                            <WbIncandescentIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Our Projects">
                    <a className="btn btn-social-icon btn-github" href="https://github.com/technojam"><i className="fab fa-github fa-lg"style={{color:'#fcfcfc'}}></i></a>
                       
                    </Tooltip>
                    <Tooltip title="Log-in">
                        <IconButton color="inherit" aria-label="Login" style={{ style }} component={Link} to={'/login'}>
                            <PersonIcon />
                        </IconButton>
                    </Tooltip>
                </div>

            </Toolbar>

            <Hidden smDown>
                <Toolbar style={{ backgroundColor: '#faf9f8', minHeight: '40px' }}>
                    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        <Grid alignItems="flex-end" justify="flex-end" spacing={800}>
                            <Button style={{ style }} component={Link} to={'/aboutus'}>About Us</Button>
                            <Button style={{ style }} component={Link} to={'/events'}>Events</Button>
                            <Badge style={{marginBottom:'30px',marginRight:'5px'}} badgeContent={'New'} color="secondary"></Badge>
                            <Button style={{ style }} component={Link} to={'/achievements'}>Achievements</Button>
                            <Button style={{ style }} component={Link} to={'/team'}>Team</Button>
                            <Button style={{ style }} component={Link} to={'/mentorship'}>Mentorship</Button>
                            <Button style={{ style }} component={Link} to={'/groups'}>Groups</Button>
                            <Button style={{ style }} component={Link} to={'/resources'}>Resources</Button>
                            <Button style={{ style }} component={Link} to={'/contactus'}>Contact Us</Button>

                        </Grid>
                    </div>
                </Toolbar>
            </Hidden>

        </AppBar>
    </div>