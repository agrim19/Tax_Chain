import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../pages/contexts/AuthContext';
import GovtDetails from '../../contracts/GovtDetails.json';
import getWeb3 from '../../getWeb3';
import { db } from '../../firebase';

function NavigationBar(WEB) {
    const [account, setAccount] = useState('');
    const [contract, setContract] = useState({});
    const [isGovt, setIsGovt] = useState(false);
    const [isConst, setIsConst] = useState(false);
    const [isCont, setIsCont] = useState(false);
    useEffect(() => {
        isGovernment();
        isConstituency();
        isContractor();
    }, []);
    const { currentUser, signout } = useAuth();
    async function isGovernment() {
        getBlockChainAddress(currentUser.email).then((result) => {
            if (
                result.toLowerCase() ==
                '0xb1d15b7540098d2bba1dd8357e9a3482c67e196b'
            )
                setIsGovt(true);
        });
        // if (web3) {
        //     web3.eth.getAccounts().then(async (accounts) => {
        //         setAccount(accounts[0]);
        //         let networkId = await web3.eth.net.getId();
        //         let contractAddress = GovtDetails.networks[networkId].address;
        //         let Contract = new web3.eth.Contract(
        //             GovtDetails.abi,
        //             contractAddress
        //         );
        //         let govAddress = await Contract.methods.govtAddress().call();
        //         console.log(account + ' ' + govAddress);
        //         if (
        //             account.toLowerCase() == govAddress.toLowerCase() ||
        //             account.toLowerCase() ==
        //                 '0xb1d15b7540098d2bba1dd8357e9a3482c67e196b'.toLowerCase()
        //         )
        //             setIsGovt(true);
        //         else setIsGovt(false);
        //     });
        // }
    }
    async function isConstituency() {
        // if (web3) {
        //     web3.eth.getAccounts().then(async (accounts) => {
        //         setAccount(accounts[0]);
        //         let networkId = await web3.eth.net.getId();
        //         let contractAddress = GovtDetails.networks[networkId].address;
        //         let Contract = new web3.eth.Contract(
        //             GovtDetails.abi,
        //             contractAddress
        //         );
        //         let ans = await Contract.methods.isConstituency(account).call();
        //         setIsConst(ans);
        //     });
        // }
    }
    async function isContractor() {
        // if (web3) {
        //     web3.eth.getAccounts().then(async (accounts) => {
        //         setAccount(accounts[0]);
        //         let networkId = await web3.eth.net.getId();
        //         let contractAddress = GovtDetails.networks[networkId].address;
        //         let Contract = new web3.eth.Contract(
        //             GovtDetails.abi,
        //             contractAddress
        //         );
        //         setContract(Contract);
        //         let ans = await Contract.methods.isContractor(account).call();
        //         setIsCont(ans);
        //     });
        // }
    }
    function isCitizen() {
        return true;
    }
    return (
        <Navbar className='color-nav fixed-top' variant='dark' expand='lg'>
            <Navbar.Brand href='/'>
                <FontAwesomeIcon className='icon' icon={faDiceD20} />
                TaxChain
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto ml-auto'>
                    {isCitizen() ? (
                        <Nav.Link className='nav-link' href='/citizen'>
                            Citizens
                        </Nav.Link>
                    ) : (
                        ''
                    )}

                    {isGovt ? (
                        <Nav.Link className='nav-link' href='/government'>
                            Government
                        </Nav.Link>
                    ) : (
                        ''
                    )}

                    {isConst ? (
                        <Nav.Link className='nav-link' href='/constituency'>
                            Constituency
                        </Nav.Link>
                    ) : (
                        ''
                    )}

                    {isCont ? (
                        <Nav.Link className='nav-link' href='/contractor'>
                            Contractor
                        </Nav.Link>
                    ) : (
                        ''
                    )}
                </Nav>
                <Nav.Link
                    className='nav-link'
                    href={`/${currentUser ? '' : 'login'}`}
                >
                    <Button
                        variant='outline'
                        className='btn-green'
                        onClick={currentUser ? signout : () => {}}
                    >
                        {currentUser ? 'Logout' : 'Login'}
                    </Button>
                </Nav.Link>
                {!currentUser ? (
                    <Nav.Link className='nav-link navbar-signup' href='/signup'>
                        SignUp
                    </Nav.Link>
                ) : (
                    ''
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}

async function getBlockChainAddress(email) {
    let docRef = db.collection('users').doc(email);
    let inter = await docRef.get();
    if (inter.exists) return inter.data().blockChainAddress;
    else return null;
}

export default NavigationBar;
