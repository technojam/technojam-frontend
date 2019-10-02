import React, { Component } from "react";



//material ui component
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Timeline, TimelineEvent } from "react-event-timeline";






class Events extends Component {

    constructor(props) {
        super(props);
        //Until backend add data here cards will be created automatically.
        this.state = {

            paevent: [



                {
                    id: 1,
                    title: "Ideathon",
                    Feedback: "#",
                    date: "26 August, 2019",
                    Venue: " GCET Auditorium",
                    Todo: "#",
                    Description: "Conducted Ideathon in Galgotias's Induction Program for freshers. alomst 300 students took part.",

                },

                {
                    id: 2,
                    title: "Dextrix 1.0",
                    Feedback: "#",
                    date: "May 12, 2018",
                    Venue: " GU campus",
                    Todo: "#",
                    Description: "Technojam conducted 12 hours hackthon in delhi region at galgotias university. it is recognized Speaker NASA",

                },

            ],

            upevent: [



                {
                    id: 1,
                    title: "WebDev Day 1",
                    Register: "#",
                    date: "26 August, 2019",
                    venue: " GU C Block room no 211",
                    Todo: "#",
                    Description: "Learn to Develop website from scratch on MERN stack.",

                },

                {
                    id: 2,
                    title: "Dextrix 2.0",
                    Register: "#",
                    date: "May 12, 2018",
                    venue: " GU campus",
                    Todo: "#",
                    Description: "Technojam conducted 12 hours hackthon in delhi region at galgotias university. it is recognized Speaker NASA",

                },

            ]


        }
    }

    render() {

        const upevent = this.state.upevent;
        const paevent = this.state.paevent;



        return (

            <Container maxWidth="xl" style={{width:"100%",top:"0"}}>
                  
                <section style={{ marginBottom: "15px",marginTop:"65px",width:"100%"}}>

                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={2}
                            md={4}
                        >




                            <div style={{display:"inline",display:"inlineblock",float:"left"}}>

                                {upevent.map(upevent => (
                                    <Timeline  style={{ border: "black", }}>
                                        <TimelineEvent>
                                            <CardContent>
                                                <Typography variant="h5" component="p" style={{ fontFamily: "Roboto", letterSpacing: "2px" }}>
                                                    {upevent.title}
                                                </Typography>
                                            </CardContent>
                                            <Divider></Divider>
                                            <CardContent>
                                                <Typography variant="body2" color="Secondary" component="p"style={{fontFamily: "Roboto"}} >
                                                    <b>{upevent.date}</b>
                                                </Typography>
                                            </CardContent>
                                            <CardContent style={{ marginTop: "-20px" }}>
                                                <Typography variant="body2" color="textSecondary" component="p" style={{ letterSpacing: "0.9px",fontFamily: "Roboto" }} >
                                                    {upevent.Description}
                                                </Typography>
                                            </CardContent>
                                            <Divider />
                                            <CardContent >
                                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: "Roboto"}} >
                                                    <b>Venue:</b> {upevent.venue}
                                                </Typography>
                                                <Button variant="contained" color="secondary" size="small" style={{ marginTop: "5px",fontFamily: "Roboto" }} src={upevent.Register}>
                                                    Register Now
                                                     </Button>
                                            </CardContent>
                                        </TimelineEvent>

                                    </Timeline>
                                ))}
                            </div>
                        </Grid>

                        <Grid item md={2}></Grid>

                        <Grid item
                            direction="column"
                            justify="center"
                            alignItems="center"

                            md={4}
                        >
                            <div>


                                {paevent.map(paevent => (


                                    <Grid item >
                                        <br></br>
                                        <Card style={{
                                            maxHeight: "auto", minHeight: "auto",
                                            boxShadow: " 0 5px 5px 0 rgba(0, 0, 0, 0.12), 0 5px 5px 0 rgba(0, 0, 0, 0.12)",
                                            borderRadius: "20px",

                                        }}>


                                            <CardContent>
                                                <Typography variant="h5" component="p" style={{ fontFamily: "Roboto", letterSpacing: "2px" }}>
                                                    {paevent.title}
                                                </Typography>
                                            </CardContent>
                                            <Divider></Divider>
                                            <br></br>
                                            <CardContent style={{ marginTop: "-20px" }}>
                                                <Typography variant="body2" color="Secondary" component="p" style={{fontFamily: "Roboto"}} >
                                                    <b>{paevent.date}</b>
                                                </Typography>
                                            </CardContent>
                                            <CardContent style={{ marginTop: "-20px" }}>
                                                <Typography variant="body2" color="textSecondary" component="p" style={{ letterSpacing: "0.9px",fontFamily: "Roboto" }}>
                                                    {paevent.Description}
                                                </Typography>
                                            </CardContent>
                                            <Divider variant="inset" />

                                            <CardContent style={{ marginLeft: "50px" }}>
                                                <a className="btn btn-social-icon btn-github" href={paevent.Todo} target="_blank">
                                                    <i className="fab fa-github fa-lg" style={{color:"black"}} ></i></a>
                                                <Button variant="outlined" color="primary" style={{ marginLeft: "10px",fontFamily: "Roboto" }} href={paevent.Feedback} >
                                                    Feedback
                                                 </Button>
                                            </CardContent>


                                        </Card>

                                    </Grid>


                                ))}

                            </div>
                        </Grid>
                    </Grid>
                    <br></br><br></br>
                </section>
            </Container>
        )
    }
}


export default Events;

/*<a className="btn btn-social-icon btn-github" src={upevent.Todo} target="_blank">
<i className="fab fa-github fa-lg" ></i></a>*/