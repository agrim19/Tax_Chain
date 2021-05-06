//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract GovtDetails is Ownable{
    address public govtAddress;
    mapping(string=>address) constituencyAddress;
    address emptyAddress;

    function getConstituencyAddress(string memory cName) public view returns(address){
        require(constituencyAddress[cName] != emptyAddress,"Constituency Name is invalid.");
        return constituencyAddress[cName];
    }

    function setConstituencyAddress(string memory cName, address _addr) public onlyOwner{
        constituencyAddress[cName] = _addr;
    }

    function setGovtAddress(address _addr) public onlyOwner{
        govtAddress = _addr;
    }
}