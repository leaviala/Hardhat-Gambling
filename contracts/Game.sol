
// SPDX-License-Identifier: MIT

pragma solidity 0.8.17; 

import "./Engine.sol";
contract Game is Engine{

    uint randNonce = 0;
    uint result;
    function random(uint _modulus) internal returns(uint){
    randNonce++; 
    return uint(keccak256(abi.encodePacked(block.timestamp, msg.sender,randNonce))) % _modulus;
    }

    function gameResults(uint userInput) public returns(uint input1, uint input2, bool output){
    input1 = random(100);
    input2 = random(100);
    result = operator(input1, input2);
    if (result == userInput){
                output = true;
            } else {
                output = false;
            }  
    }

    
}
