import React, { Component } from "react";


//material ui component
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';



class Achievements extends Component {

    constructor(props) {
        super(props);
        //Until backend add data here cards will be created automatically.
        this.state = {
            achie: [

                {
                    id: 1,
                    title: "NASA space Challenge",
                    by: "Darshan Baid",
                    date: "Spetember 15, 2019",
                    Description: "Technojam conducting 24 hours hackthon in delhi region at galgotias university. it is recognized by NASA",
                    Image: "https://storage.cloud.google.com/tjtempimg/space.jpg?authuser=1",
                    avatar: "https://storage.cloud.google.com/tjtempimg/avatar.jpg?authuser=1"


                },

                {
                    id: 2,
                    title: "First Ideathon",
                    by: "Shwetank",
                    date: "26 August, 2019",
                    Description: "Conducted Ideathon in Galgotias's Induction Program.alomst 300 students took part.crowd was really enthusiastic",
                    Image: "https://storage.cloud.google.com/tjtempimg/ideathon.jpg?authuser=1",
                    avatar: "https://storage.cloud.google.com/tjtempimg/avatar.jpg?authuser=1"
                },

                {
                    id: 3,
                    title: "First Gsocer",
                    by: "Rahul Chuhan",
                    date: "May 12, 2018",
                    Description: "rahul chuhan Member of Team Teachnojam is the first Gsoc cleared person of Galgotias University",
                    Description: "Technojam conducting 24 hours hackthon in delhi region at galgotias university. it is recognized by NASA",
                    Image: 'https://storage.cloud.google.com/tjtempimg/Gsoc.JPG?authuser=1',
                    avatar: "https://storage.cloud.google.com/tjtempimg/avatar.jpg?authuser=1"
                },

                {
                    id: 4,
                    title: "Dextrix 1.0",
                    by: "Team Technojam",
                    date: "26 August, 2018",
                    Description: "Conducted Dextrix1.0 Galgotias's University first ever hackthon. Almost 200 students took part. ",
                    Image: "https://storage.cloud.google.com/tjtempimg/dextrix.JPG?authuser=1",
                    avatar: "https://storage.cloud.google.com/tjtempimg/avatar.jpg?authuser=1"
                }
            ]
        }
    }

    render() {



        const achie = this.state.achie;

        console.log(achie);
        return (


            <Container maxWidth="lg">
                <div style={{ marginTop: "30px", marginBottom: "20px", }}>
                    <div >

                        <Grid container
                            spacing={2}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start">

                            {achie.map(achie => (

                                    <Grid item xs={12} sm={3} md={4} >
                                                <Card style={{
                                                    maxHeight: "190px", minHeight: "190px",
                                                    boxShadow: " 0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 20px 30px 0 rgba(0, 0, 0, 0.19)",
                                                    borderRadius: "20px"
                                                }}>
                                                    <CardHeader


                                                    />
                                                    <CardMedia>

                                                        <img src={achie.Image} width="100%" height="auto" />

                                                    </CardMedia>

                                                    <CardContent>
                                                        <Typography variant="h5" color="textSecondary" component="p">
                                                            {achie.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="textSecondary" component="p">
                                                            {achie.Description}
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


export default Achievements;