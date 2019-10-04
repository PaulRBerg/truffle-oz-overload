pragma solidity 0.5.12;

import "@openzeppelin/upgrades/contracts/Initializable.sol";

// Import interface and library from OpenZeppelin contracts
import "@openzeppelin/contracts-ethereum-package/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/GSN/GSNRecipient.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/GSN/bouncers/GSNBouncerSignature.sol";

contract Counter is Initializable, Ownable, GSNRecipient, GSNBouncerSignature {
    uint256 public value;

    function increase() public {
        value++;
    }

    function initialize(address owner) initializer public {
        Ownable.initialize(owner);
        GSNBouncerSignature.initialize(owner);
    }

    function initialize(address owner, address owner2) initializer public {
        Ownable.initialize(owner);
        GSNBouncerSignature.initialize(owner);
    }
}
