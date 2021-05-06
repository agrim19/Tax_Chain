//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Work.sol";

contract Contractor{

    address public owner;

    // constructor(address _owner){
    //     owner = _owner;
    // }

    // modifier onlyOwner() {
    //     require(msg.sender == address(owner), "You are not the owner");
    //     _;
    // }

    // event TransferredToAccount(uint amount, uint remainingBalance);
    event ContractFormed(address contractAddress);

    function createNewWork() public{
        Work w = new Work(this);
        emit ContractFormed(address(w));
    }
    // function withdrawMoney(uint amount) public onlyOwner{
    //     require(amount<=address(this).balance, "Insufficient funds in contract");
    //     address payable ownerAddr = payable(msg.sender);
    //     ownerAddr.transfer(amount);
    //     emit TransferredToAccount(amount, address(this).balance);
    // }
}