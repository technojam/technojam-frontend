import React, { Component } from "react";

//material ui component
import { Grid,  Typography, Hidden } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const Style = {
    marginTop: "60px",
    maxHeight:"720px",
    height:'90vh',
   
    square: {

        border: "4px solid yellow",
        padding: "20px",
        
        position: "absolute",
        marginTop: "180px",
        left: "46px",
        marginRight:"40px",
    },
    square1: {

        border: "4px solid yellow",
        padding: "20px",
        position: "absolute",
        marginTop: "18px",
        left: "46px",
        marginRight:"40px",
    },
    back: {
        width: "100%",
        height: "100%",
        //Put new background Image here of Size 1550 * 720 px
        backgroundImage: "url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/9511.png)",
        //Good Boy don't touch anything else
        backgroundRepeat: "no-repeat",
        
        backgroundPositionX: "center",
        minHeight: "750px",
   
    },
    button:{
        color:"black",
        backgroundColor:"yellow",

    },
    
}

class Homepage extends Component {

    constructor(props) {
        super(props);
        //Until backend add data here cards will be created automatically.
        this.state = {
            Home: [
                {
                    content: "Technojam Mentorship initiative is a global program focused on introducing students to open source software development. Since its inception program aims on giving the very best experince of GSOC to enthusiast.",
                    title: "DEXTRIX 2.0",
                    cta: "#",
                    buttonname:"Register here"
                }

            ]
        }
    }

    render() {



        const Home = this.state.Home;

        console.log(Home);
        return (


            <div style={Style}>


                {Home.map(Home => (
                    <div style={Style.back}>


                        <Grid container xs={6} sm={3} md={3}>
                            <Hidden smDown>
                            <div style={Style.square}>
                            <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "550px", paddingLeft: "20px", paddingRight: "20px" }}>
                            <Typography variant="h3" style={{ fontFamily: "Roboto", letterSpacing: "2px",color:"white"}}>
                                {Home.title}
                             </Typography><br></br>
                                <Typography variant="body2" style={{ fontFamily: "Roboto", letterSpacing: "1px", fontSize: "21px", lineHeight: "35px", wordSpacing: "5px",color:"white"}}>
                                    {Home.content}
                                </Typography>
                                <br></br>
                                <Button variant="contained" style={Style.button}>
                                      {Home.buttonname}  <a  src={Home.cta} target="_blank"></a>
                                </Button>
                                </div>
                             </div>
                             </Hidden>
                             
                             <Hidden     mdUp>
                            <div style={Style.square1}>
                            <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "550px", paddingLeft: "20px", paddingRight: "20px" }}>
                            <Typography variant="h3" style={{ fontFamily: "Roboto", letterSpacing: "2px",color:"white",fontSize: "28px"}}>
                                {Home.title}
                             </Typography><br></br>
                                <Typography variant="body2" style={{ fontFamily: "Roboto", letterSpacing: "1px", fontSize: "14px", lineHeight: "28px", wordSpacing: "5px",color:"white"}}>
                                    {Home.content}
                                </Typography>
                                <br></br>
                                <Button variant="contained" style={Style.button}>
                                      {Home.buttonname}  <a  href={Home.cta} target="_blank"></a>
                                </Button>
                                </div>
                             </div>
                             </Hidden>

                        </Grid>
                    </div>

                ))}


            </div>
        );
    }
}

export default Homepage;