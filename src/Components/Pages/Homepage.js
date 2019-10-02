import React, { Component } from "react";
import { Grid, Container, Divider, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { homedir } from "os";
const Style = {
    marginTop: "60px",

    maxHeight: "720px",
    square: {

        border: "4px solid yellow",
        padding: "20px",
        width: "auto",
        height: "auto",
        position: "absolute",
        marginTop: "180px",
        left: "46px",
        marginRight:"40px"
    },
    back: {
        width: "100%",
        height: "100%",
        //Put new background Image here of Size 1550 * 720 px
        backgroundImage: "url(https://tj-static.s3.ap-south-1.amazonaws.com/etc/9511.png)",
        //Good Boy don't touch anything else
        backgroundRepeat: "no-repeat",
        marginTop: "40px",
        backgroundPositionX: "center",
        minHeight: "750px",
   
    },
    button:{
        color:"black",
        backgroundColor:"yellow",

    },
    webkitScrollbarTrack:{
        webkitBoxShadow:"inset 0 0 6px rgba(0,0,0,0.3)",
        backgroundColor:"#F5F5F5",
        borderRadius:"10px"
    },
    webkitScrollbar:{
        width: "10px",
        backgroundColor: "#f5f5f5",
    },
    webkitScrollbarThumb:{
        borderRadius:"10px",
        backgroundImage:{
            webkitGradient:{
                
			     left: "bottom",
				 left: "top",
				 colorStop:"(0.44, rgb(122,153,217))",
				 colorStop:"(0.72, rgb(73,125,189))",
				 colorStop:"(0.86, rgb(28,58,148))",
            }
        }
    }
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

                        </Grid>
                    </div>

                ))}


            </div>
        );
    }
}

export default Homepage;