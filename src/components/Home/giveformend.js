import React from 'react';


export class GiveFormEnd extends React.Component {
    render() {
        const {radio,selected,selected2,selected3,street,city,phone,post,date,time,comments,onPrevClick,onSend} = this.props
        return (
            <>
                <section className="form1_content">
                    <div className="container formend_back">
                        <h1 className="formend_title">Podsumowanie Twojej darowizny</h1>
                        <div className="formend_content">
                            <h2 className="formend_content_title">Oddajesz:</h2>
                            <div className="formend_content_item">
                                <img className="formend_content_img" src={require("../../assets/Icon-1.svg")} alt=""/>
                                <span className="formend_content_text">{selected} worki, {radio}, {selected3}</span>
                            </div>
                            <div className="formend_content_item">
                                <img className="formend_content_img" src={require("../../assets/Icon-4.svg")} alt=""/>
                                <span className="formend_content_text">dla lokalizacji: {selected2}</span>
                            </div>
                        </div>
                        <div className="formend_data">
                            <div className="formend_data_item">
                                <h2 className="formend_data_title">Adres odbioru:</h2>
                                <div className="formend_data_data">
                                <span className="formend_data_question">
                                    Ulica
                                </span>
                                    <span className="formend_data_answer">
                                    {street}
                                </span>
                                </div>
                                <div className="formend_data_data">
                                <span className="formend_data_question">
                                    Miasto
                                </span>
                                    <span className="formend_data_answer">
                                    {city}
                                </span>
                                </div>
                                <div className="formend_data_data">
                                <span className="formend_data_question">
                                    Kod pocztowy
                                </span>
                                    <span className="formend_data_answer">
                                    {post}
                                </span>
                                </div>
                                <div className="formend_data_data">
                                <span className="formend_data_question">
                                    Numer telefonu
                                </span>
                                    <span className="formend_data_answer">
                                    {phone}
                                </span>
                                </div>
                            </div>
                            <div className="formend_data_item">
                                <h2 className="formend_data_title">Termin odbioru:</h2>
                                <div className="formend_data_data">
                                <span className="formend_data_question">
                                    Data
                                </span>
                                    <span className="formend_data_answer">
                                    {date}
                                </span>
                                </div>
                                <div className="formend_data_data">
                                <span className="formend_data_question">
                                    Godzina
                                </span>
                                    <span className="formend_data_answer">
                                    {time}
                                </span>
                                </div>
                                <div className="formend_data_data">
                                <span className="formend_data_question">
                                    Uwagi dla kuriera
                                </span>
                                    <span className="formend_data_answer">
                                    {comments}
                                </span>
                                </div>

                            </div>
                        </div>
                        <div className="form2_buttons">
                            <button onClick={onPrevClick} className="form1_button">Wstecz</button>
                            <button onClick={onSend} className="form1_button">Potwierdzam</button>
                        </div>
                    </div>
                </section>

            </>
        )
    }
};