import React from 'react';
<<<<<<< HEAD
import { Row, Col, Card } from 'react-bootstrap';
=======
import { Row, Col, Card, Container } from 'react-bootstrap';
import NavigationBar from '../../components/navbar/navbar.js';
>>>>>>> ed3829cff06dc19b7a2c55a7512705a137eb6533
import Header from '../../components/header/header.js';
import NavigationBar from '../../components/navbar/navbar.js';
import Footer from '../../components/footer/footer.js';
import Fund from '../../components/fund/fund.js';
import Transactions from '../../components/transactions/transactions.js';
import './government.css';
import GovtAllocate from '../../contracts/GovtAllocate.json';
import AddConstituency from '../../components/addConstituency/addConstituency.js';

export default function Government(web3) {
    const handleTransferFunds = async (event) => {
        event.preventDefault();
        web3.web3.eth.getAccounts().then(async (accounts) => {
            let account = accounts[0];
            let networkId = await web3.web3.eth.net.getId();
            let contractAddress = await GovtAllocate.networks[networkId]
                .address;
            let contract = new web3.web3.eth.Contract(
                GovtAllocate.abi,
                contractAddress
            );
            contract.methods
                .allocateFunds('delhi')
                .send({ from: account, value: 1 })
                .then((result) => {
                    console.log(result);
                    alert('SUCCESS');
                })
                .catch(alert);
        });
    };
    return (
        <>
            <NavigationBar></NavigationBar>
            <Header heading='Government of India'></Header>
            <Container>
                <div className='Government mb-5'>
                    <Row>
                        <Fund name='Total Funds' value='2392138'></Fund>
                        <Fund name='Used Funds' value='3202'></Fund>
                    </Row>
                    <Row>
                        <Col sm={12} md={8}>
                            <Transactions heading='Transactions'></Transactions>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className='Government-form'>
                                <Card className='table-card mt-3'>
                                    <Card.Body>
                                        <h3 className='table-heading'>
                                            Transfer Funds
                                        </h3>
                                        <div className='Government-form-wrapper'>
                                            <div className='currentFund'>
                                                <h1>25M</h1>
                                                <p>Total Funds</p>
                                            </div>
                                            <form action=''>
                                                <input
                                                    type='text'
                                                    placeholder='Enter constituency ID'
                                                />
                                                <input
                                                    type='number'
                                                    placeholder='Amount'
                                                />
                                                <input
                                                    type='text'
                                                    id='projectName'
                                                    placeholder='Description'
                                                />

                                                <button
                                                    type='submit'
                                                    className='shadow-md'
                                                    onClick={
                                                        handleTransferFunds
                                                    }
                                                >
                                                    TRANSFER
                                                </button>
                                            </form>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <AddConstituency web3={web3}></AddConstituency>
                    </Row>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
}
