//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./Work.sol";

contract Contractor{

    mapping(address=>uint) taken;

    event ContractFormed(address contractAddress);
    event SentToAccount(address _to, uint amount);

    function createNewWork() public{
        Work w = new Work(this);
        emit ContractFormed(address(w));
    }

    function sendToAccount(uint amount, address payable account) public {
        require(amount<=address(this).balance);
        account.transfer(amount);
        taken[account]+=amount;
        emit SentToAccount(account, amount);
    }
}