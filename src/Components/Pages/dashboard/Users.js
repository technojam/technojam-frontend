
import React, { useState, useContext } from 'react';

//material ui component
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { FormGroup, Button } from '@material-ui/core';
import AuthContext from './../../../context/auth/authContext';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import {backendUrl} from "../../../context/types"
const style = {
	marginTop: '112px',
	form: {
		padding: '20px',
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		text: {
			appearance: 'none',
			width: '100%',
			padding: '5px',
			height: '35px',
			borderRadius: '5px',
			outline: 'none',
			border: 'none',
			background: '#e8ebed',
			color: '#576366',
			fontSize: '14px'
		}
	}
};

const Users = () => {
	const authContext = useContext(AuthContext);
	const { user } = authContext;
	

	const [details, setDetails] = useState({
		name: '',
		email: '',
		linkedlnUrl:'',
		githubUrl:'',
		batch: '',
		imageUrl: ''
	});

	const handleChange = e => {
		setDetails({
			...details,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('haha');
		fetch(backendUrl+"/api/team/add",{
			method:'post',
			headers:{
				"Content-Type":"application/json",
				"x-auth-token":localStorage.getItem('token')
			},
			body:JSON.stringify(details)
		}).then(response=>{
			if(response.ok){
				alert("User added successfully")
			}else{
				var error=new Error('Error'+response.status+':'+response.statusText);
				error.response=response;
				throw error;
			}
		})
		.catch(err=>{
            console.log(err)
		})

	}	

	return (
		<section>
			<div id='create-new-event'>
				<ExpansionPanel className='card--shadow'>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography
							style={{
								fontFamily: 'Roboto',
								letterSpacing: '1px',
								fontSize: '22px'
							}}
						>
							<b>Add Users</b>
						</Typography>
					</ExpansionPanelSummary>
					<Divider></Divider>
					<ExpansionPanelDetails>
						<div style={style.form}>
							<form autoComplete='on' onSubmit={handleSubmit}>
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Name</label>

											<input
												style={style.form.text}
												type='text'
												name='name'
												onChange={handleChange}
												required
											/>
										</FormGroup>
										<br></br>
									</Grid>			
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Email</label>

											<input
												style={style.form.text}
												type='email'
												name='email'
												onChange={handleChange}
												required
											/>
										</FormGroup>
										<br></br>
									</Grid>			
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Linkedin Url</label>

											<input
												style={style.form.text}
												type='url'
												name='linkedlnUrl'
												onChange={handleChange}
												required
											/>
										</FormGroup>
										<br></br>
									</Grid>			
								</Grid>
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Github Url</label>

											<input
												style={style.form.text}
												type='url'
												name='githubUrl'
												onChange={handleChange}
												required
											/>
										</FormGroup>
										<br></br>
									</Grid>			
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Batch</label>

											<input
												style={style.form.text}
												type='text'
												name='batch'
												onChange={handleChange}
												required
											/>
										</FormGroup>
										<br></br>
									</Grid>			
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Image Url</label>

											<input
												style={style.form.text}
												type='url'
												name='imageUrl'
												onChange={handleChange}
												required
											/>
										</FormGroup>
										<br></br>
									</Grid>			
								</Grid>
								<Typography className='align_center'>
									<Button
										type="submit"
										variant='contained'
										style={{ backgroundColor: '#f50057', color: 'white' }}
									>
										Submit
									</Button>
								</Typography>
							</form>
						</div>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		</section>
	);
};

export default Users;
