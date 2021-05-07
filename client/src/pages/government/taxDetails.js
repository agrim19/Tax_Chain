import React from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";


export default function TaxDetails() {

return (
    <div>
    <Container>
        <Row>
        <Col md={12}>
            <h2 style={{marginBottom:"2rem", fontSize:"3rem"}}>Government of India</h2>
        </Col>
        <Col sm={6} style={{borderRight:"2px solid gray"}}>
            <h4>Total Collection</h4>
            <h5 style={{color:"royalblue", fontSize:"2rem"}}>2301932 INR</h5>
        </Col>
        <Col sm={6}>
            <h4>Tax Used</h4>
            <h5 style={{color:"green", fontSize:"2rem"}}>2312 INR</h5>
        </Col>
        </Row>
        <Row>
        <Col md={12}>
            <h4 style={{margin:"2rem auto"}}>Tax collection of January 2021</h4>
            <div>
            <Form>
                <Row>
                <Col md={4}>
                    <Form.Group>
                    <Form.Label>Year</Form.Label>
                    <Form.Control as="select" custom>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                    </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group>
                    <Form.Label>Month</Form.Label>
                    <Form.Control as="select" custom>
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>March</option>
                        <option>April</option>
                    </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    {" "}
                    <Button type="submit">Find</Button>
                </Col>
                </Row>
            </Form>
            </div>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Date</th>
                <th>PAN No</th>
                <th>Amount in INR</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>2021-01-01</td>
                <td>21</td>
                <td>2113</td>
                </tr>
                <tr>
                <td>2021-01-01</td>
                <td>9</td>
                <td>9090</td>
                </tr>
                <tr>
                <td>2021-01-01</td>
                <td>9</td>
                <td>9090</td>
                </tr>
            </tbody>
            </Table>
        </Col>
        
        </Row>
    </Container>
    </div>
  );
}
