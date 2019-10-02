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
                    title: "Honey Sharma",
                    Google: "honey.singhroi@gmail.com",
                    Linkedin: "https://www.linkedin.com/in/honey-sharma-77198314b/",
                    Image: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/Honey+Sharma.jpg",
                },
             
              
                {
                    id: 2,
                    title: "Shivam Mittal",
                    Google: "shivammittal114@gmail.com",
                    Linkedin: "https://www.linkedin.com/in/shivammittal121",
                    Image: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/Shivam+Mittal.JPG",
                },
                {
                    id: 3,
                    title: "Rohith Kandi",
                    Google: "kandirohith09@gmail.com",
                    Linkedin: "https://www.linkedin.com/in/rohith-kandi-77a671108/",
                    Image: "https://tj-static.s3.ap-south-1.amazonaws.com/etc/Kandi+Rohith.jpg",
                },
               
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
                        <br></br>
                    <Typography variant="h3" style={{ fontFamily: "Roboto", letterSpacing: "1px", lineHeight: "28px", wordSpacing: "5px",textAlign:"center",color:"#073fff"}}>
                            Our Alumni 
                    </Typography>
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
                                                    minWidth: "30px",
                                                    boxShadow: " 0 20px 25px 0 rgba(0, 0, 0, 0.1), 0 10px 20px 0 rgba(0, 0, 0, 0.09)",
                                                    borderRadius: "20px",maxHeight:"500px"
                                                    
                                                }}>
                                                    
                                                    <CardMedia>

                                                        <img src={achie.Image} width="100%" height="auto" />

                                                    </CardMedia>

                                                    <CardContent>
                                                       
                                                    
                                                        <Typography variant="h7"  component="p" style={{fontFamily:"Linotte"}}>
                                                            {achie.title}
                                                            <Hidden smDown>
                                                            &#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;&#8194;
                                                            </Hidden>
                                                        <a  href={achie.Google} target="_blank"><i class="fas fa-envelope-open-text fa-lg"  style={{color:'#24292e'}}></i></a>&#8194;
                                                        <a  href={achie.Linkedin} target="_blank"><i className="fab fa-linkedin fa-lg" style={{color:'#0077b5'}}></i></a>&#8194;       
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