import React from 'react';


export class GiveFormThanks extends React.Component {
    render() {
        return (
            <>
                <section className="form1_content form_thanks">
                    <div className="form_thanks_content">
                        <h1 className="form_thanks_title">
                            Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.
                        </h1>
                        <img className="form_thanks_img" src={require("../../assets/Decoration.svg")} alt=""/>
                        <button onClick={this.props.onAnywhereClick} className="form_thanks_button">Nowy formularz</button>
                    </div>
                </section>

            </>
        )
    }
};