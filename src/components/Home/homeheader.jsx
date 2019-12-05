import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from 'react-scroll'


export const HomeHeader = () => {
    return (
        <header className="container header_header">
            <ul className="header_nav header_nav1">
                <li className="header_nav1_item"><Link className="header_nav1_link" to="/login">Zaloguj</Link></li>
                <li className="header_nav1_item"><Link className="header_nav1_link" to="/login">Załóż konto</Link></li>
            </ul>
            <ul className="header_nav header_nav2">
                <li className="header_nav2_item">
                    <LinkScroll activeClass="active" to="start" spy={true} smooth={true} duration={500}>
                        Start
                    </LinkScroll>
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
                <li className="header_nav2_item">Kontakt</li>
            </ul>
            <div className="header_article">
                <h1 className="header_article_title">Zacznij pomagać!</h1>
                <h1 className="header_article_title">Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div className="header_article_thing"/>
                <div className="header_article_buttons">
                    <button className="header_article_button"><Link className="header_article_link" to="/login">oddaj
                        rzeczy</Link></button>
                    <button className="header_article_button"><Link className="header_article_link" to="/login">zorganizuj
                        zbiórkę</Link></button>
                </div>
            </div>
        </header>
    )
};