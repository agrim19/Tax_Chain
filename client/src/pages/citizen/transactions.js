import React from "react";
import { Table } from "react-bootstrap";

export default function Transactions() {
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Time</th>
            <th>Mode</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            </tr>
        </tbody>
      </Table>
    </div>
  );
}
