import React from "react";
import { Col, Button, Form, Card } from "react-bootstrap";

function TransferFunds() {
    return (
        <Col md={6}>
            <Card className="constituency-card  constituency-form-card">
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Contract ID" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="number" placeholder="Amount" />
                    </Form.Group>
                    <Button
                        className="constituency-form-button-green"
                        type="submit"
                    >
                        Transfer Funds
                    </Button>
                </Form>
            </Card>
        </Col>
    );
}

export default TransferFunds;
