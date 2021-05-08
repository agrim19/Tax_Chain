import React, { useState } from "react";
import { Col, Button, Form, Card } from "react-bootstrap";

function AddConstituency() {
    return (
        <Col md={12}>
            <Card className="constituency-card  constituency-form-card">
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Constituency Name"
                            // onChange={(event) => {
                            //     setToAccount(event.target.value);
                            // }}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Constituency Address"
                            // onChange={(event) => {
                            //     setToValue(event.target.value);
                            // }}
                        />
                    </Form.Group>
                    <Button
                        className="constituency-form-button-green"
                        type="submit"
                        // onClick={handleSubmit}
                    >
                        Add Constituency
                    </Button>
                </Form>
            </Card>
        </Col>
    );
}

export default AddConstituency;
