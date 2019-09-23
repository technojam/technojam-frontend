import React,{ Component } from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

class Alumni extends Component {

    constructor(props) {
        super(props);
        //Until backend add data here cards will be created automatically.
        this.state = {
            achie: [

                {
                    id: 1,
                    title: "Anubhav Raj Singh",
                    date: "Spetember 15, 2019",
                    Description: "",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Anubhav Raj Singh.jpg",
                },
                {
                    id: 1,
                    title: "Anubhav Raj Singh",
                    date: "Spetember 15, 2019",
                    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. .",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Anubhav Raj Singh.jpg",
                },
                {
                    id: 1,
                    title: "Anubhav Raj Singh",
                    date: "Spetember 15, 2019",
                    Description: "",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Anubhav Raj Singh.jpg",
                },
                {
                    id: 1,
                    title: "Anubhav Raj Singh",
                    date: "Spetember 15, 2019",
                    Description: "",
                    Image: "http://tj-static.s3-website.ap-south-1.amazonaws.com/Img/Anubhav Raj Singh.jpg",
                }
            ]
        }
    }

    render() {



        const achie = this.state.achie;

        console.log(achie);
        return (


            <Container maxWidth="lg">
                <div style={{ marginTop: "30px", marginBottom: "20px", maxWidth:"sm"}}>
                    <div >
                    <h2 style={{color:"#007FFF",textAlign:"center"}}>
                            Our Alumni's    
                            </h2>
                        <hr style={{
                            maxWidth: "120px",
                            borderWidth: "1px",
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
                                                    borderRadius: "40px",
                                                    
                                                }}>
                                                    
                                                    <CardMedia>

                                                        <img src={achie.Image} width="100%" height="auto" />

                                                    </CardMedia>

                                                    <CardContent>
                                                        <Typography variant="h5"  component="p" style={{fontFamily:"Linotte"}}>
                                                            {achie.title}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardContent style={{marginTop:"-20px"}}>
                                                        <Typography variant="body2" color="textSecondary" component="p" >
                                                            {achie.Description}
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