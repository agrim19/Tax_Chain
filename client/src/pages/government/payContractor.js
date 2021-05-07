import React from "react";
import "./payContractor.css";
import { Table, Col, Row } from "react-bootstrap";

export default function PayContractor() {

    let headingStyle = {
        margin: "2rem auto",
        fontSize:"3rem"
    }
  return (
    <div className="">
        <div className="container PayContractor">
        
            <Row>
            <Col sx={12} md={8}>
                <h1 style={headingStyle}>Transactions</h1>
                <div className="PayContractor-table">
                <Table striped bordered hover variant="warning">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    </tbody>
                </Table>
                </div>
            </Col>

            <Col sx={12} md={4}>
                <h1 style={headingStyle}>Allot Taxes</h1>
                <div className="form-container-pay-contractor">
                <div className="currentFund">
                    <h2>Contract</h2>
                    <h1>25M</h1>
                    <p>Total Funds</p>
                </div>
                <form action="">
                    <input type="text" placeholder="Enter constituency ID" />
                    <input type="number" placeholder="Amount" />
                    <input
                    type="text"
                    id="projectName"
                    placeholder="Description"
                    />

                    <button type="submit">TRANSFER</button>
                </form>
                </div>
            </Col>
            </Row>

        </div>
    </div>
  );
}
