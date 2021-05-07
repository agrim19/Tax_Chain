import React from "react";
import Contract from "../../components/contract/contract.js";

function TransactionRow({ date, contractId, amount }) {
    var description =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc. Malesuada bibendum arcu vitae elementum curabitur vitae. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nisl vel pretium lectus quam id leo in vitae turpis. A lacus vestibulum sed arcu non odio euismod. Tincidunt vitae semper quis lectus nulla. Pulvinar elementum integer enim neque volutpat ac. Tortor at risus viverra adipiscing at. Placerat in egestas erat imperdiet sed. Turpis tincidunt id aliquet risus. Sed enim ut sem viverra. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.";
    
    return (
        <Contract
            title="Road Repair Work near N-block, Malivya Nagar"
            description={description} 
            date={date}
            contractID={contractId}
            amount={amount}
        ></Contract>
    );
}

export default TransactionRow;
