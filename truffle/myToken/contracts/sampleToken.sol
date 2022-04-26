pragma solidity ^0.8.13;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract sampleToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Udacity", "UDC") {
        _mint(msg.sender, initialSupply * (10**decimals()));
    }
}
