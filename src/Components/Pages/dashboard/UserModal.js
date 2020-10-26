import React from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FormGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function UserModal({object, open, handleClose}) {
    const useStylesModal = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classesModal = useStylesModal();
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
    return (
       <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classesModal.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}>
				<Fade in={open}>
					<div className={classesModal.paper}>
						<h2 id="transition-modal-title">Edit User</h2>
						<div style={style.form}>
						<form autoComplete='on'>
							<Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <FormGroup>
                                        <label>Name</label>
                                        <input
                                            style={style.form.text}
                                            type='text'
                                            name='name'
                                            defaultValue={object.name}	
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
											name='date'	
											defaultValue={object.batch}
										/>
										<br></br>
									</FormGroup>
								</Grid>
								<Grid item xs={12} md={4}>
									<FormGroup>
										<label>Email</label>
										<input
    										style={style.form.text}
											type='email'
											name='timing'
											defaultValue={object.email}		
										/>
									</FormGroup>
									<br></br>
								</Grid>
							</Grid>
							<Grid container spacing={3}>
								<Grid item xs={12} md={4}>
									<FormGroup>
										<label>LinkedIn Profile</label>
										<input
											style={style.form.text}
											type='text'
											name='venue'
											defaultValue={object.linkedin}
										/>
									</FormGroup>
									<br></br>
								</Grid>
								<Grid item xs={12} md={4}>
									<FormGroup>
										<label>GitHub Profile</label>
										<input
											style={style.form.text}
											type='text'
											name='venue'
											defaultValue={object.github}
										/>
										<br></br>
									</FormGroup>
								</Grid>
								<Grid item xs={12} md={4}>
									<FormGroup>
										<label>Profile</label>
										<input
											style={style.form.text}
											type='text'
											name='teamSize'
											defaultValue={object.image}
										/>
									</FormGroup>
								</Grid>
								<Grid item xs={12} md={4}>
									<FormGroup>
										<label>Year</label>
										<input
											style={style.form.text}
											type='number'
                                            name='teamSize'
                                            defaultValue={object.year}
										/>
									</FormGroup>
									<br></br>
								</Grid>
							</Grid>					
							<br></br>
						    <br />
							<Typography className='align_center'>
								<Button
									type="submit"
									variant='contained'
									style={{ backgroundColor: '#f50057', color: 'white' }}>
										Submit
								</Button>
							</Typography>
						</form>
					</div>
				</div>
			</Fade>
		</Modal>												
    )
}

export default UserModal
