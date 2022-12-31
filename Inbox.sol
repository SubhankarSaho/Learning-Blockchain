// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// pragma solidity >=0.4.24;

contract Inbox {
    string public message;

    constructor(string memory initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
