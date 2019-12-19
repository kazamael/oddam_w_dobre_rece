import React from 'react';
import {Link} from "react-router-dom";
import "../../scss/main.scss"
import * as ROUTES from "../../constants/routes";


export class Logout extends React.Component {
    render() {


        return (
            <>
                <div className="login_article">
                    <h1 className="login_title">Wylogowanie nastąpiło pomyślnie</h1>
                    <img className="login_decoration" src={require("../../assets/Decoration.svg")} alt=""/>
                    <button className="login_button"><Link className="header_nav1_link" to={ROUTES.LANDING}>Strona główna</Link></button>
                </div>
            </>
        )
    }
}