import React, { useState } from 'react';
import { Col, Button, Form, Card } from 'react-bootstrap';
import GovtDetails from '../../contracts/GovtDetails.json';

function AddConstituency(web3) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        web3.web3.web3.eth.getAccounts().then(async (accounts) => {
            let account = accounts[0];
            let networkId = await web3.web3.web3.eth.net.getId();
            let contractAddress = await GovtDetails.networks[networkId].address;
            let contract = new web3.web3.web3.eth.Contract(
                GovtDetails.abi,
                contractAddress
            );
            contract.methods
                .setConstituencyAddress('delhi', account)
                .send({ from: account })
                .then((result) => {
                    console.log(result);
                    alert('SUCCESS');
                })
                .catch(alert);
        });
    };
    return (
        <Col md={12}>
            <Card className='constituency-card  constituency-form-card'>
                <Form>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='Constituency Name'
                            // onChange={(event) => {
                            //     setToAccount(event.target.value);
                            // }}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='Constituency Address'
                            onChange={(event) => {
                                // setToValue(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Button
                        className='constituency-form-button-green'
                        type='submit'
                        onClick={handleSubmit}
                    >
                        Add Constituency
                    </Button>
                </Form>
            </Card>
        </Col>
    );
}

export default AddConstituency;
