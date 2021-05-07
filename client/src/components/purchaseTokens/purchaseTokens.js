import React, { useContext } from "react";
import { Col, Button, Form, Card } from "react-bootstrap";
import Transact from "../../contracts/Transact.json";
import Web3JS from "../../services/context.js";

import "./purchaseTokens.css";

export default function PurchaseTokens(web3) {
    const things = useContext(Web3JS);

    console.log("print" + things);

    const handleSubmit = async (event) => {
        event.preventDefault();
        web3.web3.eth.getAccounts().then(async (accounts) => {
            let account = accounts[0];
            web3.web3.eth
                .sendTransaction({
                    from: account,
                    to: Transact.address,
                    value: 1,
                })
                .then(console.log)
                .catch(alert);
        });
    };
    return (
        <Col md={6}>
            <Card className="pt-card">
                <Card.Body>
                    <h4 className="pt-heading">Purchase Tokens</h4>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Enter amount"
                            />
                        </Form.Group>
                        <Button
                            className="pt-find-btn"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    );
}
