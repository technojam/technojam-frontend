import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    content: {
        textAlign: 'center',
        height: 300,
        display: 'grid',
        alignItems: 'center',
        alignContent: 'center'
    },
    message: {
        fontFamily: 'Roboto',
        letterSpacing: '1px',
        fontSize: '22px',
        marginBottom: 19
    },
    button: {
        backgroundColor: '#e83b7c', 
        color: 'white',
        width: 210,
        margin: 'auto',
        '&:hover': {
            background: '#e580a5'
        },
        '&:focus': {
            outline: 'none'
        }
      }
  }));

const FormSubmitted = ({handleAdditional}) => {
const classes = useStyles();

return (
    <div className={classes.content}>
        <Typography className={classes.message}>
            Your event has been added!
        </Typography>
        <Button
            variant="contained"
            color="primary"
            onClick={handleAdditional}
            className={classes.button}
            type="button"
            >
            Add additional event
        </Button>
    </div>
)
}

FormSubmitted.propTypes = {
    handleAdditional: PropTypes.func
};

export default FormSubmitted;