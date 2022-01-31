import React, {useState} from 'react';
import { Form, Input, DatePicker, Select, Row, Col } from 'antd';
import useStore from '../../store';
import Avatar from './imageUpload';

const StudentInfo = () => {

    const state = useStore( state => state )
    const update = useStore(state => state.setStudentDetail )
    const errorCheck = state.errorCheck

    const {firstname, lastname, admissionNumber, dob} = state.student;

    const [fNameError, setFnameError] = useState(false)
    const [lNameError, setLnameError] = useState(false)
    const [admissionError, setAdmissionError] = useState(false)
    const [dobError, setDobError] = useState(false)

    const [value, setValue] = React.useState(new Date('2022-01-01T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
        value ? setDobError(false) : setDobError(true) 
        update( { dob: value} )
    };

    const validate = (setThis) => {
        setThis(false)
    }

    const smlabel = {
        fontSize: "12px",
        marginBottom: "10px"
    }

    const textField = { 
        width: "250px",
        marginBottom: "15px"
    }

    function checkDetails() {
        firstname ? setFnameError(false) : setFnameError(true);
        lastname ? setLnameError(false) : setLnameError(true);
        admissionNumber ? setAdmissionError(false) : setAdmissionError(true);
        dob ? setDobError(false) : setDobError(true)
        return (fNameError && lNameError && admissionError && dobError)
    }

    const onFileChange = event => {
        state.studentPhoto = event.target.files[0];
    };
    
    const onFileUpload = () => {
        document.getElementById("upload").click();
        const formData = new FormData();
        formData.append(
          "profilePhoto",
          state.studentPhoto,
          state.studentPhoto.name
        );
        console.log(state.studentPhoto);
      };

    React.useEffect(() => 
        errorCheck && checkDetails()
    , [errorCheck])

    const formItemLayout = {
        labelCol: {
            xs: { span: 24, },
            sm: { span: 6, },
        },
        wrapperCol: {
            xs: { span: 24, },
            sm: { span: 14, },
        },
    };

    const colPadding = {
        paddingLeft: "13px",
        paddingRight: "13px"
    }

    return (
    <Form {...formItemLayout} style={{maxWidth: 600}}>
        <Row className="row">
            <Col flex="1 0 25%" className="column" style={{padding: 30}}>
                <Avatar />
            </Col>
            <Col flex="1 0 25%" className="column" style={colPadding}>
                <Form.Item
                    label={ `${fNameError ? "*" : ""} First name:`}
                    validateStatus={ fNameError && "error"}
                    help={ fNameError && "First name required"}
                    style={{ display: 'inline' }}
                >
                    <Input
                        placeholder="firstname" 
                        id="error"
                        value={firstname}
                        onChange={(e) => {
                            e.target.value ? setFnameError(false) : setFnameError(true)
                            update( { firstname: e.target.value} ) }
                        }
                    />
                </Form.Item>

                <Form.Item
                    label={ `${lNameError ? "*" : ""} Last name:`}
                    validateStatus={ lNameError && "error"}
                    help={ lNameError && "Last name required"}
                    style={{ display: 'inline' }}
                >
                    <Input
                        placeholder="lastname" 
                        id="error"
                        value={lastname}
                        onChange={(e) => {
                            e.target.value ? setLnameError(false) : setLnameError(true)
                            update( { lastname: e.target.value} ) }
                        }
                    />
                </Form.Item>

            </Col>
        </Row>

        <Row className="row">
            <Col flex="1 0 25%" className="column" style={colPadding}>
                <Form.Item
                    label={ `${dobError ? "*" : ""} Date of birth:`}
                    validateStatus={ dobError && "error"}
                    help={ dobError && "Date of birth required"}
                    style={{
                        display: 'inline',
                        width: 'calc(50% - 12px)',
                    }}
                >
                    <DatePicker 
                        onChange={(e) => update( { dob: e.target.value} ) }
                    />
                </Form.Item>
            </Col>
            <Col flex="1 0 25%" className="column">
                <Form.Item
                        label={ `${admissionError ? "*" : ""} Adm number:`}
                        validateStatus={ admissionError && "error"}
                        help={ lNameError && "Last name required"}
                        style={{ display: 'inline' }}
                    >
                        <Input
                            placeholder="Admission number" 
                            id="error"
                            value={admissionNumber}
                            onChange={(e) => {
                                e.target.value ? setAdmissionError(false) : setAdmissionError(true)
                                update( { admissionNumber: e.target.value} ) }
                            }
                        />
                </Form.Item>
            </Col>
        </Row>
        

        
        

  </Form>
)};


export default StudentInfo;