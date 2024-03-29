import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import TestCaseFormComponent from "./TestCaseFormComponent";
import RequestTableViewComponent from "./RequestTableViewComponent";

const HorizontalPodScaling = () => {

    // return <h1>
    //     Wellcome to Horizontal Pod Scaling Test Dashboard
    // </h1>

    const [testContext, setTextContext] = useState(null);
    const [requestContext, setRequestContext] = useState<number>(0);


    const setupTestContextHandler = (response: any) => {
        console.log("inside setupTestContextHandler");
        console.log(response);
        setRequestContext(requestContext+1);
        setTextContext(response);
    }

    return <>
        <Card>
            <Card.Body>
                <Card.Title>Wellcome to Horizontal Pod Scaling Test Dashboard</Card.Title>
            </Card.Body>
        </Card>

        <TestCaseFormComponent updateTextContext={setupTestContextHandler}/>
        <RequestTableViewComponent testContext={testContext} requestContext={requestContext}/>

    </>


}

export default HorizontalPodScaling;