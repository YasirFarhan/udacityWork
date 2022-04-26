pragma solidity >=0.5.1;

contract StarNotary {
    string public starName;
    address public starOwner;

    event starClaimed(address owner);
    event starNameChanged(string name);

    constructor() public {
        starName = "Awesome Udacity Star";
    }

    function claimStar() public {
        starOwner = msg.sender;
        emit starClaimed(msg.sender);
    }

    function changeStarName(string memory name) public {
        starName = name;
        emit starNameChanged(name);
    }
}
