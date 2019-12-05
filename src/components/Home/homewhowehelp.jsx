import React from 'react';
import {Element} from 'react-scroll'

const foundations = [
    {
        number: 1,
        name:"fundacja 1",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 2,
        name:"fundacja 2",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 3,
        name:"fundacja 3",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 4,
        name:"fundacja 4",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 5,
        name:"fundacja 5",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 6,
        name:"fundacja 6",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 7,
        name:"fundacja 7",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 8,
        name:"fundacja 8",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
];

const organizations = [
    {
        number: 1,
        name:"organizacja 1",
        text: 'aaaa aaaaa  aaaaa aaaaaa aaaaaa',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 2,
        name:"organizacja 2",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 3,
        name:"organizacja 3",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 4,
        name:"organizacja 4",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 5,
        name:"organizacja 5",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    }
];

const local = [
    {
        number: 1,
        name:"zbiórka 1",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 2,
        name:"zbiórka 2",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    },
    {
        number: 3,
        name:"zbiórka 3",
        text: 'Lorem ipsum dolor sit amet, consectur adipiscing elit',
        address: 'daleko,blisko,daleko'
    }
];


export class HomeWhoWeHelp extends React.Component {
    state = {
        species: foundations,
        buttons: [],
        actualbutton: 1
    };

    componentDidMount() {
        if(this.state.species.length>3) {
            const newArr=[];
            let number=1;
            this.state.species
                .map(el=>el=el.number)
                .forEach(el=>{
                    if(el ===1 || el % 3 ===0) {
                        newArr.push(number);
                        number++
                    }
                });
            this.setState({
                buttons:newArr
            })
        }
    };

    handleButtonClick = thing => {
        if(thing.length>3) {
            const newArr=[];
            let number=1;
            thing
                .map(el=>el=el.number)
                .forEach(el=>{
                    if(el ===1 || el % 3 ===0) {
                        newArr.push(number);
                        number++
                    }
                });
            this.setState({
                buttons:newArr
            })
        }
      this.setState({
          species:thing,
          actualbutton:1
      })
    };

    handlePageClick = (e) => {
        this.setState({
            actualbutton:e
        })
}

    render() {
        const {species, buttons,actualbutton} = this.state;
        return (

            <Element name="whowehelp">
                <section className="who_section">
                    <div className="who_header">
                        <h1 className="who_header_title">Komu pomagamy?</h1>
                        <img className="who_header_decoration" src={require("../../assets/Decoration.svg")} alt=""/>
                        <div className="who_header_buttons">
                            <button  onClick={this.handleButtonClick.bind(this, foundations)} className="who_header_button">Fundacjom</button>
                            <button  onClick={this.handleButtonClick.bind(this, organizations)} className="who_header_button">Organizacjom pozarządowym</button>
                            <button  onClick={this.handleButtonClick.bind(this, local)} className="who_header_button">Lokalnym zbiórkom</button>
                        </div>
                        <p className="who_header_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum enim est id, impedit
                            libero molestias officiis perspiciatis velit veritatis! consectetur adipisicing elit. Cum
                            dolorum enim est id, impedit libero molestias officiis perspiciatis
                        </p>
                    </div>

                    {species.map(el => {
                        if(el.number>(actualbutton-1)*3 && el.number < (actualbutton*3)+1){
                            return (
                                <div key={el.number} className="who_content">
                                    <div className="who_content_items">
                                        <div className="who_content_item">
                                            <h3 className="who_content_title">{el.name}</h3>
                                            <span className="who_content_text">{el.text}</span>
                                        </div>
                                        <span className="who_content_address">{el.address}o</span>
                                    </div>
                                </div>
                            )
                        }
                    }
                        )}
                    {buttons !==0 &&
                    <div  className="who_content_buttons">
                        {buttons.map(el=>(
                            <button onClick={this.handlePageClick.bind(this, el)} key={el} className="who_content_button">{el}</button>
                        ))}
                    </div>
                    }



                </section>


            </Element>
        )
    }
}