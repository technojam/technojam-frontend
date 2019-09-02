import React, { Component } from "react";


//material ui component
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid, Container } from "@material-ui/core";



class Achievements extends Component {

    constructor(props) {
        super(props);
        //temproray data
        this.state = {
            achie: [

                {
                    id: 1,
                    title: "NASA space Challenge",
                    by: "Darshan Baid",
                    date: "Spetember 15, 2019",
                    Description: "Technojam conducting 24 hours hackthon in delhi region at galgotias university. it is recognized by NASA",
                    Image: "https://storage.cloud.google.com/tjtempimg/space.jpg",
                    avatar: "https://storage.cloud.google.com/tjtempimg/avatar.jpg"


                },

                {
                    id: 2,
                    title: "First Ideathon",
                    by: "Shwetank",
                    date: "26 August, 2019",
                    Description: "Conducted Ideathon in Galgotias's Induction Program.alomst 300 students took part.crowd was really enthusiastic",
                    Image: "https://storage.cloud.google.com/tjtempimg/ideathon.jpg",
                    avatar: "https://storage.cloud.google.com/tjtempimg/avatar.jpg"
                },

                {
                    id: 3,
                    title: "First Gsocer",
                    by: "Rahul Chuhan",
                    date: "May 12, 2018",
                    Description: "rahul chuhan Member of Team Teachnojam is the first Gsoc cleared person of Galgotias University",
                    Description: "Technojam conducting 24 hours hackthon in delhi region at galgotias university. it is recognized by NASA",
                    Image: 'https://storage.cloud.google.com/tjtempimg/Gsoc.JPG',
                    avatar: "https://storage.cloud.google.com/tjtempimg/avatar.jpg"
                },

                {
                    id: 4,
                    title: "Dextrix 1.0",
                    by: "Team Technojam",
                    date: "26 August, 2018",
                    Description: "Conducted Dextrix1.0 Galgotias's University first ever hackthon. Almost 200 students took part. ",
                    Image: "https://storage.cloud.google.com/tjtempimg/dextrix.JPG",
                    avatar: "https://storage.cloud.google.com/tjtempimg/avatar.jpg"
                }
            ]
        }
    }

    render() {



        const achie = this.state.achie;
        console.log(achie);
        return (

            <div style={{ flexGrow: 1, display: 'inline' }}>
                <div style={{ marginLeft: "30px", marginRight: "30px", marginTop: "20px", padding: "20px" }}>
                    <Grid container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start">
                        {achie.map(achie => (
                            
                            <Grid item xs={12} sm={4} md={4} >
                                <Card>
                                    <CardHeader
                                        avatar={
                                            <Avatar alt="Remy Sharp" src={achie.avatar} />
                                        }

                                        title={achie.by}
                                        subheader={achie.date}
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
            
        );
    }
}


export default Achievements;