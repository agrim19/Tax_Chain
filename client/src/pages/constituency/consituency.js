import React from "react";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "../../components/navbar/navbar.js";
import Footer from "../../components/footer/footer.js";
import Header from "../../components/header/header.js";
import Fund from "../../components/fund/fund.js";
import GenerateContract from "../../components/generateContract/generateContract.js";
import TransferFunds from "../../components/transferFund/transferFund.js";
import Transactions from "../../components/transactions/transactions.js";

import "./constituency.css";

function Constituency() {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header heading="Malviya Nagar Constituency"></Header>
            <Container>
                <Row>
                    <Fund name="Alloted Funds" value="2392138"></Fund>
                    <Fund name="Surplus Funds" value="3202"></Fund>
                </Row>
                <Row>
                    <Transactions></Transactions>
                    <GenerateContract></GenerateContract>
                    <TransferFunds></TransferFunds>
                </Row>
            </Container>
            <div className="constituency-above-footer"></div>
            <Footer></Footer>
        </div>
    );
}

export default Constituency;
