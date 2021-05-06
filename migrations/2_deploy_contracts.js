const KYC = artifacts.require('KYC');
const GovtDetails = artifacts.require('GovtDetails');
const Transaction = artifacts.require('Transact');
const GovtAllocate = artifacts.require('GovtAllocate');
const Contractor = artifacts.require('Contractor');
const Work = artifacts.require('Work');

module.exports = async (deployer) => {
    await deployer.deploy(KYC);
    await deployer.deploy(GovtDetails);
    await deployer.deploy(Transaction, KYC.address, GovtDetails.address);
    await deployer.deploy(GovtAllocate, GovtDetails.address);
    await deployer.deploy(Contractor);
    await deployer.deploy(Work, Contractor.address);
};
