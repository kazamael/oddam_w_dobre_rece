import React from 'react';



export const GiveHeader = () => {
    return (
        <section className="give_header">
            <div className="give_box">
                <h1 className="give_title">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
                <img className="give_decortion" src={require("../../assets/Decoration.svg")} alt=""/>
                <h2 className="give_title2">Wystarczą 4 proste kroki:</h2>
                <ul className="give_list">
                    <li className="give_list_item">
                        <h3 className="give_list_title">1</h3>
                        <span className="give_list_text">Wybierz rzeczy</span>
                    </li>
                    <li className="give_list_item">
                        <h3 className="give_list_title">2</h3>
                        <span className="give_list_text">Spakuj je w worki</span>
                    </li>
                    <li className="give_list_item">
                        <h3 className="give_list_title">3</h3>
                        <span className="give_list_text">wybierz fundację</span>
                    </li>
                    <li className="give_list_item">
                        <h3 className="give_list_title">4</h3>
                        <span className="give_list_text">zamów kuriera</span>
                    </li>
                </ul>
            </div>

        </section>
    )
};