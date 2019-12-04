import React from 'react';


import {HomeHeader} from "./homeheader";
import {HomeThreeColumns} from "./homethreecolumns";
import '../../scss/main.scss'

export const Home = () => {
    return (
        <>
            <div className="header_section">
                <HomeHeader/>
            </div>
            <HomeThreeColumns/>
        </>
    )
};