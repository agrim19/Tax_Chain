import React from "react";
import { Col, Button, Form, Card } from "react-bootstrap";

function GenerateContract() {
    return (
        <Col md={6}>
            <Card className="constituency-card  constituency-form-card">
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
    );
}

export default GenerateContract;
