import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StudentInfo from './StudentInfo';
import useStore from '../../store';
import ParentInfo from './ParentInfo';
import SubmitForm from './SubmitForm';

const steps = ['Basic', 'Parent(s)', 'Submit'];

export default function HorizontalLinearStepper() {

  const state = useStore(state => state);
  const updateCheck = state.updateCheck;
  let {firstname, lastname, dob, admissionNumber} = state.student;

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const handleNext = () => {
    if (activeStep===0 && !handleStudentInfo()) return updateCheck(true)
    if (activeStep===1 && !handleParentInfo()) return updateCheck(true)
    console.log(state.student)
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStudentInfo = () => {
    let result = ( firstname && lastname && dob && admissionNumber) ? true : false
    return result;
  }

  const handleParentInfo = () => {
    let {firstname, secondname, email, phone, address} = state.parent;
    let result = ( firstname && secondname && email && phone && address) ? true : false
    return result;
  }

  return (
    <Box sx={{ width: '100%', maxWidth: "600px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>


          { activeStep + 1 === 1 && <StudentInfo /> }
          { activeStep + 1 === 2 && <ParentInfo /> }
          { activeStep + 1 === 3 && <SubmitForm /> }

          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, display: activeStep === 0 ? "none" : "" }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
