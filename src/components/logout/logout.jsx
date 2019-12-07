import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from 'react-scroll'
import "../../scss/main.scss"


export class Logout extends React.Component {
    render() {


        return (
            <>
                <header className="container header_header">
                    <ul className="header_nav header_nav1">
                        <li className="header_nav1_item"><Link className="header_nav1_link" to="/login">Zaloguj</Link>
                        </li>
                        <li className="header_nav1_item"><Link className="header_nav1_link" to="/registration">Załóż
                            konto</Link>
                        </li>
                    </ul>
                    <ul className="header_nav header_nav2">
                        <li className="header_nav2_item" style={{"border": "none"}}>
                            <Link className="header_nav1_link" to="/">Start</Link>
                        </li>
                        <li className="header_nav2_item">
                            <LinkScroll activeClass="active" to="simplesteps" spy={true} smooth={true} duration={500}>
                                O co chodzi?
                            </LinkScroll>
                        </li>
                        <li className="header_nav2_item">
                            <LinkScroll activeClass="active" to="aboutus" spy={true} smooth={true} duration={500}>
                                O nas
                            </LinkScroll>
                        </li>
                        <li className="header_nav2_item">
                            <LinkScroll activeClass="active" to="whowehelp" spy={true} smooth={true} duration={500}>
                                Fundacja i organizacje
                            </LinkScroll>
                        </li>
                        <li className="header_nav2_item">
                            <LinkScroll activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                                Kontakt
                            </LinkScroll>
                        </li>
                    </ul>
                </header>
                <div className="login_article">
                    <h1 className="login_title">Wylogowanie nastąpiło pomyślnie</h1>
                    <img className="login_decoration" src={require("../../assets/Decoration.svg")} alt=""/>

                    <button className="login_button"><Link className="header_nav1_link" to="/">Strona główna</Link></button>


                </div>
            </>
        )
    }
}