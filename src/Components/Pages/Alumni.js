import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Hidden } from "@material-ui/core";
import '../style.css';
import { Color } from "../color";

/* FIXME: When the target will be decided, remove the rel attribute.
 * It has been added here for security reasons.
 * Reference: https://mathiasbynens.github.io/rel-noopener/
 */

class Alumni extends Component {
  constructor(props) {
    super(props);
    //Until backend add data here cards will be created automatically.
    this.state = {
      achie: [
        {
          id: 1,
          title: "Honey Sharma",
          Google: "honey.singhroi@gmail.com",
          Linkedin: "https://www.linkedin.com/in/honey-sharma-77198314b/",
          Image:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/muphoto+-+Honey+Sharma+(1).jpg"
        },
        {
          id: 2,
          title: "Shivam Mittal",
          Google: "shivammittal114@gmail.com",
          Linkedin: "https://www.linkedin.com/in/shivammittal121",
          Image:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/DSC_0004+-+Shivam+Mittal+(1).JPG"
        },
        {
          id: 3,
          title: "Rohith Kandi",
          Google: "kandirohith09@gmail.com",
          Linkedin: "https://www.linkedin.com/in/rohith-kandi-77a671108/",
          Image:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/IMG_3169+-+Kandi+Rohith+(1).jpg"
        },
        {
          id: 4,
          title: "Kaustubh",
          Google: "kausr2595@gmail.com",
          Linkedin: "https://www.linkedin.com/in/kausr2595/",
          Image:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/Kaustubh+Rai.JPG"
        },
        {
          id: 5,
          title: "Aditya Kumar ",
          Google: "Aditya12.official@gmail.com ",
          Linkedin: "#",
          Image:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/Aditya+kumar.jpg"
        },
        {
          id: 6,
          title: "Shivashish Ratnam",
          Google: "shivashishratnam@gmail.com",
          Linkedin: "https://www.linkedin.com/in/shivashish-ratnam/",
          Image:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/Shivashish+Ratnam.jpg"
        },
        {
          id: 7,
          title: "Satya Tripathi",
          Google: "satya06.official@gmail.com",
          Linkedin: "#",
          Image:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/Satya+Tripathi.jpg"
        },
        {
          id: 8,
          title: "shashank sharma",
          Google: "shashank@thelattice.in",
          Linkedin: "https://www.linkedin.com/in/storytellerr/",
          Image:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/shashank+sharma.jpg"
        },
        {
          id: 9,
          title: "Shaurya Chauhan",
          Google: "scshaurya@gmail.com",
          Linkedin: "https://www.linkedin.com/in/shauryachauhan/",
          Image:
            "https://tj-static.s3.ap-south-1.amazonaws.com/etc/shaurya+chauhan.jpg"
        }
      ]
    };
  }

  render() {
    const achie = this.state.achie;

    return (
      <Container maxWidth="lg">
        <div
          style={{
            marginTop: "80px",
            marginBottom: "20px",
            maxWidth: "sm"
          }}
        >
          <div>
            <br />{" "}
            <Typography
              variant="h3"
              style={{
                fontFamily: "Roboto",
                letterSpacing: "1px",
                lineHeight: "28px",
                wordSpacing: "5px",
                textAlign: "center",
                color: "#073fff"
              }}
            >
              Our Alumni{" "}
            </Typography>{" "}
            <hr
              style={{
                maxWidth: "120px",
                borderWidth: "0.6px",
                opacity: "1",
                marginTop: "25px",
                marginBottom: "25px",
                borderColor: "#007FFF"
              }}
            ></hr>{" "}
            <br />
            <Grid
              container
              spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
                            {achie.map(achie => (
                                <Grid item xs={6} sm={4} md={3}>
                                    <Card
                                        className="card--shadow view_card"
                                      
                                    >
                                        <CardMedia>
                                            <img
                                                src={achie.Image}
                                                width="100%"
                                                height="auto"
                                            />
                                        </CardMedia>

                                        <CardContent>
                                            <Typography
                                                variant="h7"
                                                component="p"
                                               
                                            >
                                                {" "}
                                                {achie.title}{" "}
                                              </Typography>
                                              <Typography style={{paddingTop:"5px"}}>
                                                <a
                                                    href={achie.Google}
                                                    target="_blank"
                                                >
                                                    {" "}
                                                    <i
                                                        class="fas fa-envelope-open-text fa-lg"
                                                        style={{
                                                            color: "#24292e"
                                                        }}
                                                    >
                                                        {" "}
                                                    </i>
                                                </a>{" "}
                                                &#8194;
                                                <a
                                                    href={achie.Linkedin}
                                                    target="_blank"
                                                >
                                                    {" "}
                                                    <i
                                                        className="fab fa-linkedin fa-lg"
                                                        style={{
                                                            color: Color.color_linkedIn
                                                        }}
                                                    >
                                                        {" "}
                                                    </i>
                                                </a>{" "}
                                                &#8194;
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
export default Alumni;
