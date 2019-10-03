import React, { Component } from "react";


//material ui component
import { Grid, Container } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class Groups extends Component {

    constructor(props) {
        super(props);
        //Until backend add data here cards will be created automatically.
        this.state = {
            Groups: [

                {
                    id: 1,
                    title: "Gaming and VR",
                    Description: "Technojam Gaming and VR speciality Group is Dedicated to devellopment of games",
                },
                {
                    id: 2,
                    title: "Gaming and VR",
                    Description: "Technojam Gaming and VR speciality Group is Dedicated to devellopment of games",

                },
                {
                    id: 3,
                    title: "Gaming and VR",
                    Description: "Technojam Gaming and VR speciality Group is Dedicated to devellopment of games",

                },
                {
                    id: 4,
                    title: "Gaming and VR",
                    Description: "Technojam Gaming and VR speciality Group is Dedicated to devellopment of games",

                },
                {
                    id: 5,
                    title: "Gaming and VR",
                    Description: "Technojam Gaming and VR speciality Group is Dedicated to devellopment of games",

                },
                {
                    id: 6,
                    title: "Gaming and VR",
                    Description: "Technojam Gaming and VR speciality Group is Dedicated to devellopment of games",

                },


            ]
        }
    }

    render() {



        const Groups = this.state.Groups;

        console.log(Groups);
        return (

           <Container maxWidth="lg">
                <div style={{ marginTop: "100px", marginBottom: "20px", }}>
                    <div >

                        <h2 style={{color:"#007FFF",textAlign:"center",fontFamily: "Roboto"}}>
                            Our speciality Groups
                            </h2>
                        <hr style={{
                            maxWidth: "120px",
                            borderWidth: "0.6px",
                            opacity: "1",
                            marginTop: "25px",
                            marginBottom: "25px",
                            borderColor: "#007FFF"
                        }}>

                        </hr>
                        <br></br>
                        <Grid container spacing={3} direction="row"
                            justify="flex-start"
                            alignItems="flex-start">

                            {Groups.map(Groups => (
                                <Grid item xs={6} sm={3} md={3}>
                                    <Card style={{
                                        position: "relative", border: "1px solid rgba(0, 0, 0, 0.04)",
                                        padding: "15px 20px", fontSize: "18px", fontWeight: "600",
                                        marginBottom: "30px", borderRadius: "15px",
                                        boxShadow: "9px 9px 45px rgba(0, 0, 0, 0.4)"
                                    }}>

                                        <CardContent>
                                            <Typography variant="h5" style={{ fontFamily: "Roboto" }}>
                                                {Groups.title}
                                            </Typography>
                                        </CardContent>
                                        <CardContent style={{ marginTop: "-20px" }}>
                                            <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: "Roboto"}} >
                                                {Groups.Description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            ))}

                        </Grid>
                    </div>
                </div>
            </Container>
        
        );
    }
}




export default Groups;