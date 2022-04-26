//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LemonadeStand {
    address owner;
    uint256 skuCount;

    constructor() {
        owner = msg.sender;
        skuCount = 0;
    }

    enum State {
        ForSale,
        Sold,
        Shipped
    }

    struct Item {
        string name;
        uint256 sku;
        uint256 price;
        State state;
        address seller;
        address buyer;
    }
    // Define mapping items that maaps the sSKU to an item
    mapping(uint256 => Item) items;

    event ForSale(uint256 skuCouont);
    event Sold(uint256 sku);
    event Shipped(uint256 sku);

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier verifyCaller(address _address) {
        require(msg.sender == _address);
        _;
    }
    modifier paidEnough(uint256 _price) {
        require(msg.value >= _price);
        _;
    }

    modifier forSale(uint256 _sku) {
        require(items[_sku].state == State.ForSale);
        _;
    }

    modifier sold(uint256 _sku) {
        require(items[_sku].state == State.Sold);
        _;
    }

    modifier checkValueAndIssueChange(uint256 _sku) {
        _;
        uint256 _price = items[_sku].price;
        uint256 amountToRefund = msg.value - _price;
        payable(items[_sku].buyer).transfer(amountToRefund);
    }

    function addItem(string memory _name, uint256 _price) public onlyOwner {
        skuCount = skuCount + 1;
        emit ForSale(skuCount);
        items[skuCount] = Item({
            name: _name,
            sku: skuCount,
            price: _price,
            state: State.ForSale,
            seller: msg.sender,
            buyer: address(0)
        });
    }

    function buyItem(uint256 sku)
        public
        payable
        forSale(sku)
        paidEnough(items[sku].price)
        checkValueAndIssueChange(sku)
    {
        address buyer = msg.sender;
        uint256 price = items[sku].price;
        items[sku].buyer = buyer;
        items[sku].state = State.Sold;
        payable(items[sku].seller).transfer(price);
        emit Sold(sku);
    }

    function fetchItem(uint256 _sku)
        public
        view
        returns (
            string memory name,
            uint256 sku,
            uint256 price,
            string memory stateIs,
            address seller,
            address buyer
        )
    {
        uint256 state;
        name = items[_sku].name;
        sku = items[_sku].sku;
        price = items[_sku].price;
        state = uint256(items[_sku].state);
        if (state == 0) {
            stateIs = "For Sale";
        }
        if (state == 1) {
            stateIs = "Sold";
        }
        if (state == 2) {
            stateIs = "Shipped";
        }
        seller = items[_sku].seller;
        buyer = items[_sku].buyer;
    }

    function shipItem(uint256 sku) public sold(sku) onlyOwner {
        items[sku].state = State.Shipped;
        emit Shipped(sku);
    }
}
