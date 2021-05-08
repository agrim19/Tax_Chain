//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Contractor.sol";

contract Work{
    address public owner;
    uint public budget;

    constructor(address _owner){
        owner = _owner;
    }

    modifier onlyOwner() {
        require(msg.sender == address(owner), "You are not the owner");
        _;
    }

    event TransferredToContractor(uint amount, uint remainingBalance);

    receive() external payable{
        budget+=msg.value;
    }

    function withdrawMoney(uint amount) public onlyOwner{
        require(amount<=address(this).balance, "Insufficient funds in contract");
        address payable ownerAddr = payable(msg.sender);
        ownerAddr.transfer(amount);
        emit TransferredToContractor(amount, address(this).balance);
    }
}