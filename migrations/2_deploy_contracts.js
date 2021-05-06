const KYC = artifacts.require('KYC');
const GovtDetails = artifacts.require('GovtDetails');
const Transaction = artifacts.require('Transact');
const GovtAllocate = artifacts.require('GovtAllocate');

module.exports = async (deployer) => {
    await deployer.deploy(KYC);
    await deployer.deploy(GovtDetails);
    await deployer.deploy(Transaction, KYC.address, GovtDetails.address);
    await deployer.deploy(GovtAllocate, GovtDetails.address);
};
