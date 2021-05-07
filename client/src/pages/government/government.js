import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import NavigationBar from "../../components/navbar/navbar.js";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";
import Fund from "../../components/fund/fund.js";
import Transactions from "../../components/transactions/transactions.js";
import "./government.css";

export default function Government() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header heading="Government of India"></Header>
            <div className="Government mb-5">
                <Row>
                    <Fund name="Total Funds" value="2392138"></Fund>
                    <Fund name="Used Funds" value="3202"></Fund>
                </Row>
                <Row>
                    <Col sm={12} md={8}>
                        <Transactions heading="Transactions"></Transactions>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="Government-form">
                            <Card className="table-card mt-3">
                                <Card.Body>
                                    <h3 className="table-heading">
                                        Transfer Funds
                                    </h3>
                                    <div className="Government-form-wrapper">
                                        <div className="currentFund">
                                            <h1>25M</h1>
                                            <p>Total Funds</p>
                                        </div>
                                        <form action="">
                                            <input
                                                type="text"
                                                placeholder="Enter constituency ID"
                                            />
                                            <input
                                                type="number"
                                                placeholder="Amount"
                                            />
                                            <input
                                                type="text"
                                                id="projectName"
                                                placeholder="Description"
                                            />

                                            <button
                                                type="submit"
                                                className="shadow-md"
                                            >
                                                TRANSFER
                                            </button>
                                        </form>
                                    </div>
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
