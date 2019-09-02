import React from 'react'



import { AppBar, Toolbar, Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';





export default props =>
    <div  style={{marginBottom:'auto',marginTop:'auto',marginLeft:'auto',marginRight:'auto',padding:'auto'}}>
        <AppBar position="static" color="default">
            <Toolbar>

                <Grid container direction="row" justify="flex-start" alignItems="flex-end">
                    
                    <Typography variant="body2" style={{fontSize:'0.92rem'}}>
                        Copyright <CopyrightIcon /> 2019 Team TechnoJam 
                                        </Typography> 
                </Grid>
                <Grid container direction="row" spacing={80} >
                    <div style={{ paddingLeft:'auto',paddingRight:'auto', marginLeft:'90px'}} >
                        <a className="btn btn-social-icon btn-twitter" href=" https://twitter.com/technojam_gu"><i className="fab fa-twitter fa-lg"style={{color:'#28aae1'}}></i></a>&#8194;
                        <a className="btn btn-social-icon btn-facebook" href="facebook.com/technojam.scse "><i className="fab fa-facebook fa-lg"style={{color:'#3b5998'}}></i></a>&#8194;
                        <a className="btn btn-social-icon btn-instagram" href="https://instagram.com/technojam_galgotias"><i className="fab fa-instagram fa-lg"style={{color:'#e41a2b'}}></i></a>&#8194;
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/company/technojam/"><i className="fab fa-linkedin fa-lg" style={{color:'#0077b5'}}></i></a>&#8194;
                        
                    </div>
                </Grid>
                <Hidden smDown>
           
                <Grid container direction="row" >
                <div style={{ paddingLeft:'100px',paddingRight:'auto' }}>
                    <Typography>
                        Email us : TechnoJam@galgotiasuniversity.edu.in
                     </Typography>
                </div>
                </Grid>
                </Hidden>
               </Toolbar>
        </AppBar>
</div>