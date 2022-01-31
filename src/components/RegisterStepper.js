import React from 'react';
import { Steps, Button, message, Space } from 'antd';
import ParentInfo from './registration/ParentInfo';
import Submit from './registration/Submit';
import useStore from '../store';

import StudentInfo from "./registration/studentInfo";
import validateEmail from "../utils"

const { Step } = Steps;

const steps = [
  {
    title: 'Student',
    content: (<StudentInfo />),
  },
  {
    title: 'Parent',
    content: (<ParentInfo />),
  },
  {
    title: 'Submit',
    content: (<Submit />),
  },
];

const RegisterStepper = () => {
    const state = useStore(state => state)
    let {firstname, lastname, dob, admissionNumber} = state.student;
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        state.updateCheck(true)
        if (current===0 && !handleStudentInfo()) return
        else if (current===1 && !handleParentInfo()) return
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const handleStudentInfo = () => {
        let result = ( firstname && lastname && admissionNumber) ? true : false
        if(result) console.log(state.student)
        return result;
    }

    const handleParentInfo = () => {
        let {firstname, secondname, email, phone, address} = state.parent;
        let result = ( firstname && secondname && email && phone && address) ? true : false
        if (result) console.log(state.parent)
        return result;
    }

  return (
    <>
      <Steps current={current} style={{ maxWidth: 600, margin: 20, padding: 20 }}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
      <Space direction="horizontal" style={{width: '100%', padding:20, justifyContent: "space-between"}}>
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Submit
          </Button>
        )}

        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
    </Space>
        
      </div>
    </>
  );
};

export default RegisterStepper;