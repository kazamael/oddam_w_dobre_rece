import React from 'react';


export class GiveForm4 extends React.Component {
    render() {
        const {street,city,post,phone,date,time,comments,onClick,onNextClick,onPrevClick} = this.props
        return (
            <>
                <section className="give_section">
                    <div className="container form1_header">
                        <h1 className="form1_header_title">Ważne!</h1>
                        <span className="form1_header_text">
                            Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.Możesz też filtorwać organizacje po ich lokalizacji bądź celu ich pomocy.
                        </span>
                    </div>
                </section>
                <section className="form1_content">
                    <div className="form1_content2 container">
                        <span className="form1_step">Krok 4/4</span>
                        <form className="form1_form" action="">
                            <h2 className="form1_title">Podaj adres oraz termin odbioru rzeczy przez kuriera</h2>
                            <div className="form3_forms">
                                <div className="form3_form">
                                    <h3 className="form3_form_title">Adres odbioru:</h3>
                                    <label className="form3_form_label" htmlFor="">
                                        <span className="form3_form_text">Ulica</span>
                                        <input onChange={onClick} name="street" value={street} className="form3_form_input" type="text"/>
                                    </label>
                                    <label className="form3_form_label" htmlFor="">
                                        <span className="form3_form_text">Miasto</span>
                                        <input onChange={onClick}  name="city" value={city} className="form3_form_input" type="text"/>
                                    </label>
                                    <label className="form3_form_label" htmlFor="">
                                        <span className="form3_form_text">Kod pocztowy</span>
                                        <input onChange={onClick}  name="post" value={post} className="form3_form_input" type="text"/>
                                    </label>
                                    <label className="form3_form_label" htmlFor="">
                                        <span className="form3_form_text">Numer telefonu</span>
                                        <input onChange={onClick}  name="phone" value={phone} className="form3_form_input" type="text"/>
                                    </label>
                                </div>
                                <div className="form3_form">
                                    <h3 className="form3_form_title">Termin odbioru:</h3>
                                    <label className="form3_form_label" htmlFor="">
                                        <span className="form3_form_text">Data</span>
                                        <input onChange={onClick}  name="date" value={date} className="form3_form_input" type="text"/>
                                    </label>
                                    <label className="form3_form_label" htmlFor="">
                                        <span className="form3_form_text">Godzina</span>
                                        <input onChange={onClick}  name="time" value={time} className="form3_form_input" type="text"/>
                                    </label>
                                    <label className="form3_form_label" htmlFor="">
                                        <span className="form3_form_text">Uwagi dla kuriera</span>
                                        <textarea onChange={onClick}  name="comments" value={comments} className="form3_form_textarea"/>
                                    </label>
                                </div>
                            </div>

                        </form>
                        <div className="form2_buttons">
                            <button onClick={onPrevClick} className="form1_button">Wstecz</button>
                            <button onClick={onNextClick} className="form1_button">Dalej</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
};