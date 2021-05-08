import React from 'react';
import Footer from '../../components/footer/footer.js';
import NavigationBar from '../../components/navbar/navbar.js';
import Header from '../../components/header/header.js';
import { Row, Col, Button, Form, Card, Container } from 'react-bootstrap';
import Transactions from '../../components/transactions/transactions.js';
import CurrentTokens from '../../components/currentTokens/currentTokens.js';
import PurchaseTokens from '../../components/purchaseTokens/purchaseTokens.js';
import Transact from '../../contracts/Transact.json';
import { useAuth } from '../contexts/AuthContext';
import './citizen.css';
// import { web3, accounts } from '../../SetupBlockchain';

export default function Citizen({ web3 }) {
    const { currentUser } = useAuth();
    var description =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc. Malesuada bibendum arcu vitae elementum curabitur vitae. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nisl vel pretium lectus quam id leo in vitae turpis. A lacus vestibulum sed arcu non odio euismod. Tincidunt vitae semper quis lectus nulla. Pulvinar elementum integer enim neque volutpat ac. Tortor at risus viverra adipiscing at. Placerat in egestas erat imperdiet sed. Turpis tincidunt id aliquet risus. Sed enim ut sem viverra. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.';
    const handlePayTax = async (event) => {
        event.preventDefault();
        let userAddress = currentUser ? currentUser.blockChainAddress : '';

        web3.eth.getAccounts().then(async (accounts) => {
            let account = accounts[0];
            console.log(account);
            let networkId = await web3.eth.net.getId();
            let contractAddress = Transact.networks[networkId].address;
            let transactContract = new web3.eth.Contract(
                Transact.abi,
                contractAddress
            );
            transactContract.methods
                .payTax(1)
                .send({ from: account })
                .then((result) => {
                    console.log(result);
                    alert('Done');
                })
                .catch(alert);
        });
    };
    return (
        <div className=''>
            <NavigationBar></NavigationBar>
            <Header heading='Citizen: Rohan Singh'></Header>
            <Container>
                <Row>
                    <PurchaseTokens web3={web3}></PurchaseTokens>
                    <CurrentTokens
                        name='Current Tokens'
                        value='2392138'
                    ></CurrentTokens>
                </Row>
            </Container>
            <div className='PayTax my-5'>
                <Row>
                    <Col sx={12} md={8} id='table'>
                        <div className='payTax-table'>
                            <Transactions heading='Transactions'></Transactions>
                        </div>
                    </Col>

                    <Col sx={12} md={4}>
                        <div>
                            <Card className='table-card'>
                                <Card.Body>
                                    <h2>Pay Tax</h2>
                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Control
                                                    type='number'
                                                    placeholder='Amount'
                                                />
                                            </Form.Group>
                                        </Form.Row>
                                        <Button
                                            type='submit'
                                            className='constituency-find-btn'
                                            onClick={handlePayTax}
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
}
