// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract Donor {
    mapping(uint256 => DonorData) public donorMapping;
    uint256 internal donorCount;
    struct DonorData {
        uint256 donorId;
        string name;
        string bloodGroup;
        uint256 mobNumber;
        uint256 age;
        string location;
        string email;
    }

    function getDonorCount() public view returns (uint256) {
        return donorCount;
    }

    function addDonorData(
        string memory _name,
        string memory _bloodGroup,
        uint256 _mobNumber,
        uint256 _age,
        string memory _location,
        string memory _email
    ) public {
        donorMapping[donorCount].donorId = donorCount;
        donorMapping[donorCount].name = _name;
        donorMapping[donorCount].bloodGroup = _bloodGroup;
        donorMapping[donorCount].mobNumber = _mobNumber;
        donorMapping[donorCount].age = _age;
        donorMapping[donorCount].location = _location;
        donorMapping[donorCount].email = _email;
        // create enum
        donorCount++;
    }
}
