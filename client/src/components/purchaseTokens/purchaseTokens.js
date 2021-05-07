import React from "react";
import { Col, Button, Form, Card } from "react-bootstrap";

import "./purchaseTokens.css";

export default function PurchaseTokens() {
    return (
        <Col md={6}>
            <Card className="pt-card">
                <Card.Body>
                    <h4 className="pt-heading">Purchase Tokens</h4>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Enter amount in INR"
                            />
                        </Form.Group>
                        <Button className="pt-find-btn" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    );
}
