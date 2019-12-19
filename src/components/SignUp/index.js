import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'recompose';

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../constants/routes';

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const SignUpPage = () => (
    <div>
        <div className="login_article">
            <h1 className="login_title">Zarejestruj się</h1>
            <img className="login_decoration" src={require("../../assets/Decoration.svg")} alt=""/>
            <SignUpForm/>
        </div>
    </div>
);

const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    emailvalid: false,
    passwordvalid: false,
    secondpasswordvalid: false
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    };

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
        if (this.state.passwordOne.length < 6) {
            this.setState({
                passwordvalid: true
            })
        } else {
            this.setState({
                passwordvalid: false
            })
        }

        if (this.state.passwordOne !== this.state.passwordTwo) {
            this.setState({
                secondpasswordvalid: true
            })
        } else {
            this.setState({
                secondpasswordvalid: false
            })
        }

        const {email, passwordOne} = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
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
        const {
            email,
            passwordOne,
            passwordTwo,
            error,
            emailvalid,
            passwordvalid,
            secondpasswordvalid
        } = this.state;


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
                                       name="passwordOne"
                                       value={passwordOne} className="login_form_input" type="text"/>
                                <span className="validationerror">podane hasło jest za krótkie!</span>
                            </>
                            :
                            <input onChange={this.onChange} name="passwordOne" value={passwordOne}
                                   className="login_form_input" type="text"/>
                        }


                    </div>
                    <div className="login_form_item">
                        <label className="login_form_label" htmlFor="">Powtórz Hasło</label>
                        {secondpasswordvalid ?
                            <>
                                <input onChange={this.onChange} style={{"borderBottom": "2px solid red"}}
                                       name="passwordTwo"
                                       value={passwordTwo} className="login_form_input" type="text"/>
                                <span className="validationerror">hasła nie są takie same!</span>
                            </>
                            :
                            <input onChange={this.onChange} name="passwordTwo" value={passwordTwo}
                                   className="login_form_input" type="text"/>
                        }

                    </div>
                </div>
                <div className="login_buttons">
                    <button className="login_button"><Link className="header_nav1_link" to={ROUTES.SIGN_IN}>Zaloguj
                        się</Link></button>
                    <button type="submit" className="login_button">Załóż konto</button>
                </div>
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);
export default SignUpPage;
export {SignUpForm, SignUpLink};