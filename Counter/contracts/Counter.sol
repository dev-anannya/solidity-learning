// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 private count;

    // Event emitted when the count changes
    event CountChanged(uint256 newCount);

    // Returns the current count
    function getCount() public view returns (uint256) {
        return count;
    }

    // Increments the count by 1
    function increment() public {
        count += 1;
        emit CountChanged(count);
    }

    // Decrements the count by 1, but not below zero
    function decrement() public {
        require(count > 0, "Counter: count cannot go below zero");
        count -= 1;
        emit CountChanged(count);
    }

    // Resets the count to zero
    function reset() public {
        count = 0;
        emit CountChanged(count);
    }
}
