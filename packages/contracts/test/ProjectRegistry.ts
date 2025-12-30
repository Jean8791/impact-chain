import {expect} from "chai";
import {ethers} from "hardhat";

/**
 * Teste mínimo:
 * - deploy do contrato
 * - chamada createProject
 * - valida contador
 * - valida evento
 */
describe("ProjectRegistry", function () {
    it("creates a project and emits ProjectCreated", async function () {
        const Factory = await ethers.getContractFactory("ProjectRegistry");
        const contract = await Factory.deploy();

        const metadataHash = ethers.keccak256(ethers.toUtf8Bytes("project:demo"));

        await expect(contract.createProject(metadataHash))
            .to.emit(contract, "ProjectCreated");

        expect(await contract.projectCount()).to.equal(1n);

        const p = await contract.projects(1);
        expect(p.metadataHash).to.equal(metadataHash);
        expect(p.owner).to.not.equal(ethers.ZeroAddress);
    });
});
