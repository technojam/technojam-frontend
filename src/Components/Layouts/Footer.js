import React from 'react'
import { Link } from 'react-router-dom'


import { AppBar, Toolbar, Button, IconButton, Hidden } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';

const drawerWidth = 240;



export default props =>
    <div>
        <AppBar position="static" color="default">
            <Toolbar>

                <Grid container direction="row" justify="flex-start" alignItems="flex-end">
                    <CopyrightIcon />
                    <Typography>
                        Copyright 2019 Team TechnoJam
                                        </Typography>
                </Grid>
                <Grid container direction="row" >
                    <div style={{ paddingLeft:'200px' }} >
                        <a className="btn btn-social-icon btn-twitter" href=" https://twitter.com/technojam_gu"><i className="fab fa-twitter fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="facebook.com/technojam.scse "><i className="fab fa-facebook fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-instagram" href="https://instagram.com/technojam_galgotias"><i className="fab fa-instagram fa-lg"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/company/technojam/"><i className="fab fa-linkedin fa-lg"></i></a>
                        
                    </div>
                </Grid>
              
                <Grid container direction="row" >
                <div style={{ paddingLeft:'100px' }}>
                    <Typography>
                        Email us : TechnoJam@galgotiasuniversity.edu.in
                     </Typography>
                </div>
                </Grid>
               

            </Toolbar>
        </AppBar>


    </div>