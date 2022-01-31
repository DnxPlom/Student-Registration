import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import useStore from "../../store";
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';


export default function StudentInfo() {

    const state = useStore( state => state )
    const update = useStore(state => state.setStudentDetail )
    const errorCheck = state.errorCheck

    const {firstname, lastname, admission, dob} = state.student;

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
        admission ? setAdmissionError(false) : setAdmissionError(true);
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

    return (

        <Box>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap"
                }}
            >
                <Box sx={{
                    padding: "20px",
                    flexGrow: 1,
                    height: "100%",
                    margin: "auto"
                }}>
                    <Box sx={{ p: 2, border: '1px dashed grey', height: "50%" }}>
                        <input id="upload" style={{ display: "none" }} type="file" value={""} onChange={onFileChange} />
                        <Button sx={{ fontSize: "10px", height: "100%", width: "100%" }}
                            type="file"
                            onClick={onFileUpload}
                        >
                        +<br />
                        Upload profile<br />
                        photo<br />
                        {state.studentPhoto && state.studentPhoto.name}
                        </Button>
                    </Box>

                    <Box sx={{
                        padding: "15px",
                        flexGrow: "1",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "5px"
                    }}>
                        {/* gender  */}
                        <label style={smlabel}>
                            <span style={{color: "red"}}>{ dobError && "* " }</span>
                            Date of Birth:
                        </label>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack spacing={3}>
                                <DesktopDatePicker
                                    error
                                    inputFormat="MM/dd/yyyy"
                                    value={state.student.dob}
                                    helperText={dobError && "Date of birth is required"}
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>

                    </Box>

                </Box>

                <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                    {/* first name */}
                    <label style={smlabel}>
                        <span style={{color: "red"}}>{ fNameError && "* " }</span>
                        First name:
                    </label>
                    <TextField sx={textField}
                        error={fNameError}
                        size="small"
                        defaultValue={state.student.firstname}
                        onChange={(e) => setFnameError(!e.target.value)}
                        helperText= { fNameError && "First name is required" }
                        onBlur={(e) => update( { firstname: e.target.value} )}
                    />
                    
                    {/* last name  */}
                    <label style={smlabel}>
                        <span style={{color: "red"}}>{ lNameError && "* " }</span>
                        Last name:
                    </label>
                    <TextField sx={textField}
                        error={lNameError}
                        size="small"
                        defaultValue={state.student.lastname}
                        helperText={ lNameError && "Last name is required" }
                        onChange={(e) => setLnameError(!e.target.value)}
                        onBlur={(e) => update( { lastname: e.target.value} )}
                    />
                    
                    <label style={smlabel}>
                        <span style={{color: "red"}}>{ admissionError && "* " }</span>
                        Admission Number:
                    </label>
                    <TextField
                        error={admissionError}
                        size="small" sx={textField}
                        defaultValue={state.student.admissionNumber}
                        helperText={ admissionError && "Admission number is required" }
                        onChange={(e) => setAdmissionError(!e.target.value)}
                        onBlur={(e) => update( { admissionNumber: e.target.value} )}
                    />
                        
                </Box>

            </Box>

        </Box>
    )
}
