import React, { useState } from 'react';
import { Row, Col, Button, Form, Card, Container } from 'react-bootstrap';
import NavigationBar from '../../components/navbar/navbar.js';
import Footer from '../../components/footer/footer.js';
import Header from '../../components/header/header.js';
import Fund from '../../components/fund/fund.js';
import TransferFunds from '../../components/transferFund/transferFund.js';
import Transactions from '../../components/transactions/transactions.js';
import Kyc from '../../components/kyc/kyc.js';
import GovtDetails from '../../contracts/GovtDetails.json';

import './constituency.css';

function Constituency(web3) {
    const [acc, setAcc] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        web3.web3.eth.getAccounts().then(async (accounts) => {
            let account = accounts[0];
            let networkId = await web3.web3.eth.net.getId();
            let contractAddress = GovtDetails.networks[networkId].address;
            let contract = new web3.web3.eth.Contract(
                GovtDetails.abi,
                contractAddress
            );
            contract.methods
                .setContractor(acc)
                .send({ from: account })
                .then((result) => {
                    console.log(result);
                    alert('Successful');
                })
                .catch(alert);
        });
    };
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header heading='Malviya Nagar Constituency'></Header>
            <Container className='my-5'>
                <Row>
                    <Fund name='Alloted Funds' value='2392138'></Fund>
                    <Fund name='Used Funds' value='3202'></Fund>
                </Row>
                <Row>
                    <Transactions heading='Transactions in Your Constituency'></Transactions>
                    <TransferFunds web3={web3}></TransferFunds>
                    <Kyc web3={web3}></Kyc>
                </Row>

                {/* form below */}

                <div>
                    <Card className='table-card'>
                        <Card.Body>
                            <h2>Add Contractor</h2>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label></Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='0x0000000000000000'
                                            onChange={(v) => {
                                                setAcc(v.target.value);
                                            }}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Button
                                    type='submit'
                                    className='constituency-find-btn'
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

            {/* form above */}

            <div className='constituency-above-footer'></div>
            <Footer></Footer>
        </div>
    );
}

export default Constituency;
