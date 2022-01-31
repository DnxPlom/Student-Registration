import React, { useState } from "react";
import { Row, Col, Divider, Card } from "antd";

import useStore from "../../store";

export default function Submit() {

    const state = useStore( state => state )
    const student = state.student;
    const parent = state.parent;
  
    const colPadding = {
        paddingLeft: "13px",
        paddingRight: "13px"
    }

    return (
        <>
            <Row className="row" style={{ margin: 20, padding: 20 }}>
                <Card title="Student Information" style={{ width: 300, margin: 10, }}>
                    { Object.keys( student ).map( (s, index) => {
                        return (  
                            <Col key={index} flex="1 0 25%" className="column">
                                <p>{s}: <strong><i>{ student[s] }</i></strong></p>
                            </Col>
                        )
                    } ) }
                </Card>

                <Card title="Parent Information" style={{ width: 300, margin: 10, }}>
                    { Object.keys( parent ).map( (p, index) => {
                        return (
                            <Col key={index} flex="1 0 25%" className="column">
                                <p>{p}: <strong><i>{ parent[p] }</i></strong></p>
                            </Col>
                        )
                    } ) }
                </Card>
                
            </Row>
        </>
    )
}