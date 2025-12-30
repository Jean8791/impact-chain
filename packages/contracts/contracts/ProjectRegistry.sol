// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * ProjectRegistry
 *
 * Contrato mínimo para registrar projetos de impacto.
 * On-chain fica só o essencial:
 * - owner (quem criou)
 * - hash de metadados (referência off-chain)
 * - timestamp
 */
contract ProjectRegistry {
    struct Project {
        uint256 id;
        address owner;
        bytes32 metadataHash;
        uint256 createdAt;
    }

    uint256 public projectCount;
    mapping(uint256 => Project) public projects;

    event ProjectCreated(
        uint256 indexed projectId,
        address indexed owner,
        bytes32 metadataHash,
        uint256 timestamp
    );

    function createProject(bytes32 metadataHash) external {
        require(metadataHash != bytes32(0), "metadataHash invalido");

        projectCount++;

        projects[projectCount] = Project({
            id: projectCount,
            owner: msg.sender,
            metadataHash: metadataHash,
            createdAt: block.timestamp
        });

        emit ProjectCreated(projectCount, msg.sender, metadataHash, block.timestamp);
    }
}
