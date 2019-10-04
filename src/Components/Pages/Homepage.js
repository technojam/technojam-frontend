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
    border: "4px solid yellow",
    padding: "20px",

    position: "absolute",
    marginTop: "180px",
    left: "46px",
    marginRight: "40px"
  },
  square1: {
    border: "4px solid yellow",
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
    color: "black",
    backgroundColor: "yellow"
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

            "Technojam is hosting 24 Hours hackathon. In Galgotias University Those who want to know more can register here.",
          title: "DEXTRIX 2.0",
          cta: "#",
          buttonname: "Register here",
          backgroundImageUrl:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/9511.png"
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
                      style={{ color: "white" }}

                    >
                      {Home.title}
                    </Typography>
                    <br />


                    <Typography
                      variant="body2"
                      className="home_grid_typo"
                      style={{
                        fontSize: "21px"

                      }}
                    >
                      {Home.content}
                    </Typography>
                    <br />
                    <Button variant="contained" style={Style.button}>


                      {Home.buttonname}{" "}
                      <a
                        src={Home.cta}
                        target="_blank"
                        rel="noopener noreferrer"
                      />

                      {Home.buttonname} <a src={Home.cta} target="_blank" />


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
                        color: "white",
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
                        fontSize: "14px"
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
