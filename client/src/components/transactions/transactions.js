import React from "react";
import { Col, Card } from "react-bootstrap";
import FindByYearMonthForm from "../findByYearMonthForm/findByYearMonthForm.js";
import TransactionTable from "../transactionTable/transactionTable.js";

function Transactions() {
    return (
        <Col md={12}>
            <Card className="constituency-card constituency-transaction-card">
                <h4 className="constituency-transaction-heading ">
                    Transactions
                </h4>
                <FindByYearMonthForm></FindByYearMonthForm>
                <TransactionTable></TransactionTable>
            </Card>
        </Col>
    );
}

export default Transactions;