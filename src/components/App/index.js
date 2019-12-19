import React from 'react';
import '../../scss/main.scss'

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import HomePage from '../Home';
import AccountPage from '../Account';
import {Logout} from "../SignOut/signout";


import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';


const App = () => (
                <Router>
                    <Navigation/>
                    <div>
                        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                        <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                        <Route path={ROUTES.HOME} component={HomePage}/>
                        <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
                        <Route path={ROUTES.SIGN_OUT} component={Logout}/>

                    </div>

                </Router>
);


export default withAuthentication(App);