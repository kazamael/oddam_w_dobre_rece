import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {AuthUserContext} from "../Session";


export const HomeHeader = () => {
    return (
        <div className="header_section">
            <section className="container header_header">
                <div className="header_article">
                    <h1 className="header_article_title">Zacznij pomagać!</h1>
                    <h1 className="header_article_title">Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="header_article_thing"/>


                    <AuthUserContext.Consumer>
                        {authUser =>
                            authUser ?
                                <div className="header_article_buttons">
                                    <button className="header_article_button"><Link className="header_article_link"
                                                                                    to={ROUTES.HOME}>oddaj rzeczy</Link>
                                    </button>
                                    <button className="header_article_button"><Link className="header_article_link"
                                                                                    to={ROUTES.HOME}>zorganizuj
                                        zbiórkę</Link></button>
                                </div>
                                :
                                <div className="header_article_buttons">
                                    <button className="header_article_button"><Link className="header_article_link"
                                                                                    to={ROUTES.SIGN_IN}>oddaj
                                        rzeczy</Link></button>
                                    <button className="header_article_button"><Link className="header_article_link"
                                                                                    to={ROUTES.SIGN_IN}>zorganizuj
                                        zbiórkę</Link></button>
                                </div>
                        }
                    </AuthUserContext.Consumer>


                </div>
            </section>
        </div>
    )
};

