import React, { Component, Link, useState, useContext } from "react";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//material ui component
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FormGroup, Button, Container } from '@material-ui/core';
import AuthContext from './../../../context/auth/authContext'
import CreateIcon from '@material-ui/icons/Create';
import {MEMBER} from '../../../util/constants'
import {
   Paper, Table, TableRow, TableBody, TableCell
} from "@material-ui/core";
import Hidden from '@material-ui/core/Hidden';


const style = {
  
    form: {
		padding: '20px',
		width:"100%",
		marginLeft: "auto",
		marginRight: "auto",
        
        text: {
			appearance: 'none',
			width: '100%',

			height: '35px',

			borderRadius: '5px',
			outline: 'none',
			border: 'none',
			background: '#e8ebed',
			color: '#576366',
			fontSize: '14px'
        },
        
    },
    
    circle :{
        width: 180,
        borderRadius: 90,
        boxShadow: '1px 4px 6px  rgba(0, 0, 0, 0.5)',
        padding:"10px",
        marginRight:"12px",
        transform: 'translate(+50%, +65%)'
     },
     circle1:{
        width: 110,
        borderRadius: 55,
        boxShadow: '1px 4px 6px  rgba(0, 0, 0, 0.5)',
        padding:"4px",
        transform: 'translate(+15%, +65%)'
        
     },
    card: {
       back:{
        backgroundColor:"#1a2a6c",
        height:"10%",
       
        },
    
    borderRadius:"20px"
    }
};

const Profile = () => {
	const authContext = useContext(AuthContext)
	const { user } = authContext;
	

	const [details, setDetails] = useState({
		Eventname: '',
		Date: '',
		Venue: '',
		Time: '',
		Shortdescription: '',
		EventType: '',
		TeamSize:'',
			
	});

	const handleChange = e => {
		setDetails({
			...details,
			[e.target.name]: e.target.value
		});
	};

	return (
        <Container>
		<section>
			<div>
               {MEMBER.map(profile =>(
                   <Card style={style.card}>
                       <Hidden smDown>
                       <CardContent style={style.card.back}>
                           <Typography >
                             <img src={profile.image} alt={profile.name} style={style.circle} />
                             <Typography variant="h5" style={{textAlign:"end",color:"#fafafa",fontFamily:"Roboto",fontSize:"20pxpx"}} >
                               {profile.name}
                             </Typography>
                           </Typography>
                       </CardContent>
                       </Hidden>

                       <Hidden smUp>
                       <CardContent style={style.card.back}>
                           <Typography >
                             <img src={profile.image} alt={profile.name} style={style.circle1} />
                            
                           </Typography>
                       </CardContent>
                       </Hidden>
 
                        
                        <CardContent style={{padding:"75px"}}>
                      
                        <Grid container>
                           
                            <Grid item lg={10} md={12}>
                                <Typography style={{textAlign:"end"}}> <CreateIcon /></Typography>
                           
                                <Paper>
                                    <Table >
                                        <TableBody >
                                                <TableRow>
                                                    <TableCell component="th" scope="row">Name</TableCell>
                                                    <TableCell align="right">{profile.name}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">Email</TableCell>
                                                    <TableCell align="right">{profile.email}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">Password</TableCell>
                                                    <TableCell align="right">{profile.password}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">Admission No.</TableCell>
                                                    <TableCell align="right">{profile.admission}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">Role</TableCell>
                                                    <TableCell align="right">{profile.role}</TableCell>
                                                </TableRow>
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </Grid>
                        </Grid>
                   

                        </CardContent>
                   </Card>
               ))}
            </div>
		</section>
        </Container>

	)
};

export default Profile;
