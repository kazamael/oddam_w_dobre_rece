import React from 'react';
import {Element} from 'react-scroll'
import * as firebase from "firebase";




export class HomeThreeColumns extends React.Component {
    state={
        bags:0,
        organization:0,
        collection:0
    };

    componentDidMount() {
        let bagValue=0;
        let organizationValue=0;
        let collectionValue=0;
        firebase.database().ref('user/').on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            const usersListEl = usersList.map((el, i) => (
                el = Object.keys(usersList[i]).map(key => ({
                    ...usersList[i][key],
                    uid: key,
                }))
            ));
            usersListEl
                .map(el=>el=el
                    .map(el1=>el1=el1.value)
                    .forEach(el2=>{
                        if(!isNaN(el2)){
                            bagValue+=parseFloat(el2);
                            collectionValue+=1;
                        }
                    })
                );

            usersListEl
                .map(el=>el=el
                    .map(el1=>el1=el1.place)
                    .forEach(el2=>{
                        if(el2 !==undefined){
                            organizationValue+=1;
                        }
                    })
                );



            this.setState({
                bags:bagValue,
                organization:organizationValue,
                collection:collectionValue
            })
        })



    };

    render() {

        return (

        <Element name="start">
            <section className="three_back">
                <div className="container three_content">
                    <div className="three_box">
                        <h1 className="three_box_title">{this.state.bags}</h1>
                        <h4 className="three_box_title4">Oddanych Worków</h4>
                        <p className="three_box_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad dolorem doloribus
                            eos
                            fuga labore officia quisquam quos sint voluptate.
                        </p>
                    </div>
                    <div className="three_box">
                        <h1 className="three_box_title">{this.state.organization}</h1>
                        <h4 className="three_box_title4">Wspartych Organizacji</h4>
                        <p className="three_box_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad dolorem doloribus
                            eos
                            fuga labore officia quisquam quos sint voluptate.
                        </p>
                    </div>
                    <div className="three_box">
                        <h1 className="three_box_title">{this.state.collection}</h1>
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
    }
};