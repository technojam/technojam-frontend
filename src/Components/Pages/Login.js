import React from 'react';
import { Paper, TextField, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* @person who is assigned this page set your styles here. height 600 is just for layout.*/

const useStyles = makeStyles({
   mentorship: {
      marginTop: '100px'
   },
   paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px 30px 30px',
      opacity: '1',
      marginBottom: '2%'
   },
   textField: {
      marginTop: '15px'
   },
   logInButton: {
      textTransform: 'uppercase',
      marginTop: '15px',
      fontWeight: 'bold'
   }
});

const Login = () => {
   const classes = useStyles();
   return (
      <Container className={classes.mentorship} maxWidth='sm'>
         <Paper className={classes.paper}>
            <Typography variant='h5'>
               <br />
               Log In
            </Typography>
            <TextField
               label='Email Address'
               className={classes.textField}
               type='email'
               name='email'
               autoComplete='email'
               margin='normal'
               variant='outlined'
               fullWidth
            />
            <TextField
               label='Password'
               className={classes.textField}
               name='password'
               type='password'
               margin='normal'
               variant='outlined'
               fullWidth
            />
            <Button variant='contained' color='primary' fullWidth className={classes.logInButton} size='large' type='submit'>
               Log In
            </Button>
         </Paper>
      </Container>
   );
};
export default Login;
