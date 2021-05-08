import React from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import NavigationBar from '../../components/navbar/navbar.js';
import Footer from '../../components/footer/footer.js';
import Header from '../../components/header/header.js';
import Contract from '../../components/contract/contract.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faFileContract } from '@fortawesome/free-solid-svg-icons';
import GenerateContract from '../../components/generateContract/generateContract.js';

import './contractor.css';

function Contractor(web3) {
    var description =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sollicitudin tempor id eu nisl nunc. Malesuada bibendum arcu vitae elementum curabitur vitae. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nisl vel pretium lectus quam id leo in vitae turpis. A lacus vestibulum sed arcu non odio euismod. Tincidunt vitae semper quis lectus nulla. Pulvinar elementum integer enim neque volutpat ac. Tortor at risus viverra adipiscing at. Placerat in egestas erat imperdiet sed. Turpis tincidunt id aliquet risus. Sed enim ut sem viverra. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc.';
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header heading='Contractor: Rahul Sharma'></Header>
            <Container>
                <Row>
                    <GenerateContract web3={web3}></GenerateContract>
                    <Col md={12}>
                        <Card className='table-card'>
                            <Card.Body>
                                <h3 className='table-heading'>
                                    Current Contracts{' '}
                                    <FontAwesomeIcon
                                        className='icon-contractor'
                                        icon={faWrench}
                                    />
                                </h3>
                                <Table
                                    responsive
                                    striped
                                    bordered
                                    hover
                                    className='contracts-table'
                                >
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Contract ID</th>
                                            <th>Amount in INR</th>
                                            <th>Title</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Contract
                                            title='Road Repair Work near N-block, Malivya Nagar'
                                            description={description}
                                            date='2021-01-01'
                                            contractID='213'
                                            amount='21390'
                                        ></Contract>
                                        <Contract
                                            title='Construction of MLAs new Office'
                                            description={description}
                                            date='2021-01-01'
                                            contractID='213'
                                            amount='21390'
                                        ></Contract>
                                        <Contract
                                            title='Repair Street Lights'
                                            description={description}
                                            date='2021-01-01'
                                            contractID='213'
                                            amount='21390'
                                        ></Contract>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12}>
                        <Card className='table-card card-mb'>
                            <Card.Body>
                                <h3 className='table-heading'>
                                    Completed Contracts{'  '}
                                    <FontAwesomeIcon
                                        className='icon-contractor'
                                        icon={faFileContract}
                                    />
                                </h3>
                                <Table
                                    responsive
                                    striped
                                    bordered
                                    hover
                                    className='contracts-table table-2'
                                >
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Contract ID</th>
                                            <th>Amount in INR</th>
                                            <th>Title</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <Contract
                                            title='road construction work near j-block, Maliviya Nagar'
                                            description={description}
                                            date='2021-01-01'
                                            contractID='213'
                                            amount='21390'
                                        ></Contract>
                                        <Contract
                                            title='install solar stree lights'
                                            description={description}
                                            date='2021-01-01'
                                            contractID='213'
                                            amount='21390'
                                        ></Contract>
                                        <Contract
                                            title='construction of bridge'
                                            description={description}
                                            date='2021-01-01'
                                            contractID='213'
                                            amount='21390'
                                        ></Contract>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Contractor;
