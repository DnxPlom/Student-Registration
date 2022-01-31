import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import useStore from "../../store";

import { validateEmail, validateNumber } from "../../utils";


export default function ParentInfo() {

    const state = useStore( state => state )
    const update = useStore(state => state.setParentDetail )
    const errorCheck = state.errorCheck

    const {firstname, secondname, phone, email, address} = state.parent;

    const [firstnameError, setFnameError] = useState(false)
    const [secondnameError, setSecondNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [addressError, setAddressError] = useState(false)

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
        secondname ? setSecondNameError(false) : setSecondNameError(true);
        phone ? setPhoneError(false) : setPhoneError(true);
        email ? setEmailError(false) : setEmailError(true)
        address ? setAddressError(false) : setAddressError(true)
        return (firstname && secondname && email && phone && address)
    }

    function handlePhone(e) {
        let num = e.target.value
        if (validateNumber(num)) {
            update( { phone: num} )
        } else {
            setPhoneError(true)
        }
    }

    function handleEmail(e) {
        let email = e.target.value
        if (validateEmail(email)) {
            update( { email } )
        } else {
            setEmailError(true)
        }
    }

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
                        <Button sx={{ fontSize: "10px", height: "100%", width: "100%" }}>
                        +<br />
                        Upload passport<br />
                        photo
                        </Button>
                    </Box>

                    <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                    
                     {/* email  */}
                     <label style={smlabel}>
                            <span style={{color: "red"}}>{ emailError && "* " }</span>
                            E-mail address:
                        </label>
                        <TextField sx={textField}
                            error={emailError && true}
                            size="small"
                            defaultValue={email}
                            onChange={(e) => setEmailError(!e.target.value)}
                            helperText= { emailError && "Valid email address is required" }
                            onBlur={(e) => handleEmail(e) }
                        />
                    
                        {/* Address */}
                        <label style={smlabel}>
                            <span style={{color: "red"}}>{ firstnameError && "* " }</span>
                            Home Address:
                        </label>
                        <TextField sx={textField}
                            error={addressError && true}
                            size="small"
                            defaultValue={address}
                            onChange={(e) => setAddressError(!e.target.value)}
                            helperText= { addressError && "Home address is required" }
                            onBlur={(e) => update( { address: e.target.value} )}
                        />

                    </Box>

                </Box>

                <Box sx={{ padding: "15px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                    {/* first name */}
                    <label style={smlabel}>
                        <span style={{color: "red"}}>{ firstnameError && "* " }</span>
                        First name:
                    </label>
                    <TextField sx={textField}
                        error={firstnameError && true}
                        size="small"
                        defaultValue={firstname}
                        onChange={(e) => setFnameError(!e.target.value)}
                        helperText= { firstnameError && "First name is required" }
                        onBlur={(e) => update( { firstname: e.target.value} )}
                    />
                    
                    {/* second name  */}
                    <label style={smlabel}>
                        <span style={{color: "red"}}>{ secondnameError && "* " }</span>
                        Second name:
                    </label>
                    <TextField sx={textField}
                        error={secondnameError && true}
                        size="small"
                        defaultValue={secondname}
                        helperText={ secondnameError && "Second name is required" }
                        onChange={(e) => setSecondNameError(!e.target.value)}
                        onBlur={(e) => update( { secondname: e.target.value} )}
                    />
                    
                    <label style={smlabel}>
                        <span style={{color: "red"}}>{ phoneError && "* " }</span>
                        Phone Number:
                    </label>
                    <TextField sx={textField}
                        error={phoneError && true}
                        size="small"
                        defaultValue={phone}
                        helperText={ phoneError && "Valid phone number is required" }
                        onChange={(e) => setPhoneError(!e.target.value)}
                        onBlur={(e) => handlePhone(e) }
                    />
                        
                </Box>

            </Box>

        </Box>
    )
}
