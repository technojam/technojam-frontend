import React, { Component } from 'react'


//material ui component
import Container from '@material-ui/core/Container';
import { Typography, Hidden, Grid, Button, CardHeader, CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { FormGroup } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';



var sectionStyle = {
    width: "100%",
    height:'85vh',
    backgroundRepeat: "no-repeat",
    marginTop: "100px",
    backgroundPositionX: "center",
    Height: "100%"
   };
const style={
    form:{ 
        padding:"20px",
        text:{
       
        appearance: "none",
        width: "100%",
       
        height: "35px",
        
        borderRadius: "5px",
        outline: "none",
        border: "none",
        background: "#e8ebed",
        color: "#576366",
        fontSize: "14px"
    }
 }
}


class Mentorship extends Component {
   
    render() {

     

        return (
            <Container maxWidth="xl ">
            <div style={sectionStyle}>
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={6}>
                        <Grid  direction="row" xs={12} sm={12} md={6}>
                            <Card style={{borderRadius: "10px",marginTop:"23px"}}>
                                <div style={{backgroundColor:"#24292E"}}>
                                    <br></br>
                                <CardContent>
                                    <Hidden smUp >
                                       <Typography variant="h4" style={{ fontFamily: "Roboto", letterSpacing: "1px", lineHeight: "28px", wordSpacing: "5px",textAlign:"center",color:"white"}}>
                                    Get in touch
                                       </Typography>
                                    </Hidden >
                                    
                                    <Hidden mdDown >
                                       <Typography variant="h2" style={{ fontFamily: "Roboto", letterSpacing: "1px", lineHeight: "28px", wordSpacing: "5px",textAlign:"center",color:"white"}}>
                                    Get in touch
                                       </Typography>
                                    </Hidden>
 
                                </CardContent>
                                </div>
                                <Divider></Divider>
                                <br></br>
                               <div style={style.form}>
                                    <form autoComplete="on">
                                    <Grid container spacing={3}>
                                    <Grid  item xs={6}>
                                            <FormGroup>
                                                <label>First-Name</label>
                                                <input  style={style.form.text} type="text" name="Firstname" onChange={this.handleChange}></input>
                                            </FormGroup>
                                   </Grid >
                                   <Grid  item xs={6}>
                                            <FormGroup>
                                                <label>Last-Name</label>
                                                <input  style={style.form.text} type="text" name="Lastname" onChange={this.handleChange}></input>
                                            </FormGroup>
                                   </Grid>
                                   </Grid>
                                   <FormGroup>
                                       <label>Email</label>
                                       <input  style={style.form.text} type="email" name="Email" onChange={this.handleChange}></input>
                                   </FormGroup>
                                   <FormGroup>
                                       <label>Contact Number</label>
                                       <input style={style.form.text} type="tel" name="Mobile" onChange={this.handleChange}></input>
                                   </FormGroup>
                                   <FormGroup>
                                       <label>Query</label>
                                       <input  style={style.form.text} type="textarea" name="Reason" onChange={this.handleChange}></input>
                                   </FormGroup>
                                   <br></br>
                                   <Typography style={{textAlign:"center",fontFamily:"Roboto"}}>
                                   <Button variant="contained" style={{backgroundColor:" #e03030",color:"white"}}>
                                      Submit <a  href="#" target="_blank"></a>
                                </Button>
                                </Typography>

                                </form>
                                </div>

    
                            </Card>
    
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Card style={{borderRadius: "10px",fontSize:"14px"}}>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="technojam_gu"
                                options={{height: 440,}}
                                size="20px"
                            /> 
                          
                            </Card>
    
    
                        </Grid>
                    
                </Grid>
                <br></br>
            </div>
            
            </Container>
    




        )
    }
}


export default Mentorship;
