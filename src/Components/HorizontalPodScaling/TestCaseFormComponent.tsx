import React, { useRef } from "react";
import "./TestCaseFormStyle.scss";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TestCaseFormComponent = (props: any) => {

    const formRef = useRef(null);

    const formRequestHandler = (e: any) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const ipAddress = data.get('ipAddress')
        let response = {
            ipAddress: data.get('ipAddress'),
            minMemory: data.get('minMemory'),
            maxMemory: data.get('maxMemory'),
            minDelay: data.get('minDelay'),
            maxDelay: data.get('maxDelay'),
            noOfRequest: data.get('noOfRequest')
        }
        // console.log('response');
        // console.log(response);
        props.updateTextContext(response);
        // console.log("formRef");
        // console.log(formRef)
        // console.log(formRef.current)
    }

    return (
        <Form className="test-case-form-style" ref={formRef} onSubmit={formRequestHandler}>
            <Row style={{ alignItems: "center" }}>
                <Col sm={3}>
                    <Form.Group controlId="ipAddress">
                        <Form.Label>IP Address:</Form.Label>
                        <Form.Control name="ipAddress" type="text" placeholder="Provide IP Addess" defaultValue={"http://20.246.160.160/api"}/>
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <Form.Group controlId="minMemory">
                        <Form.Label>Min Memory</Form.Label>
                        <Form.Control name="minMemory" type="number" placeholder="Min Value" />
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <Form.Group controlId="maxMemory">
                        <Form.Label>Max Memory</Form.Label>
                        <Form.Control name="maxMemory" type="number" placeholder="Max Value" />
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <Form.Group controlId="minDelay">
                        <Form.Label>Min Delay</Form.Label>
                        <Form.Control name="minDelay" type="number" placeholder="Min Delay" />
                    </Form.Group>
                </Col>
            </Row>
            <Row style={{ alignItems: "center", marginTop: "15px" }}>
                <Col sm={3}>
                    <Form.Group controlId="maxDelay">
                        <Form.Label>Max Delay</Form.Label>
                        <Form.Control name="maxDelay" type="number" placeholder="Max Delay" />
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <Form.Group controlId="noOfRequest">
                        <Form.Label>No. Of Request</Form.Label>
                        <Form.Control name="noOfRequest" type="number" placeholder="No. of Request" />
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>

        </Form>
    );

}

export default TestCaseFormComponent;