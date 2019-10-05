import React, { Component } from "react";

//material ui component

import { Grid, Typography, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "../style.css";


const Style = {
  marginTop: "60px",
  maxHeight: "720px",
  height: "90vh",

  square: {
    border: "4px solid red",
    padding: "20px",

    position: "absolute",
    marginTop: "180px",
    left: "46px",
    marginRight: "40px"
  },
  square1: {
    border: "4px solid red",
    padding: "20px",
    position: "absolute",
    marginTop: "18px",
    left: "46px",
    marginRight: "40px",
    marginTop:"100px",
  },
  back: {
    width: "100%",
    height: "100%",
    //Put new background Image here of Size 1550 * 720 px


    //Good Boy don't touch anything else
    backgroundRepeat: "no-repeat",

    backgroundPositionX: "center",
    minHeight: "750px"
  },
  button: {
    color: "white",
    backgroundColor: "red"
  }
};

/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons.
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

class Homepage extends Component {

  constructor(props) {
    super(props);
    //Until backend add data here cards will be created automatically.
    this.state = {
      Home: [
        {
          content:

            "Technojam is a community based on promoting Open source community. We to work on open Source projects and give mentorship in them, to give a first experince on GSOC. we also conduct Handson workshops at various places.",
          title: "Our Community",
          cta: "#",

          buttonname: "Know More",

          backgroundImageUrl:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/b1.jpg"
        }
      ]
    };
  }

  render() {
    const Home = this.state.Home;


    console.log(Home);
    return (
      <div style={Style}>
        {Home.map(Home => (
          <div  style={{
              ...Style.back,
              backgroundImage: `url(${Home.backgroundImageUrl})`
            }}>
            <Grid container xs={6} sm={3} md={3}>
              <Hidden smDown>
                <div style={Style.square}>
                  <div className="home_grid">
                    <Typography
                      variant="h3"
                      className="letter_spacing"
                      style={{ color: "black" }}

                    >
                      {Home.title}
                    </Typography>
                    <br />


                    <Typography
                      variant="body2"
                      className="home_grid_typo"
                      style={{
                        fontSize: "21px",
                        color:"black"

                      }}
                    >
                      {Home.content}
                    </Typography>
                    <br />
                    <Button variant="contained" style={Style.button}>


                
                      <a
                        src={Home.cta}
                        target="_blank"
                        rel="noopener noreferrer"
                      />

                     


                    </Button>
                  </div>
                </div>
              </Hidden>


              <Hidden mdUp>
                <div style={Style.square1}>
                  <div className="home_grid letter_spacing">
                    <Typography
                      variant="h3"
                      style={{
                        color: "black",
                        fontSize: "28px"
                      }}
                    >
                      {Home.title}
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      className="home_grid_typo"
                      style={{
                        fontSize: "14px",
                        color:"black"
                      }}
                    >
                      {Home.content}
                    </Typography>
                    <br />
                    <Button variant="contained" style={Style.button}>
                      {Home.buttonname} <a href={Home.cta} target="_blank" />


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
