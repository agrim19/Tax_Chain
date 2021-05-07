import React, { useState }  from 'react'
import NavigationBar from "../../components/navbar/navbar.js";
import {Container, Table, Row, Col, Button, Form, Modal, Card} from "react-bootstrap";
import './payTax.css'

export default function PayTax() {
    var description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc. Malesuada bibendum arcu vitae elementum curabitur vitae. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nisl vel pretium lectus quam id leo in vitae turpis. A lacus vestibulum sed arcu non odio euismod. Tincidunt vitae semper quis lectus nulla. Pulvinar elementum integer enim neque volutpat ac. Tortor at risus viverra adipiscing at. Placerat in egestas erat imperdiet sed. Turpis tincidunt id aliquet risus. Sed enim ut sem viverra. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.";
    
    return (
        <div className="">
            <NavigationBar></NavigationBar>
            <div className="black-small-bg">
                    <Container>
                        <Col
                            md={12}
                            id="contractor-heading"
                            className="below-navbar"
                        >
                            <h2 className="contractor">Pay Your Tax below </h2>
                        </Col>
                    </Container>
            </div>
            <div className="PayTax">
                <Row>
                    <Col sx={12} md={8} id="table">
                    <div className="payTax-table">
                        <Card className="table-card">
                            <Card.Body>
                                <h3 className="table-heading">
                                    Previous transactions   {" "}
                                </h3>
                                <Table
                                    striped
                                    bordered
                                    hover
                                    className="contracts-table"
                                >
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Contract ID</th>
                                            <th>Amount in INR</th>
                                            <th>Title</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Contract
                                            title="Road Repair Work near N-block, Malivya Nagar"
                                            description={description}
                                        ></Contract>
                                        <Contract title="Construction of MLAs new Office"></Contract>
                                        <Contract title="Repair Street Lights"></Contract>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>

                    <Col sx={12} md={4}>
                        <div className="payTax-form">
                            <Card className="table-card">
                                <Card.Body>
                                    <h2>Pay Tax</h2>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>PAN No</Form.Label>
                                                <Form.Control type="text" placeholder="PAN No" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control as="select" defaultValue="Choose...">
                                                <option>State</option>
                                                <option>Delhi</option>
                                                <option>Haryana</option>
                                                <option>Rajasthan</option>
                                            </Form.Control>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control />
                                            </Form.Group>
                                        </Form.Row>

                                        {/* <Form.Group id="formGridCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group> */}

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>  
                </Row>
            </div>
        </div>
    )
}


function Contract({ title, description }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <tr>
                <td>2021-01-01</td>
                <td>21</td>
                <td>2113</td>
                <td>
                    <a className="contract-link" onClick={handleShow}>
                        {title}
                    </a>
                </td>
            </tr>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="bold-txt">Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button
                        className="close-btn"
                        variant="success"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
