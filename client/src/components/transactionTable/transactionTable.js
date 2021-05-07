import React from "react";
import { Table } from "react-bootstrap";
import TransactionRow from "../transactionRow/trasactionRow.js";

function TransactionTable(props) {
    return (
        <>
            <h5 className="constituency-transaction-h2">
                {" "}
                Transactions for January 2021
            </h5>
            <Table
                striped
                bordered
                hover
                className="constituency-transaction-table"
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
                    <TransactionRow
                        date="2021-01-01"
                        contractId="23"
                        amount="21392"
                    ></TransactionRow>
                    <TransactionRow
                        date="2021-01-01"
                        contractId="213"
                        amount="23113"
                    ></TransactionRow>
                    <TransactionRow
                        date="2021-01-01"
                        contractId="221"
                        amount="213"
                    ></TransactionRow>
                </tbody>
            </Table>
        </>
    );
}

export default TransactionTable;
