import React from "react";

function TransactionRow({ date, contractId, amount }) {
    return (
        <tr>
            <td>{date}</td>
            <td>{contractId}</td>
            <td>{amount}</td>
        </tr>
    );
}

export default TransactionRow;
