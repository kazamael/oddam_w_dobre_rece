import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from 'react-scroll'
import "../../scss/main.scss"


export class Login extends React.Component {
    state = {
        login: "",
        password: "",
        loginvalid: false,
        passwordvalid: false
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleButtonClick = () => {
        function validateEmail(email) {
            let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        if (!validateEmail(this.state.login)){
            this.setState({
                loginvalid:true
            })
        } else {this.setState({
            loginvalid:false
        })}

        if(this.state.password.length<6){
            this.setState({
                passwordvalid:true
            })
        } else {this.setState({
            passwordvalid:false
        })}
    };

    render() {
        const {login, password, loginvalid, passwordvalid} = this.state;
        let logiStyle;
        {
            !loginvalid ? logiStyle = {"border-bottom": "2px solid #737373"} : logiStyle = {"border-bottom": "2px solid red"}
        }
        let passwordStyle;
        {
            !passwordvalid ? passwordStyle = {"border-bottom": "2px solid #737373"} : passwordStyle = {"border-bottom": "2px solid red"}
        }

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
                    <h1 className="login_title">Zaloguj się</h1>
                    <img className="login_decoration" src={require("../../assets/Decoration.svg")} alt=""/>
                    <form className="login_form" action="">
                        <div className="login_form_item">
                            <label className="login_form_label" htmlFor="">Email</label>
                            <input style={logiStyle} onChange={this.handleInputChange} name="login" value={login}
                                   className="login_form_input" type="text"/>
                            {loginvalid && <span className="validationerror">podany email jest niepoprawny!</span>}
                        </div>
                        <div className="login_form_item">
                            <label className="login_form_label" htmlFor="">Hasło</label>
                            <input style={passwordStyle} onChange={this.handleInputChange} name="password"
                                   value={password} className="login_form_input" type="text"/>
                            {passwordvalid && <span className="validationerror">podane hasło jest za krótkie!</span>}
                        </div>
                    </form>
                    <div className="login_buttons">
                        <button className="login_button"><Link className="header_nav1_link" to="/registration">Załóż
                            konto</Link></button>
                        <button onClick={this.handleButtonClick} className="login_button">Zaloguj się</button>
                    </div>
                </div>
            </>
        )
    }
}