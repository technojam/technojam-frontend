import React from 'react'


//material ui component
import { AppBar, Toolbar, Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';






export default props =>

    <div style={{ 
        marginBottom: 'auto', 
        marginTop: 'auto', 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        padding: 'auto', 
        position: 'fixed', 
        bottom: '0', 
        width: 'inherit' 
    }}>
        <AppBar position="static" color="default">


            <Toolbar>

                <Grid container direction="row" justify="flex-start" alignItems="flex-end">

                    <Typography variant="body2" style={{ fontSize: '0.92rem', fontFamily: "Roboto" }}>
                        Copyright © 2019 Team TechnoJam
                    </Typography>
                </Grid>
                <Grid container direction="row" spacing={80} >
                    <Hidden mdUp>
                        <div style={{ marginLeft: 'auto' }} >
                        <a className="btn btn-social-icon btn-twitter" href=" https://twitter.com/technojam_gu" target="_blank"><i className="fab fa-twitter fa-lg" style={{ color: '#28aae1' }}></i></a>&#8194;
                        <a className="btn btn-social-icon btn-facebook" href="facebook.com/technojam.scse " target="_blank"><i className="fab fa-facebook fa-lg" style={{ color: '#3b5998' }}></i></a>&#8194;
                        <a className="btn btn-social-icon btn-instagram" href="https://instagram.com/technojam_galgotias" target="_blank"><i className="fab fa-instagram fa-lg" style={{ color: '#e41a2b' }}></i></a>&#8194;
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/company/technojam/" target="_blank"><i className="fab fa-linkedin fa-lg" style={{ color: '#0077b5' }}></i></a>&#8194;
                    </div>
                    </Hidden>
                    <Hidden smDown>
                        <div style={{ paddingLeft: 'auto', paddingRight: 'auto', marginLeft: '90px' }} >
                        <a className="btn btn-social-icon btn-twitter" href=" https://twitter.com/technojam_gu" target="_blank"><i className="fab fa-twitter fa-lg" style={{ color: '#28aae1' }}></i></a>&#8194;
                        <a className="btn btn-social-icon btn-facebook" href="facebook.com/technojam.scse " target="_blank"><i className="fab fa-facebook fa-lg" style={{ color: '#3b5998' }}></i></a>&#8194;
                        <a className="btn btn-social-icon btn-instagram" href="https://instagram.com/technojam_galgotias" target="_blank"><i className="fab fa-instagram fa-lg" style={{ color: '#e41a2b' }}></i></a>&#8194;
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/company/technojam/" target="_blank"><i className="fab fa-linkedin fa-lg" style={{ color: '#0077b5' }}></i></a>&#8194;
                    </div>
                    </Hidden>
                </Grid>
                <Hidden smDown>

                    <Grid container direction="row" >
                        <div style={{ paddingLeft: '100px', paddingRight: 'auto' }}>
                            <Typography style={{ fontFamily: "Roboto" }}>
                                Email us : Technojam@galgotiasuniversity.edu.in
                     </Typography>
                        </div>
                    </Grid>
                </Hidden>
            </Toolbar>
        </AppBar>
    </div>
