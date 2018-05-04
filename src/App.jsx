import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';

import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Pipelines from './components/Pipelines'
import TopMenu from './components/TopMenu'
import logo from './logo.svg';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <TopMenu></TopMenu>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/pipelines" component={Pipelines} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
