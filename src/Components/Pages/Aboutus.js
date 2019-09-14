import React from 'react'

//materila ui Component
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Hidden } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const style = {
    marginTop:"20px",
 
   
}

function Aboutus() {
    return (
        <Container maxWidth="lg">
            <div className="aboutus" style={{marginTop:"20px"}}>
               <Hidden smDown>
                <Card >
                    <Grid
                    container
                    direction="row"
                   
                    spacing={5}>
                        <Grid item lg={4} md={4} sm={4} spacing={5}>
                        <CardContent>
                           <CardMedia>
                           <img src="https://tj-static.s3.ap-south-1.amazonaws.com/etc/team.svg" width="50%" height="auto" />
                           </CardMedia>
                           <Typography>
                           Team TechnoJam consist of 50 people and we all work together like a strong team.
                           </Typography>
                           </CardContent>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                        <CardContent>
                        <CardMedia>
                           <img src="https://tj-static.s3.ap-south-1.amazonaws.com/etc/attendees.svg" width="50%" height="auto" />
                           </CardMedia>
                        </CardContent>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                        <CardContent>
                        <CardMedia>
                           <img src="https://tj-static.s3.ap-south-1.amazonaws.com/etc/event-management.svg" width="50%" height="auto" />
                           </CardMedia>
                        </CardContent>
                        </Grid>

                    </Grid>

                </Card>
                </Hidden>
                <Hidden smUp>
                <Card >
                    <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center" spacing={5}>
                        <Grid item lg={4} md={4} sm={4} spacing={5}>
                        <CardContent>
                           <CardMedia>
                           <img src="https://tj-static.s3.ap-south-1.amazonaws.com/etc/team.svg" width="100%" height="auto" />
                           </CardMedia>
                           </CardContent>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                        <CardContent>
                        <CardMedia>
                           <img src="https://tj-static.s3.ap-south-1.amazonaws.com/etc/attendees.svg" width="100%" height="auto" />
                           </CardMedia>
                        </CardContent>
                        </Grid>
                        <Grid item lg={4} md={4} sm={4}>
                        <CardContent>
                        <CardMedia>
                           <img src="https://tj-static.s3.ap-south-1.amazonaws.com/etc/event-management.svg" width="100%" height="auto" />
                           </CardMedia>
                        </CardContent>
                        </Grid>

                    </Grid>

                </Card>
                </Hidden>
               
            </div>
            <br></br>
        </Container>

    );
}
export default Aboutus;