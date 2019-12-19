import React from 'react';
import {Link} from "react-router-dom";
import { withFirebase } from '../Firebase';
import * as ROUTES from "../../constants/routes";
const SignOutButton = ({ firebase }) => (
    <button className="sign_out" type="button" onClick={firebase.doSignOut}>
        <Link to={ROUTES.SIGN_OUT} className="header_nav1_link">Wyloguj</Link>
    </button>
);
export default withFirebase(SignOutButton);