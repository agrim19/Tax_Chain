const Contractor = artifacts.require('Contractor');

const chai = require('./setupChai');
const BN = web3.utils.BN;
const expect = chai.expect;

contract('Contractor', (accounts) => {
    beforeEach(async () => {
        this.contractor = await Contractor.new();
    });

    it('should be able to create new work', async () => {
        let instance = this.contractor;
        expect(instance.createNewWork()).to.eventually.be.fulfilled;
    });

    it('should be able to send ether to owner account', async () => {
        let instance = this.contractor;
        await web3.eth.sendTransaction({
            to: instance.address,
            from: accounts[1],
            value: 1,
        });
        expect(
            instance.sendToAccount(web3.utils.toWei('1', 'wei'), accounts[2])
        ).to.eventually.be.fulfilled;
    });
});
