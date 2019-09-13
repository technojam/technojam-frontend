import React, { Component } from "react";



//material ui component
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';


class Events extends Component {

    constructor(props) {
        super(props);
        //Until backend add data here cards will be created automatically.
        this.state = {
            upevent: [

                {
                    id: 1,
                    title: "Nasa space Challenge",
                    Speaker: "Darshan Baid",
                    date: "Spetember 15, 2019",
                    Venue: " GCET Campus",
                    Todo: "#",
                    Description: "Technojam conducting 24 hours hackthon in delhi region at galgotias university. it is recognized Speaker NASA",



                },
                {
                    id: 1,
                    title: "AOG Workshop",
                    Speaker: "Darshan Baid",
                    date: "Spetember 15, 2019",
                    Venue: " A-block Room no 111",
                    Todo: "#",
                    Description: "Conducted an action On Google Workshop for freshers. provided hands on experince",



                },


               
            ],
            paevent: [

              

                {
                    id: 1,
                    title: "Ideathon",
                    Speaker: "Shwetank",
                    date: "26 August, 2019",
                    Venue: " GCET Auditorium",
                    Todo: "#",
                    Description: "Conducted Ideathon in Galgotias's Induction Program for freshers. alomst 300 students took part.",

                },

                {
                    id: 2,
                    title: "Dextrix 1.0",
                    Speaker: "Rahul Chuhan",
                    date: "May 12, 2018",
                    Venue: " GU campus",
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

            <Container>
            <section style={{marginBottom:"15px"}}>
                  
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
                    <div>

                    <h2 style={{color:"#007FFF",textAlign:"center"}}>
                            Upcoming Events    
                            </h2>
                        <hr style={{
                            maxWidth: "120px",
                            borderWidth: "0.8px",
                            opacity: "1",
                            marginTop: "25px",
                            marginBottom: "25px",
                            borderColor: "#007FFF"
                        }}>

                        </hr>
                        <br></br>
                        
                        {upevent.map(upevent => (
                           
                                    
                                <Grid item >
                                    <br></br>
                                    <Card style={{
                                        maxHeight: "auto", minHeight: "auto",
                                        boxShadow: " 0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 20px 30px 0 rgba(0, 0, 0, 0.19)",
                                        borderRadius: "20px",

                                    }}>


                                        <CardContent>
                                            <Typography variant="h5" component="p" style={{ fontFamily: "Linotte" }}>
                                                {upevent.title}
                                            </Typography>
                                        </CardContent>
                                        <Divider></Divider>
                                        <br></br>
                                        <CardContent style={{ marginTop: "-20px" }}>
                                            <Typography variant="body2" color="textSecondary" component="p" >
                                            {upevent.date}  
                                            </Typography>
                                        </CardContent>
                                        <CardContent style={{ marginTop: "-20px" }}>
                                            <Typography variant="body2" color="textSecondary" component="p" >
                                            {upevent.Description}  
                                            </Typography>
                                        </CardContent>
                                        <Divider  variant="inset" />

                                        <CardContent style={{marginLeft:"50px"}}>
                                        <a className="btn btn-social-icon btn-github" src={upevent.Todo} target="_blank">
                                        <i className="fab fa-github fa-lg" ></i></a>
                                        {upevent.Venue}  
                                        </CardContent>
                                      

                                    </Card>

                                </Grid>
                            

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
                      
                        
                    <h2 style={{color:"#007FFF",textAlign:"center"}}>
                            Past  Events    
                            </h2>
                        <hr style={{
                            maxWidth: "120px",
                            borderWidth: "0.9px",
                            opacity: "1",
                            marginTop: "25px",
                            marginBottom: "25px",
                            borderColor: "#007FFF"
                        }}>

                        </hr>
                        <br></br>
                      
                        {paevent.map(paevent => (
                           
                                    
                           <Grid item >
                               <br></br>
                               <Card style={{
                                   maxHeight: "auto", minHeight: "auto",
                                   boxShadow: " 0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 20px 30px 0 rgba(0, 0, 0, 0.19)",
                                   borderRadius: "20px",

                               }}>


                                   <CardContent>
                                       <Typography variant="h5" component="p" style={{ fontFamily: "Linotte" }}>
                                           {paevent.title}
                                       </Typography>
                                   </CardContent>
                                   <Divider></Divider>
                                   <br></br>
                                   <CardContent style={{ marginTop: "-20px" }}>
                                       <Typography variant="body2" color="textSecondary" component="p" >
                                       {paevent.date}  
                                       </Typography>
                                   </CardContent>
                                   <CardContent style={{ marginTop: "-20px" }}>
                                       <Typography variant="body2" color="textSecondary" component="p" >
                                       {paevent.Description}  
                                       </Typography>
                                   </CardContent>
                                   <Divider  variant="inset" />

                                   <CardContent style={{marginLeft:"50px"}}>
                                   <a className="btn btn-social-icon btn-github" src={upevent.Todo} target="_blank">
                                   <i className="fab fa-github fa-lg" ></i></a>
                                   {paevent.Venue}  
                                   </CardContent>
                                 

                               </Card>

                           </Grid>
                       

                   ))}

                    </div>
                    </Grid>
                </Grid>
            </section>
            </Container>
        )
    }
}


export default Events;