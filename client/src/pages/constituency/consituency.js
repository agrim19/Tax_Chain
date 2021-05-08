import React from "react";
import { Row, Col, Button, Form, Card, Container } from "react-bootstrap";
import NavigationBar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";
import Header from "../../components/header/header.js";
import Fund from "../../components/fund/fund.js";
import TransferFunds from "../../components/transferFund/transferFund.js";
import Transactions from "../../components/transactions/transactions.js";
import Kyc from "../../components/kyc/kyc.js";

import "./constituency.css";

function Constituency(web3) {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header heading="Malviya Nagar Constituency"></Header>
      <Container className="my-5">
        <Row>
          <Fund name="Alloted Funds" value="2392138"></Fund>
          <Fund name="Used Funds" value="3202"></Fund>
        </Row>
        <Row>
          <Transactions heading="Transactions in Your Constituency"></Transactions>
          <TransferFunds></TransferFunds>
          <Kyc web3={web3}></Kyc>
        </Row>
      </Container>

      {/* form below */}

      <div>
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
              <Button type="submit" className="constituency-find-btn">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      {/* form above */}

      <div className="constituency-above-footer"></div>
      <Footer></Footer>
    </div>
  );
}

export default Constituency;
