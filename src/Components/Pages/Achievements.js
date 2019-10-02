import React, { Component } from "react";


//material ui component
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

class Achievements extends Component {

    constructor(props) {
        super(props);
        //Until backend add data here cards will be created automatically.
        this.state = {
            achie: [

                {
                    id: 1,
                    title: "Nasa space Challenge",
                    by: "Darshan Baid",
                    date: "Spetember 15, 2019",
                    Description: "Technojam conducting 24 hours hackthon in delhi region at galgotias university. it is recognized by NASA",
                    Image: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/space.jpg",
                   


                },

                {
                    id: 2,
                    title: "First Ideathon",
                    by: "Shwetank",
                    date: "26 August, 2019",
                    Description: "Conducted Ideathon in Galgotias's Induction Program.alomst 300 students took part.crowd was really enthusiastic",
                    Image:  " https://tj-static.s3.ap-south-1.amazonaws.com/etc/ideathon.JPG",
                   
                },

                {
                    id: 3,
                    title: "First Gsocer",
                    by: "Rahul Chuhan",
                    date: "May 12, 2018",
                    Description: "rahul chuhan Member of Team Teachnojam is the first Gsoc cleared person of Galgotias University",
                    Description: "Technojam conducting 24 hours hackthon in delhi region at galgotias university. it is recognized by NASA",
                    Image: 'https://tj-static.s3.ap-south-1.amazonaws.com/etc/rahul.jpg',
                    
                },

                {
                    id: 4,
                    title: "Dextrix 1.0",
                    by: "Team Technojam",
                    date: "26 August, 2018",
                    Description: "Conducted Dextrix1.0 Galgotias's University first ever hackthon. Almost 200 students took part. ",
                    Image: "https://storage.cloud.google.com/tjtempimg/dextrix.JPG?authuser=1",
                    
                }
            ]
        }
    }

    render() {



        const achie = this.state.achie;

        console.log(achie);
        return (

            <Container maxWidth="lg">
                <div style={{ marginTop: "100px",
                               }}>
                    <div >
                    <Typography variant="h3" style={{ fontFamily: "Roboto", letterSpacing: "1px", lineHeight: "28px", wordSpacing: "5px",textAlign:"center",color:"#073fff"}}>
                            Our Achievements    
                            </Typography>
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

                        <Grid container
                            spacing={3}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                          >

                            {achie.map(achie => (

                                    <Grid item xs={12} sm={3} md={4}>
                                                <Card style={{
                                                    maxHeight: "410px", minHeight: "410px",
                                                    boxShadow: " 0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 20px 30px 0 rgba(0, 0, 0, 0.19)",
                                                    borderRadius: "20px",
                                                    
                                                }}>
                                                    
                                                    <CardMedia>

                                                        <img src={achie.Image} width="100%" height="auto" />

                                                    </CardMedia>

                                                    <CardContent>
                                                        <Typography variant="h5"  component="p" style={{fontFamily:"Roboto",letterSpacing:"2px"}}>
                                                            {achie.title}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardContent style={{marginTop:"-20px",letterSpacing:"2px"}}>
                                                        <Typography variant="body2" color="textSecondary" component="p" style={{letterSpacing:"0.9px",fontFamily: "Roboto"}} >
                                                            {achie.Description}
                                                        </Typography>
                                                        </CardContent>
                                                  

                                                </Card>
                                    </Grid>

                            ))}

                        </Grid>
                    </div>
                                                <br></br><br></br>

                </div>
            </Container>
        );
    }
}


export default Achievements;