
import React, { Component } from "react";


//material ui component
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";

import Divider from "@material-ui/core/Divider";
import "../style.css";


class Achievements extends Component {
  constructor(props) {
    super(props);
    //Until backend add data here cards will be created automatically.
    this.state = {
      achie: [
        {
          id: 1,


          title: "Nasa Space Apps Challenge",
          by: "Darshan Baid",
          date: "Spetember 15, 2019",
          Description:
            "Technojam conducted 24 hours hackthon in delhi region at galgotia College almost 400 students took part. it is recognized by NASA",
          Image: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/space.jpg"

        },

        {
          id: 2,

          title: "First Ideathon",
          by: "Shwetank",
          date: "26 August, 2019",
          Description:
              "Conducted Ideathon in Galgotias University Induction Program. Alomst 300 students took part. Crowd was really enthusiastic",
          Image:
            " https://tj-static.s3.ap-south-1.amazonaws.com/etc/ideathon.JPG"

        },

        {
          id: 3,

          title: "First Gsocer",
          by: "Rahul Chuhan",
          date: "May 12, 2018",
          Description:

            "rahul chuhan Member of Team Teachnojam cleared Gsoc in 2019 in Galgotias University. He worked on R project",

          Image: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/rahul.jpg"

        },

        {
          id: 4,

          title: "Dextrix 1.0",
          by: "Team Technojam",
          date: "26 August, 2018",
          Description:

            "Conducted Dextrix1.0 Galgotias's University first ever hackthon in our university. Almost 200 students took part. ",
          Image: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/dextrix.jpg"


        }
      ]
    };
  }

  render() {
    const achie = this.state.achie;

    console.log(achie);
    return (
      <Container maxWidth="lg">


        <div className="view_container">
          <div>
            <Typography variant="h3" className="view_title">
              Our Achievements
            </Typography>
            <hr className="view_line" />
        <br />

            <Grid
              container
              spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {achie.map(achie => (
                <Grid item xs={12} sm={3} md={4}>

                  <Card className="card--shadow card_content_achieve">


                    <CardMedia>
                      <img src={achie.Image} width="100%" height="auto" />
                    </CardMedia>

                    <CardContent>

                      <Typography
                        variant="h5"
                        component="p"

                        className="letter_spacing"

                      >
                        {achie.title}
                      </Typography>
                    </CardContent>

                    <CardContent style={{ marginTop: "-20px" }}>


                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        style={{ letterSpacing: "0.9px" }}


                      >
                        {achie.Description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
          <br />
          <br />
        </div>
      </Container>
    );
  }
}

export default Achievements;
