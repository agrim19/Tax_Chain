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

    receive() external payable{
        emit SentToAccount(address(this), msg.value);
    }

    function sendToAccount(uint amount, address payable account) public {
        require(amount<=address(this).balance, "Insufficient funds");
        emit SentToAccount(account, amount);
        taken[account]+=amount;
        account.transfer(amount);
    }
}