const Contractor = artifacts.require('Contractor');
const Work = artifacts.require('Work');

const chai = require('./setupChai');
const BN = web3.utils.BN;
const expect = chai.expect;

contract('Contract', (accounts) => {
    it('is possible to create a new work', async () => {
        let instance = await Contractor.deployed();
        return expect(instance.createNewWork()).to.eventually.be.fulfilled;
    });
});
