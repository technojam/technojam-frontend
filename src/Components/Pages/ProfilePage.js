import React from "react";
import {
    Container,
    Typography,
    Grid, Paper, Table, TableRow, TableBody, TableCell
} from "@material-ui/core";
import {ALUMNI, TEAM_MEMBERS} from '../../util/constants';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import { ThemeContext } from "../../util/themeContext";

const style = {
    container: {
        marginTop: "62px"
    },
    img: {
        maxWidth: "180px",
        minWidth: "100px",
        width: "100%",
        borderRadius: "50%",
        marginTop: "10px",
    },
    nameDark:{
        color:"#b3b3b3"
    }
};

const handleValue=(title,value)=>{
    if(title==="Batch"||title==="Position"){
        return <TableRow>
        <TableCell component="th" scope="row">{title}</TableCell>
        <TableCell align="right">{value}</TableCell>
        </TableRow>
    }
}

const handleIcons=(title,value)=>{
    
    if (title=="Github"){ 
        return <a href= {value} target="blank"> <GitHubIcon/> </a>       
    }
    else if(title=="Linkedin"){
        return <a href={value} target="blank"> <LinkedInIcon/> </a>
    }
}

export default class ProfilePage extends React.Component {
    static contextType = ThemeContext
    constructor(props) {
        super(props);
        this.state = {
            currentProfile: undefined
        }
    }

    componentDidMount() {
        const profileID = this.props.match.params.id;
        let currentProfile = TEAM_MEMBERS.filter(member => member.id.toString() === profileID)[0];
        if (!currentProfile) {
            currentProfile = ALUMNI.filter(member => member.id.toString() === profileID)[0];
        }
        this.setState({currentProfile: currentProfile});
        this.darkmodeActive = this.context.theme === 'dark' ? true:false;
    }

    render() {
        if (!this.state.currentProfile) {
            return (<div>No Data Found...</div>);
        } else {
            return (
                <div style={style.container}>
                    <Container fixed>
                        <Grid  justify="space-between">
                            <Grid item lg={2} md={4} xs={4}>
                                <img src={this.state.currentProfile.Image} style={style.img}/>
                                
                            </Grid>
                            <Grid item lg={10} md={8} xs={6} style={{marginTop: "4%"}}>
                                <Typography variant="h2" style={this.darkmodeActive ? style.nameDark : style.name}>
                                    {this.state.currentProfile.Name}
                                </Typography>
                                <Typography style={style.name}>
                                    <a href={"mailto:"+this.state.currentProfile.email}> <MailIcon/> </a>
                                    {this.state.currentProfile.details.map((detail, index) => (
                                            handleIcons(detail.title,detail.value)
                                    ))}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid style={{marginTop: "16px"}}>
                            
                            <Grid item lg={10} md={12}>
                               
                                    <Table style={{tableLayout: 'fixed'}}>
                                        <TableBody>
                                            {this.state.currentProfile.details.map((detail, index) => (
                                                    handleValue(detail.title,detail.value)
                                            ))}
                                        </TableBody>
                                    </Table>
                                
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            );
        }
    }
}
