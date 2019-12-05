import React from 'react';
import {Element} from 'react-scroll'


export const HomeContact = () => {
    return (

        <Element name="contact">
            <section className="contact_section">
                <div class="contact_main">
                    <h1 className="contact_title">Skontaktuj się z nami</h1>
                    <img className="contact_decoration" src={require("../../assets/Decoration.svg")} alt=""/>
                    <form className="contact_form" action="">
                        <div className="contact_form_inputs">
                            <div>
                                <label className="contact_form_label" htmlFor="">Wpisz swoje imię</label>
                                <input className="contact_form_input" placeholder="Krzysztof" type="text"/>
                            </div>
                            <div>
                                <label className="contact_form_label" htmlFor="">Wpisz swój email</label>
                                <input className="contact_form_input" placeholder="Krzysztof@onet.pl" type="text"/>
                            </div>
                        </div>
                        <label className="contact_form_label" htmlFor="">Wpis swoją wiadomość</label>
                        <textarea
                            className="contact_form_textarea"
                            name="" id=""
                            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, "
                        />
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
};