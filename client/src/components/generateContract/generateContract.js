import React from "react";
import { Col, Button, Form, Card } from "react-bootstrap";
import "./generateContract.css";

function GenerateContract() {
    return (
        <>
            <Col md={2}></Col>
            <Col md={8}>
                <Card className="gc-card">
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Contractor Username"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Contract Title"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Contract Description"
                            />
                        </Form.Group>
                        <Button
                            className="constituency-form-button-green"
                            type="submit"
                        >
                            Generate Contract
                        </Button>
                    </Form>
                </Card>
            </Col>
            <Col md={2}></Col>
        </>
    );
}

export default GenerateContract;
