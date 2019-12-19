import React from 'react';
import {Element} from 'react-scroll'


export const HomeAboutUs = () => {
    return (

        <Element name="aboutus">
            <section className="aboutus_section">
                <article className="aboutus_content">
                    <h1 className="aboutus_title">O nas</h1>
                    <img className="aboutus_decoration" src={require("../../assets/Decoration.svg")} alt=""/>
                    <p className="aboutus_text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt dolorum eligendi eum exercitationem id non quasi similique soluta voluptate.
                    </p>
                    <img className="aboutus_signature" src={require("../../assets/Signature.svg")} alt=""/>
                </article>
                <img className="aboutus_background" src={require("../../assets/People.jpg")} alt=""/>
            </section>

        </Element>
    )
};