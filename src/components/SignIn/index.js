import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from "react-router-dom";
import {compose} from 'recompose';

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../constants/routes';

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const SignInPage = () => (
    <div>
        <div className="login_article">
            <h1 className="login_title">Zaloguj się</h1>
            <img className="login_decoration" src={require("../../assets/Decoration.svg")} alt=""/>
            <SignInForm/>
        </div>
    </div>
);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
    emailvalid: false,
    passwordvalid: false
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {

        if (!validateEmail(this.state.email)) {

            this.setState({
                emailvalid: true
            })
        } else {
            this.setState({
                emailvalid: false
            })
        }
        if (this.state.password.length < 6) {
            this.setState({
                passwordvalid: true
            })
        } else {
            this.setState({
                passwordvalid: false
            })
        }

        const {email, password} = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.LANDING);
            })
            .catch(error => {
                this.setState({error});
            });
        event.preventDefault();
    };
    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error, emailvalid,passwordvalid} = this.state;
        return (

            <form onSubmit={this.onSubmit} className="login_form" action="">
                <div className="login_form_items">
                    <div className="login_form_item">
                        <label className="login_form_label" htmlFor="">Email</label>
                        {emailvalid ?
                            <>
                                <input onChange={this.onChange} style={{"borderBottom": "2px solid red"}} name="email"
                                       value={email} className="login_form_input" type="text"/>
                                <span className="validationerror">podany email jest niepoprawny!</span>
                            </>
                            :
                            <input onChange={this.onChange} name="email" value={email} className="login_form_input"
                                   type="text"/>
                        }
                    </div>
                    <div className="login_form_item">
                        <label className="login_form_label" htmlFor="">Hasło</label>
                        {passwordvalid ?
                            <>
                                <input onChange={this.onChange} style={{"borderBottom": "2px solid red"}}
                                       name="password"
                                       value={password} className="login_form_input" type="text"/>
                                <span className="validationerror">podane hasło jest za krótkie!</span>
                            </>
                            :
                            <input onChange={this.onChange} name="password" value={password}
                                   className="login_form_input" type="text"/>
                        }
                        {error && <p className="validationerror">niepoprawny email lub hasło!</p>}

                    </div>
                </div>
                <div className="login_buttons">
                    <button className="login_button"><Link className="header_nav1_link" to={ROUTES.SIGN_UP}>Załóż
                        konto</Link></button>
                    <button type="submit"  className="login_button">Zaloguj się</button>
                </div>

            </form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);
export default SignInPage;
export {SignInForm};