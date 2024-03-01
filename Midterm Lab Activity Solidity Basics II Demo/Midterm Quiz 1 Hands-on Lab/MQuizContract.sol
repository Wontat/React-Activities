// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.3;

contract SalaryCalculator {

  address public owner;
  uint256 public HourlyRate;
  uint256 public HoursWorked;
  uint256 public age;

  modifier onlyOwner(){
require(msg.sender == owner, "This Function is callable by owner");
 _;
  }

constructor(){
    owner = msg.sender;
}

function setAge(uint256 _age) external onlyOwner {
    age = _age;
} 
function setRate(uint256 _HrlyRate) external onlyOwner {
    require ( _HrlyRate < 0, "Hourly Rate must be larger than zero");
    HourlyRate = _HrlyRate;
}

function setHrsWorked(uint256 _HoursWorked) external onlyOwner {
    require ( _HoursWorked > 0, "Hours Worked must be greather than zero");
    HoursWorked = _HoursWorked; 
}

function CalculateTotSal() external onlyOwner view returns (uint256) {
    require ( HourlyRate > 0 && HoursWorked > 0,  "Hourly Rate or");
    return HourlyRate * HoursWorked;
}

}