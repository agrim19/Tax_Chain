import React from 'react';
import { Col, Button, Form, Card } from 'react-bootstrap';
import KYC from '../../contracts/KYC.json';

export default function Kyc(web3) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        web3.web3.web3.eth.getAccounts().then(async (accounts) => {
            let account = accounts[0];
            let networkId = await web3.web3.web3.eth.net.getId();
            let contractAddress = KYC.networks[networkId].address;
            let kycContract = new web3.web3.web3.eth.Contract(
                KYC.abi,
                KYC.networks[networkId] && KYC.networks[networkId].address
            );
            kycContract.methods
                .completeKYC(account)
                .send({ from: account })
                .then((result) => {
                    console.log(result);
                    alert('Successful');
                })
                .catch(alert);
        });
    };
    return (
        <Col md={12}>
            <Card className='constituency-card  constituency-form-card'>
                <Form>
                    <Form.Group>
                        <Form.Control type='text' placeholder='Enter Address' />
                    </Form.Group>
                    <Button
                        className='constituency-form-button-green'
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Confirm KYC
                    </Button>
                </Form>
            </Card>
        </Col>
    );
}
