import React from 'react';


import {HomeHeader} from "./homeheader";
import {HomeThreeColumns} from "./homethreecolumns";
import {HomeSimpleSteps} from "./homesimplesteps";
import '../../scss/main.scss'

export const Home = () => {
    return (
        <>
            <div className="header_section">
                <HomeHeader/>
            </div>
            <HomeThreeColumns/>
            <HomeSimpleSteps/>
        </>
    )
};