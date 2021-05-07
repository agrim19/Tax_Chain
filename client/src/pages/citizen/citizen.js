import React, { useState } from "react";
import Contract from "../../components/contract/contract.js";
import Footer from "../../components/footer/footer.js";
import NavigationBar from "../../components/navbar/navbar.js";
import Header from "../../components/header/header.js";
import { Row, Col, Button, Form, Card, Container } from "react-bootstrap";
import Transactions from "../../components/transactions/transactions.js";
import Fund from "../../components/fund/fund.js";
import "./citizen.css";

function PurchaseTokens() {
    return (
        <Col md={6}>
            <Card className="fund-card">
                <Card.Body>
                    <h4 className="fund-heading">Purchase Tokens</h4>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="Enter amount in INR"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    );
}

function CurrentTokens({ name, value }) {
    return (
        <Col md={6}>
            <Card className="fund-card">
                <Card.Body>
                    <h4 className="fund-heading">{name}</h4>
                    <h5 className="fund-text">{value} INR</h5>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default function Citizen() {
    var description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc. Malesuada bibendum arcu vitae elementum curabitur vitae. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nisl vel pretium lectus quam id leo in vitae turpis. A lacus vestibulum sed arcu non odio euismod. Tincidunt vitae semper quis lectus nulla. Pulvinar elementum integer enim neque volutpat ac. Tortor at risus viverra adipiscing at. Placerat in egestas erat imperdiet sed. Turpis tincidunt id aliquet risus. Sed enim ut sem viverra. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.";

    return (
        <div className="">
            <NavigationBar></NavigationBar>
            <Header heading="Citizen: Rohan Singh"></Header>
            <Container>
                <Row>
                    <PurchaseTokens></PurchaseTokens>
                    <CurrentTokens
                        name="Current Tokens"
                        value="2392138"
                    ></CurrentTokens>
                </Row>
            </Container>
            <div className="PayTax my-5">
                <Row>
                    <Col sx={12} md={8} id="table">
                        <div className="payTax-table">
                            <Transactions></Transactions>
                        </div>
                    </Col>

                    <Col sx={12} md={4}>
                        <div className="payTax-form">
                            <Card className="table-card">
                                <Card.Body>
                                    <h2>Pay Tax</h2>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId="formGridEmail"
                                            >
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter email"
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId="formGridPassword"
                                            >
                                                <Form.Label>PAN No</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="PAN No"
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group
                                                as={Col}
                                                controlId="formGridCity"
                                            >
                                                <Form.Label>City</Form.Label>
                                                <Form.Control />
                                            </Form.Group>

                                            <Form.Group
                                                as={Col}
                                                controlId="formGridState"
                                            >
                                                <Form.Label>State</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    defaultValue="Choose..."
                                                >
                                                    <option>State</option>
                                                    <option>Delhi</option>
                                                    <option>Haryana</option>
                                                    <option>Rajasthan</option>
                                                </Form.Control>
                                            </Form.Group>

                                            <Form.Group
                                                as={Col}
                                                controlId="formGridZip"
                                            >
                                                <Form.Label>Zip</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Form.Row>
                                        <Button
                                            type="submit"
                                            className="constituency-find-btn"
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
}
