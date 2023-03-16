
// SPDX-License-Identifier: MIT

pragma solidity 0.8.17; 

contract Engine{
    
    function operator(uint input1, uint input2) pure public returns(uint) {
        uint result; 
        result = input1 & input2;
        return(result);
    }
}