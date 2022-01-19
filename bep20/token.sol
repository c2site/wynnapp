pragma solidity ^0.8.2;

contract Token {
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowance;

    address private game5Address = 0x9E7D40A60f0e9B818123715d895b74fCd1fCf193;
    address private game4Address = 0x9E7D40A60f0e9B818123715d895b74fCd1fCf193;
    address private game3Address = 0x9E7D40A60f0e9B818123715d895b74fCd1fCf193;
    address private devAddress = 0x9E7D40A60f0e9B818123715d895b74fCd1fCf193;

    uint public totalSupply = 10000 * 10 ** 18;
    string public name = "My Token";
    string public symbol = "TKN";
    uint public decimals = 18;

    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);

    constructor() {
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address owner) public returns(uint) {
        return balances[owner];
    }

    function transfer(address to, uint value) public returns(bool) {
        require(balanceOf(msg.sender) >= value, 'balance too low');
        balances[to] += value;
        balances[msg.sender] -= value;
        emit Transfer(msg.sender, to, value);
        return true;
    }

    function transferFrom(address from, address to, uint value) public returns(bool) {
        require(balanceOf(from) >= value, 'balance too low');
        require(allowance[from][msg.sender] >= value, 'allowance too low');
        balances[to] += value;
        balances[from] -= value;
        emit Transfer(from, to, value);
        return true;
    }

    function buy(uint256 amount) public returns(bool){
        token.transfer(game5Address, amount * 0.3); // game5
        token.transfer(game4Address, amount * 0.3); // game4
        token.transfer(game3Address, amount * 0.3); // game3
        token.transfer(devAddress, amount * 0.1); // devFee
        return true;
    }
}