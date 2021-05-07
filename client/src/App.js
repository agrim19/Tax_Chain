import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home/home.js';
import SignUp from './pages/forms/signup';
import Login from './pages/forms/login';
import Citizen from './pages/citizen/citizen';
import GovtDashboard from './pages/government/government.js';
import Constituency from './pages/constituency/consituency.js';
import Contractor from './pages/contractor/contractor.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import getWeb3 from './getWeb3';

import ContractorContract from './contracts/Contractor.json';
import GovtAllocate from './contracts/GovtAllocate.json';
import TransactContract from './contracts/Transact.json';

class App extends Component {
    state = { loaded: false };

    componentDidMount = async () => {
        try {
            this.web3 = await getWeb3();
            this.accounts = await this.web3.eth.getAccounts();
            this.networkId = await this.web3.eth.net.getId();
            this.setState({ loaded: true });
        } catch (error) {
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`
            );
            console.error(error);
        }
    };

    render() {
        if (!this.state.loaded) {
            return <div>Loading Web3, accounts, and contract...</div>;
        }
        return (
            <Router>
                <div className='App'>
                    <Switch>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/signup' component={SignUp}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route
                            path='/citizen'
                            render={() => <Citizen web3={this.web3} />}
                        ></Route>
                        <Route
                            path='/government/'
                            component={GovtDashboard}
                        ></Route>
                        <Route
                            path='/constituency'
                            component={Constituency}
                        ></Route>
                        <Route
                            path='/contractor'
                            component={Contractor}
                        ></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
