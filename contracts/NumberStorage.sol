// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract NumberStorage {
    uint public storedNumber;

    function setNumber(uint _number) public {
        storedNumber = _number;
    }

    function getNumber() public view returns (uint) {
        return storedNumber;
    }
}
