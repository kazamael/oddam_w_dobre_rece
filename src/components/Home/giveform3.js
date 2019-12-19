import React from 'react';


export class GiveForm3 extends React.Component {
    state = {
        select: false,
        value: "- Wybierz -",
    };

    onSelectClick = (e) => {
        e.preventDefault();
        if(this.state.select) {
            this.setState({
                select: false
            })
        } else {
            this.setState({
                select: true
            })
        }
    };

    onSelectedClick = (e) => {
        this.props.onClick(e);
        e.preventDefault();
        this.setState({
            value:e.target.value,
            select:false
        })
    };

    render() {
        const {select, value} = this.state
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
                        <span className="form1_step">Krok 3/4</span>
                        <form className="form1_form" action="">
                            <h2 className="form1_title">Lokalizacja:</h2>
                            <div className="dropdown2">
                                <div className="dropdown_thing2">
                                    <button onClick={this.onSelectClick} name="selected" className="drop-btn">{value}</button>
                                    {select &&
                                    <div className="dropdown_content2">
                                        <button onClick={this.onSelectedClick} name="selected2" value="Poznań" className="drop_drop">Poznań</button>
                                        <button onClick={this.onSelectedClick} name="selected2" value="Warszawa" className="drop_drop">Warszawa</button>
                                        <button onClick={this.onSelectedClick} name="selected2" value="Kraków" className="drop_drop">Kraków</button>
                                        <button onClick={this.onSelectedClick} name="selected2" value="Wrocław" className="drop_drop">Wrocław</button>
                                        <button onClick={this.onSelectedClick} name="selected2" value="Katowice" className="drop_drop">Katowice</button>
                                    </div>
                                    }
                                </div>
                            </div>
                            <h3 className="form3_title">Komu chcesz pomóc ?</h3>
                            <div className="form3_checkboxes">
                                <label className="form3_container" htmlFor="">
                                    <input onClick={this.props.onClick2} type="checkbox" value="dzieciom"/>
                                    <span className="form3_checkboxes_text">dzieciom</span>
                                </label>
                                <label className="form3_container" htmlFor="">
                                    <input onClick={this.props.onClick2} type="checkbox" value="samotnym matkom"/>
                                    <span className="form3_checkboxes_text">samotnym matkom</span>
                                </label>
                                <label className="form3_container" htmlFor="">
                                    <input onClick={this.props.onClick2} type="checkbox" value="bezdomnym"/>
                                    <span className="form3_checkboxes_text">bezdomnym</span>
                                </label>
                                <label className="form3_container" htmlFor="">
                                    <input onClick={this.props.onClick2} type="checkbox" value="niepełnosprawnym"/>
                                    <span className="form3_checkboxes_text">niepełnosprawnym</span>
                                </label>
                                <label className="form3_container" htmlFor="">
                                    <input onClick={this.props.onClick2} type="checkbox" value="osobom starszym"/>
                                    <span className="form3_checkboxes_text">osobom starszym</span>
                                </label>
                            </div>
                            <h3 className="form3_title">Wpisz nazwę konkretnej organizacji (opcjonalne)</h3>
                            <input className="form3_input" onChange={this.props.onClick} type="text" name="selected2" value={this.props.selected3}/>
                        </form>
                        <div className="form2_buttons">
                            <button onClick={this.props.onPrevClick} className="form1_button">Wstecz</button>
                            <button onClick={this.props.onNextClick} className="form1_button">Dalej</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
};