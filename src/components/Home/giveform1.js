import React from 'react';


export const GiveForm1 = (props) => {
    const {onClick,onNextClick} = props;


    return (
        <>
            <section className="give_section">
                <div className="container form1_header">
                    <h1 className="form1_header_title">Ważne!</h1>
                    <span className="form1_header_text">
                            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
                        </span>
                </div>
            </section>
            <section className="form1_content">
                <div className="form1_content2 container">
                    <span className="form1_step">Krok 1/4</span>
                    <form className="form1_form" action="">
                        <h2 className="form1_title">Zaznacz co chcesz oddać:</h2>
                        <label className="form1_container" htmlFor="">
                            ubrania, które nadają się do ponownego użycia
                            <input onClick={onClick} type="radio" name="radio"
                                   value="ubrania, które nadają się do ponownego użycia"/>
                            <span className="form1_checkmark"/>
                        </label>
                        <label  className="form1_container" htmlFor="">
                            ubrania, do wyrzucenia
                            <input onClick={onClick}  type="radio" name="radio" value="ubrania, do wyrzucenia"/>
                            <span className="form1_checkmark"/>
                        </label>
                        <label className="form1_container" htmlFor="">
                            zabawki
                            <input onClick={onClick} type="radio" name="radio" value="zabawki"/>
                            <span className="form1_checkmark"/>
                        </label>
                        <label className="form1_container" htmlFor="">
                            książki
                            <input onClick={onClick} type="radio" name="radio" value="książki"/>
                            <span className="form1_checkmark"/>
                        </label>
                        <label className="form1_container" htmlFor="">
                            inne
                            <input onClick={onClick} type="radio" name="radio" value="inne"/>
                            <span className="form1_checkmark"/>
                        </label>
                    </form>
                    <button onClick={onNextClick} className="form1_button">Dalej</button>
                </div>
            </section>
        </>
    )
};