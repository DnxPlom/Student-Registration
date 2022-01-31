import React, { useState } from "react";
import { Row, Col, Divider } from "antd";
import { Form, Input } from 'antd';

import useStore from "../../store";
import { validateEmail, validateNumber } from "../../utils";
import Avatar from "./imageUpload";


export default function ParentInfo() {

    const state = useStore( state => state )
    const update = state.setParentDetail
    const { firstname, secondname, address, email, phone } = state.parent
    const errorCheck = state.errorCheck

    const [firstnameError, setFnameError] = useState(false)
    const [secondnameError, setSecondNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [addressError, setAddressError] = useState(false)

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

    const colPadding = {
        paddingLeft: "13px",
        paddingRight: "13px"
    }

    return (
        <>
            <Row className="row" style={{maxWidth: 600}}>
                <Col flex="1 0 25%" className="column" style={{padding: 30}}>
                    <Avatar />
                </Col>
                <Col flex="1 0 25%" className="column" style={colPadding}>

                    <Form.Item
                        label={ `${firstnameError ? "*" : ""} First name:`}
                        validateStatus={ firstnameError && "error"}
                        help={ firstnameError && "First name required"}
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
                        label={ `${secondnameError ? "*" : ""} Second name:`}
                        validateStatus={ secondnameError && "error"}
                        help={ secondnameError && "Second name required"}
                        style={{ display: 'inline' }}
                    >
                        <Input
                            placeholder="second name" 
                            id="error"
                            value={secondname}
                            onChange={(e) => {
                                e.target.value ? setSecondNameError(false) : setSecondNameError(true)
                                update( { secondname: e.target.value} ) }
                            }
                        />
                    </Form.Item>

                </Col>
            </Row>

            <Row className="row" style={{maxWidth: 600}}>
                <Col flex="1 0 25%" className="column" style={colPadding}>

                    <Form.Item
                        label={ `${emailError ? "*" : ""} Email:`}
                        validateStatus={ emailError && "error"}
                        help={ emailError && "valid email required"}
                        style={{ display: 'inline' }}
                    >
                        <Input
                            placeholder="email" 
                            id="error"
                            value={email}
                            onBlur={(e) => handleEmail(e)}
                            onChange={(e) => {
                                e.target.value ? setEmailError(false) : setEmailError(true)
                                update( { email: e.target.value} ) }
                            }
                        />
                    </Form.Item>
                </Col>

                <Col flex="1 0 25%" className="column" style={colPadding}>

                    <Form.Item
                        label={ `${phoneError ? "*" : ""} Phone number:`}
                        validateStatus={ phoneError && "error"}
                        help={ phoneError && "valid phone number required"}
                        style={{ display: 'inline' }}
                    >
                        <Input
                            placeholder="Phone number" 
                            id="error"
                            value={phone}
                            onBlur={(e) => handlePhone(e)}
                            onChange={(e) => {
                                e.target.value ? setPhoneError(false) : setPhoneError(true)
                                update( { phone: e.target.value} ) }
                            }
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row className="row" style={{maxWidth: 600}}>
                <Col flex="1 0 25%" className="column" style={colPadding}>

                    <Form.Item
                        label={ `${addressError ? "*" : ""} Address:`}
                        validateStatus={ addressError && "error"}
                        help={ addressError && "address required"}
                        style={{ display: 'inline' }}
                    >
                        <Input
                            placeholder="home address" 
                            id="error"
                            value={address}
                            onChange={(e) => {
                                e.target.value ? setAddressError(false) : setAddressError(true)
                                update( { address: e.target.value} ) }
                            }
                        />
                    </Form.Item>
                </Col>
                <Col flex="1 0 25%" className="column" style={colPadding}></Col>
            </Row>
        </>
    )
}