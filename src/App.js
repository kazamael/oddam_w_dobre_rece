import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import './App.css';

import {Home} from '../src/components/Home/home';
import {Login} from "./components/logowanie/login";
import {Registration} from "./components/rejestracja/registration";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/registration" component={Registration}/>
        </Router>
    );
}

export default App;
