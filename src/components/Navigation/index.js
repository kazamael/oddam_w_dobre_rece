import React from 'react';
import {Link} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll'

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import {AuthUserContext} from '../Session';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth authUser={authUser.email}/> : <NavigationNonAuth/>
            }
        </AuthUserContext.Consumer>
    </div>
);

class NavigationAuth extends React.Component {

    state = {
        burger: true
    };

    componentDidMount() {
        if(window.innerWidth<550){
            this.setState({
                burger:false
            })
        } else {
            this.setState({
                burger:true
            })
        }
    }

    onClick = () => {
        if (window.innerWidth < 550) {
        {
            !this.state.burger ?
                this.setState({
                    burger: true
                })
                :
                this.setState({
                    burger: false
                })
        }
    }

    };

    render() {
        return (
            <header className="container header_header">
                <ul className="header_nav header_nav1">
                    <p className="user_mail">Cześć {this.props.authUser}</p>
                    <li className="header_nav1_item"><Link className="header_nav1_link" to={ROUTES.HOME}>Oddaj
                        rzeczy</Link>
                    </li>
                    <SignOutButton/>
                    <button onClick={this.onClick} className="burger">
                        <div/>
                        <div/>
                        <div/>
                    </button>
                </ul>
                {this.state.burger &&
                <ul className="header_nav header_nav2">
                    <li className="header_nav2_item">
                        <Link onClick={this.onClick} className="header_nav1_link" to={ROUTES.LANDING}>Start</Link>
                    </li>
                    <li className="header_nav2_item">
                        <LinkScroll onClick={this.onClick} activeClass="active" to="simplesteps" spy={true}
                                    smooth={true} duration={500}>
                            O co chodzi?
                        </LinkScroll>
                    </li>
                    <li className="header_nav2_item">
                        <LinkScroll onClick={this.onClick} activeClass="active" to="aboutus" spy={true} smooth={true}
                                    duration={500}>
                            O nas
                        </LinkScroll>
                    </li>
                    <li className="header_nav2_item">
                        <LinkScroll onClick={this.onClick} activeClass="active" to="whowehelp" spy={true} smooth={true}
                                    duration={500}>
                            Fundacja i organizacje
                        </LinkScroll>
                    </li>
                    <li className="header_nav2_item">
                        <LinkScroll onClick={this.onClick} activeClass="active" to="contact" spy={true} smooth={true}
                                    duration={500}>
                            Kontakt
                        </LinkScroll>
                    </li>
                </ul>
                }

            </header>
        )
    }
}


class NavigationNonAuth extends React.Component {

    state = {
        burger: true
    };

    componentDidMount() {
        if(window.innerWidth<550){
            this.setState({
                burger:false
            })
        } else {
            this.setState({
                burger:true
            })
        }
    }

    onClick = () => {
        {
            !this.state.burger ?
                this.setState({
                    burger: true
                })
                :
                this.setState({
                    burger: false
                })
        }

    };

    render() {
        return (
            <header className="container header_header">
                <ul className="header_nav header_nav1">
                    <li className="header_nav1_item"><Link className="header_nav1_link"
                                                           to={ROUTES.SIGN_IN}>Zaloguj</Link></li>
                    <li className="header_nav1_item"><Link className="header_nav1_link" to={ROUTES.SIGN_UP}>Załóż
                        konto</Link></li>
                    <button onClick={this.onClick} className="burger">
                        <div/>
                        <div/>
                        <div/>
                    </button>
                </ul>
                {this.state.burger &&
                <ul className="header_nav header_nav2">
                    <li className="header_nav2_item">
                        <Link onClick={this.onClick} className="header_nav1_link" to={ROUTES.LANDING}>Start</Link>
                    </li>
                    <li className="header_nav2_item">
                        <LinkScroll onClick={this.onClick} activeClass="active" to="simplesteps" spy={true}
                                    smooth={true} duration={500}>
                            O co chodzi?
                        </LinkScroll>
                    </li>
                    <li className="header_nav2_item">
                        <LinkScroll onClick={this.onClick} activeClass="active" to="aboutus" spy={true} smooth={true}
                                    duration={500}>
                            O nas
                        </LinkScroll>
                    </li>
                    <li className="header_nav2_item">
                        <LinkScroll onClick={this.onClick} activeClass="active" to="whowehelp" spy={true} smooth={true}
                                    duration={500}>
                            Fundacja i organizacje
                        </LinkScroll>
                    </li>
                    <li className="header_nav2_item">
                        <LinkScroll onClick={this.onClick} activeClass="active" to="contact" spy={true} smooth={true}
                                    duration={500}>
                            Kontakt
                        </LinkScroll>
                    </li>
                </ul>
                }
            </header>
        )
    }
}


export default Navigation;