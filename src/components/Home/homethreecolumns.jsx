import React from 'react';
import {Element} from 'react-scroll'

export const HomeThreeColumns = () => {
    return (

        <Element name="start">
            <section className="three_back">
                <div className="container three_content">
                    <div className="three_box">
                        <h1 className="three_box_title">10</h1>
                        <h4 className="three_box_title4">Oddanych Worków</h4>
                        <p className="three_box_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad dolorem doloribus
                            eos
                            fuga labore officia quisquam quos sint voluptate.
                        </p>
                    </div>
                    <div className="three_box">
                        <h1 className="three_box_title">5</h1>
                        <h4 className="three_box_title4">Wspartych Organizacji</h4>
                        <p className="three_box_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad dolorem doloribus
                            eos
                            fuga labore officia quisquam quos sint voluptate.
                        </p>
                    </div>
                    <div className="three_box">
                        <h1 className="three_box_title">7</h1>
                        <h4 className="three_box_title4">Zorganizowanych zbiórek</h4>
                        <p className="three_box_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad dolorem doloribus
                            eos
                            fuga labore officia quisquam quos sint voluptate.
                        </p>
                    </div>
                </div>
            </section>
        </Element>
    )
};