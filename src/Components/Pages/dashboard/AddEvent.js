import React from 'react';
import AddEventSectionOne from './AddEventSectionOne';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import GroupIcon from '@material-ui/icons/Group';
import NotesIcon from '@material-ui/icons/Notes';
import EventIcon from '@material-ui/icons/Event';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import AddEventSectionTwo from './AddEventSectionTwo';
import AddEventSectionThree from './AddEventSectionThree';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  content: {
    height: 538
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 660px)' : {
        width: 35,
        height: 35
      }
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, #e83b7c 25%,  #45c5ee 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, #e83b7c 25%, #45c5ee 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const icons = {
    1: <NotesIcon/>,
    2: <EventIcon/>,
    3: <GroupIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30rem',
    margin: 'auto',
    '@media (max-width: 660px)' : {
        width: '100%',
        '& .MuiStepper-root': {
            marginLeft: '-8%'
        }
      },
      '@media (max-width: 400px)' : {
        '& .MuiStepper-root': {
            marginLeft: '-17%'
        }
      },
    },
  content: {
    height: 300,
    display: 'grid',
    alignItems: 'center',
    alignContent: 'center',
    '& .MuiFormGroup-root': {
        marginBottom: 15
    }
  },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: '#e83b7c', 
    color: 'white',
    '&:hover': {
        background: '#e580a5'
    },
    '&:focus': {
        outline: 'none'
    }
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  error: {
      color: 'red',
      fontWeight: 'bold'
  }
}));

function getSteps() {
  return ['Event Details', 'Date and Location', 'Attendee Info & Pricing'];
}

const AddEvent = ({handleChange, handleEventType, handleIsPaid, details, formComplete}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    console.log('ACTIVE STEP', activeStep + 1);
    if (activeStep === 2) {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    if(activeStep < 3) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
      console.log('ACTIVE STEP', activeStep - 1);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {activeStep === 0 ? <AddEventSectionOne handleChange={handleChange} details={details} handleEventType={handleEventType}/>
        : activeStep === 1 ? <AddEventSectionTwo handleChange={handleChange}/> 
        : activeStep === 2 ? <AddEventSectionThree handleChange={handleChange} details={details} handleIsPaid={handleIsPaid}/>
        : null}
      </div>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
          <div>
            <div>
            {formComplete === false && <p className={classes.error}>Please make sure all required fields are filled in before submitting event!</p>}
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
                type={activeStep === 2 ? "submit" : "button"}
                >
                {activeStep >= steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
}

AddEvent.propTypes = {
    handleChange: PropTypes.func,
    handleEventType: PropTypes.func,
    handleIsPaid: PropTypes.func,
    details: PropTypes.object,
    formComplete: PropTypes.bool
};

export default AddEvent;