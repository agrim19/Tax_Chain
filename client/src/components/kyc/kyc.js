import React from "react";
import { Col, Button, Form, Card } from "react-bootstrap";

export default function Kyc() {
    return (
        <Col md={12}>
            <Card className="constituency-card  constituency-form-card">
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Enter Citizen Address"
                        />
                    </Form.Group>
                    <Button
                        className="constituency-form-button-green"
                        type="submit"
                    >
                        Confirm KYC
                    </Button>
                </Form>
            </Card>
        </Col>
    );
}
