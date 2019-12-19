import React from 'react';
import {Element} from 'react-scroll'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {AuthUserContext} from "../Session";

export const HomeSimpleSteps = () => {
    return (

        <Element name="simplesteps">
            <section className="simple_back">
                <div className="simple_head">
                    <h1 className="simple_title">Wystarczą 4 proste kroki</h1>
                    <img className="simple_decoration" src={require("../../assets/Decoration.svg")} alt="elo"/>
                </div>
                <div className="simple_content_back">
                    <div className="simple_content">
                        <div className="simple_box">
                            <img className="simple_box_img" src={require("../../assets/Icon-1.svg")} alt="elo"/>
                            <h6 className="simple_box_title">Wybierz rzeczy</h6>
                            <p className="simple_box_text">ubrania,zbawki,sprzęt i inne</p>
                        </div>
                        <div className="simple_box">
                            <img className="simple_box_img" src={require("../../assets/Icon-2.svg")} alt="elo"/>
                            <h6 className="simple_box_title">Spakuj je</h6>
                            <p className="simple_box_text">skorystaj z worków na śmieci</p>
                        </div>
                        <div className="simple_box">
                            <img className="simple_box_img" src={require("../../assets/Icon-3.svg")} alt="elo"/>
                            <h6 className="simple_box_title">Zdecyduj komu chcesz pomóc</h6>
                            <p className="simple_box_text">wybierz zaufane miejsce</p>
                        </div>
                        <div className="simple_box">
                            <img className="simple_box_img" src={require("../../assets/Icon-4.svg")} alt="elo"/>
                            <h6 className="simple_box_title">Zamów kuriera</h6>
                            <p className="simple_box_text">kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
                <AuthUserContext.Consumer>
                    {authUser =>
                        authUser ?
                            <button className="simple_button"><Link className="simple_link" to={ROUTES.HOME}>Oddaj rzeczy</Link></button>
                            :
                            <button className="simple_button"><Link className="simple_link" to={ROUTES.SIGN_IN}>Oddaj rzeczy</Link></button>
                    }
                </AuthUserContext.Consumer>

            </section>
        </Element>
    )
};