import React from 'react';
import {Element} from 'react-scroll'


export class HomeContact extends React.Component {
    state = {
        name: "",
        mail: "",
        text: "",
        validationpass:false,
        validationerror:false
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmitClick = (e) => {
        e.preventDefault();
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.mail,
                message: this.state.text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res=>{
                if(res.status===200){
                    this.setState({
                        validationpass:true,
                        validationerror:false
                    })
                } else {
                    this.setState({
                        validationerror:true
                    })
                }
            })
            .catch(error=>console.log(error))
    };

    render() {
        const {name, mail, text,validationpass,validationerror} = this.state
        return (
            <Element name="contact">
                <section className="contact_section">
                    <div className="contact_main">
                        <h1 className="contact_title">Skontaktuj się z nami</h1>
                        <img className="contact_decoration" src={require("../../assets/Decoration.svg")} alt=""/>
                        {validationpass && <span className="validationpass">wiadomość została wysłana! wkrótce się skontaktujemy.</span>}
                        <form onSubmit={this.handleSubmitClick} className="contact_form" action="">
                            <div className="contact_form_inputs">
                                <div>
                                    <label className="contact_form_label" htmlFor="">Wpisz swoje imię</label>
                                    {!validationerror ?
                                        <input onChange={this.handleInputChange}
                                               name="name"
                                               value={name}
                                               className="contact_form_input"
                                               placeholder="Krzysztof"
                                               type="text"
                                        /> :
                                        <input onChange={this.handleInputChange}
                                               name="name"
                                               style={{"border-bottom":"2px solid red"}}
                                               value={name}
                                               className="contact_form_input"
                                               placeholder="Krzysztof"
                                               type="text"
                                        />
                                    }
                                    {validationerror && <span className="validationerror">podane imię jestnieprawidłowe!</span>}
                                </div>
                                <div>
                                    <label className="contact_form_label" htmlFor="">Wpisz swój email</label>
                                    {!validationerror ?
                                        <input onChange={this.handleInputChange}
                                               name="mail"
                                               value={mail}
                                               className="contact_form_input"
                                               placeholder="Krzysztof@onet.pl"
                                               type="text"
                                        /> :
                                        <input onChange={this.handleInputChange}
                                               name="mail"
                                               style={{"border-bottom":"2px solid red"}}
                                               value={mail}
                                               className="contact_form_input"
                                               placeholder="Krzysztof@onet.pl"
                                               type="text"
                                        />
                                    }
                                    {validationerror && <span className="validationerror">podany email jest nieprawidłowy!</span>}

                                </div>
                            </div>
                            <label className="contact_form_label" htmlFor="">Wpis swoją wiadomość</label>
                            {!validationerror ?
                                <textarea
                                    onChange={this.handleInputChange}
                                    name="text"
                                    value={text}
                                    className="contact_form_textarea"
                                    id=""
                                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
                                />
                           :
                                <textarea
                                    onChange={this.handleInputChange}
                                    name="text"
                                    value={text}
                                    className="contact_form_textarea"
                                    style={{"border-bottom":"2px solid red"}}
                                    id=""
                                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
                                />
                            }
                            {validationerror && <span className="validationerror">wiadomość musi mieć conajmniej 120 znaków</span>}
                            <button className="contact_form_submit" type="submit">Wyślij</button>
                        </form>
                    </div>
                    <footer className="contact_footer">
                        <span className="footer_copyright">Copyright by Coders Lab</span>
                        <div className="footer_icons">
                            <img className="footer_icon" src={require("../../assets/Facebook.svg")} alt=""/>
                            <img className="footer_icon" src={require("../../assets/Instagram.svg")} alt=""/>
                        </div>
                    </footer>
                </section>
            </Element>
        )
    }
};