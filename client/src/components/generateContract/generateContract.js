import React from 'react';
import { Col, Button, Form, Card } from 'react-bootstrap';
import './generateContract.css';
import Contractor from '../../contracts/Contractor.json';

function GenerateContract(web3) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        web3.web3.web3.eth.getAccounts().then(async (accounts) => {
            let account = accounts[0];
            let networkId = await web3.web3.web3.eth.net.getId();
            let contractAddress = Contractor.networks[networkId].address;
            let contract = new web3.web3.web3.eth.Contract(
                Contractor.abi,
                contractAddress
            );
            contract.methods
                .createNewWork()
                .send({ from: account })
                .then((result) => {
                    console.log(result);
                    alert('SUCCESS');
                })
                .catch(alert);
        });
    };
    return (
        <>
            <Col md={2}></Col>
            <Col md={8}>
                <Card className='gc-card'>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                type='text'
                                placeholder='Contract Title'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type='text'
                                placeholder='Contract Description'
                            />
                        </Form.Group>
                        <Button
                            className='constituency-form-button-green'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Generate Contract
                        </Button>
                    </Form>
                </Card>
            </Col>
            <Col md={2}></Col>
        </>
    );
}

export default GenerateContract;
