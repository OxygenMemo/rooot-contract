pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTRooot is ERC721 {
    uint256 supply = 0;
    constructor() ERC721("ROOOT", "ROOOT") {
    }

    function mint() public {
        supply++; 
        _safeMint(msg.sender, supply);
    }
}