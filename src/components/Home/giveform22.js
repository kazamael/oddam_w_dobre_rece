import React from 'react';


export class GiveForm2 extends React.Component {
    state={
        select:false,
        value:"- Wybierz -"
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
        const{onPrevClick,onNextClick}=this.props
        return (
            <>
                <section className="give_section">
                    <div className="container form1_header">
                        <h1 className="form1_header_title">Ważne!</h1>
                        <span className="form1_header_text">
                           Wszystkie rzecy do oddania zapakuj w 60l worki. Dokładną instukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.
                        </span>
                    </div>
                </section>
                <section className="form1_content">
                    <div className="form1_content2 container">
                        <span className="form1_step">Krok 2/4</span>
                        <form className="form1_form" action="">
                            <h2 className="form1_title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                            <div className="dropdown">
                                <span>Liczba 60l worków: </span>
                                <div className="dropdown_thing">
                                    <button name="selected" onClick={this.onSelectClick}  value={this.state.value} className="drop-btn">{this.state.value}</button>
                                    {this.state.select &&
                                    <div className="dropdown_content">
                                        <button name="selected"  onClick={this.onSelectedClick}  value="1" className="drop_drop">1</button>
                                        <button name="selected" onClick={this.onSelectedClick} value="2" className="drop_drop">2</button>
                                        <button name="selected" onClick={this.onSelectedClick} value="3" className="drop_drop">3</button>
                                        <button name="selected" onClick={this.onSelectedClick} value="4" className="drop_drop">4</button>
                                        <button name="selected" onClick={this.onSelectedClick} value="5" className="drop_drop">5</button>
                                    </div>
                                    }
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