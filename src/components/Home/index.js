import React from 'react';
import {AuthUserContext, withAuthorization} from '../Session';
import * as firebase from "firebase";

import {HomeContact} from "../Landing/homecontact";
import {GiveHeader} from "./giveheader";
import '../../scss/main.scss'
import {GiveForm1} from "./giveform1";
import {GiveForm2} from "./giveform22";
import {GiveForm3} from "./giveform3";
import {GiveForm4} from "./giveform4";
import {GiveFormEnd} from "./giveformend";
import {GiveFormThanks} from "./giveformthanks";


export const Home = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser && <Home1 authUser={authUser}/>
        }
    </AuthUserContext.Consumer>
)

export class Home1 extends React.Component {
    state = {
        radio: "",
        selected: "",
        selected2: "",
        selected3: [],
        street: "",
        city: "",
        post: "",
        phone: "",
        date: "",
        time: "",
        comments: "",
        num: 1
    };

    onSend = (e) => {
        const {authUser} = this.props;
        const {radio, selected, selected2, selected3, street, city, post, phone, date, time, comments} = this.state;
        firebase.database().ref('user/' + authUser.uid).push({
            item: radio,
            value: selected,
            place: selected2,
            toWho: selected3,
            street,
            city,
            post,
            phone,
            date,
            time,
            comments
        });
        this.setState({
            radio: "",
            selected: "",
            selected2: "",
            selected3: [],
            street: "",
            city: "",
            post: "",
            phone: "",
            date: "",
            time: "",
            comments: "",
            num: 6
        })
        e.preventDefault()
    };

    onGet = () => {
        const {authUser} = this.props;
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
            console.log(usersListEl)
        })
    };

    onAnywhereClick = () => {
      this.setState({
          num:1
      })
    };


    onClick = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state.comments))
    };

    onClick2 = (e) => {
        if (!this.state.selected3.find(el => el === e.target.value)) {
            this.setState({
                selected3: [...this.state.selected3, e.target.value]
            })
        } else {
            const arr = this.state.selected3;
            const toDelete = this.state.selected3.find(el => el === e.target.value);
            const toDeleteIndex = this.state.selected3.indexOf(toDelete);
            arr.splice(toDeleteIndex, 1);
            this.setState({
                selected3: arr
            })

        }
    };

    onNextClick = () => {
        this.setState({
            num: this.state.num + 1
        })
    };

    onPrevClick = () => {
        this.setState({
            num: this.state.num - 1
        })
    };


    render() {
        return (
            <div>
                <GiveHeader/>
                {
                    this.state.num === 1
                    &&
                    <GiveForm1
                        onNextClick={this.onNextClick}
                        onClick={this.onClick}
                    />
                }
                {
                    this.state.num === 2
                    &&
                    <GiveForm2
                        onNextClick={this.onNextClick}
                        onPrevClick={this.onPrevClick}
                        onClick={this.onClick}
                    />
                }
                {
                    this.state.num === 3
                    &&
                    <GiveForm3
                        onNextClick={this.onNextClick}
                        onPrevClick={this.onPrevClick}
                        onClick={this.onClick}
                        selected2={this.state.selected2}
                        onClick2={this.onClick2}
                    />
                }
                {
                    this.state.num === 4
                    &&
                    <GiveForm4
                        onNextClick={this.onNextClick}
                        onPrevClick={this.onPrevClick}
                        onClick={this.onClick}
                        street={this.state.street}
                        city={this.state.city}
                        phone={this.state.phone}
                        post={this.state.post}
                        date={this.state.date}
                        time={this.state.time}
                        comments={this.state.comments}
                    />
                }
                {
                    this.state.num === 5
                    &&
                    <GiveFormEnd
                        onSend={this.onSend}
                        onPrevClick={this.onPrevClick}
                        street={this.state.street}
                        city={this.state.city}
                        phone={this.state.phone}
                        post={this.state.post}
                        date={this.state.date}
                        time={this.state.time}
                        comments={this.state.comments}
                        radio={this.state.radio}
                        selected={this.state.selected}
                        selected2={this.state.selected2}
                        selected3={this.state.selected3}

                    />
                }
                {
                    this.state.num === 6
                    &&
                    <GiveFormThanks
                        onAnywhereClick={this.onAnywhereClick}
                    />
                }


                <HomeContact />
            </div>
        )
    }

};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);