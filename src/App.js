import React from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';

import './App.css';

import {Home} from '../src/components/Home/home';
import {Login} from "./components/logowanie/login";
import {Registration} from "./components/rejestracja/registration";
import {Logout} from "./components/logout/logout";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/logout" component={Logout}/>
        </Router>
    );
}

export default App;
