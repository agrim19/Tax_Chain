//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./GovtDetails.sol";

contract GovtAllocate{
    mapping(address=>uint) public allocations;

    GovtDetails gov;

    event AllocationDone(string cName, uint prevAmount, uint newAmount);

    modifier OnlyGov() {
        address govtAddress = gov.govtAddress();
        require(msg.sender == govtAddress, "You are not allowed to do this action");
        _;
    }

    constructor(GovtDetails _gov){
        gov = _gov;
    }

    function allocateFunds(string memory constituency) public payable OnlyGov{
        address payable constituencyAddress = payable(gov.getConstituencyAddress(constituency));
        allocations[constituencyAddress] += msg.value;
        constituencyAddress.transfer(msg.value);
        emit AllocationDone(constituency, allocations[constituencyAddress]-msg.value, allocations[constituencyAddress]);
    }

    function getAllocation(string memory constituency) public view returns(uint){
        address constituencyAddress = gov.getConstituencyAddress(constituency);
        return allocations[constituencyAddress];
    }
}