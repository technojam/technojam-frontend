import React,{ Component } from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid, Hidden } from "@material-ui/core";

class Alumni extends Component {

    constructor(props) {
        super(props);
        //Until backend add data here cards will be created automatically.
        this.state = {
            achie: [
                {
                    id: 1,
                    title: "Name",
                    Google: "#",
                    Linkedin: "#",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Placeholder.jpg",
                },
                {
                    id: 2,
                    title: "Name",
                    Google: "#",
                    Linkedin: "#",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Placeholder.jpg",
                },
                {
                    id: 3,
                    title: "Name",
                    Google: "#",
                    Linkedin: "#",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Placeholder.jpg",
                },
                {
                    id: 4,
                    title: "Name",
                    Google: "#",
                    Linkedin: "#",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Placeholder.jpg",
                },
                {
                    id: 5,
                    title: "Name",
                    Google: "#",
                    Linkedin: "#",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Placeholder.jpg",
                },
                {
                    id: 6,
                    title: "Name",
                    Google: "#",
                    Linkedin: "#",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Placeholder.jpg",
                },
                {
                    id: 7,
                    title: "Name",
                    Google: "#",
                    Linkedin: "#",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Placeholder.jpg",
                },
                {
                    id: 8,
                    title: "Name",
                    Google: "#",
                    Linkedin: "#",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Placeholder.jpg",
                }
               
            ]
        }
    }

    render() {



        const achie = this.state.achie;

        console.log(achie);
        return (


            <Container maxWidth="lg">
                <div style={{ marginTop: "80px", marginBottom: "20px", maxWidth:"sm"}}>
                    <div >
                    <h2 style={{color:"#007FFF",textAlign:"center"}}>
                            Our Alumni 
                    </h2>
                        <hr style={{
                            maxWidth: "120px",
                            borderWidth: "0.6px",
                            opacity: "1",
                            marginTop: "25px",
                            marginBottom: "25px",
                            borderColor: "#007FFF"
                        }}>

                        </hr>
                        <br></br>

                        <Grid container
                            spacing={3}
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                          >

                            {achie.map(achie => (

                                    <Grid item xs={6} sm={4} md={3}>
                                                <Card style={{ 
                                                    minWidth: "50px",
                                                    boxShadow: " 0 30px 35px 0 rgba(0, 0, 0, 0.2), 0 20px 30px 0 rgba(0, 0, 0, 0.19)",
                                                    borderRadius: "20px",
                                                    
                                                }}>
                                                    
                                                    <CardMedia>

                                                        <img src={achie.Image} width="100%" height="auto" />

                                                    </CardMedia>

                                                    <CardContent>
                                                       
                                                    
                                                        <Typography variant="h7"  component="p" style={{fontFamily:"Linotte"}}>
                                                            {achie.title}
                                                            <Hidden smDown>
                                                            &#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;
                                                            </Hidden>
                                                        <a className="btn btn-social-icon btn-google" href={achie.Google} target="_blank"><i className="fab fa-google fa-lg"style={{color:'#28aae1'}}></i></a>&#8194;
                                                        <a className="btn btn-social-icon btn-linkedin" href={achie.Linkedin} target="_blank"><i className="fab fa-linkedin fa-lg" style={{color:'#0077b5'}}></i></a>&#8194;       
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