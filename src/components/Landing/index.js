import React from 'react';

import {HomeHeader} from "./homeheader";
import {HomeThreeColumns} from "./homethreecolumns";
import {HomeSimpleSteps} from "./homesimplesteps";
import {HomeAboutUs} from "./homeaboutus";
import {HomeWhoWeHelp} from "./homewhowehelp";
import {HomeContact} from "./homecontact";
import '../../scss/main.scss'

const LandingPage = () => (
    <>
        <HomeHeader/>
        <HomeThreeColumns/>
        <HomeSimpleSteps/>
        <HomeAboutUs/>
        <HomeWhoWeHelp/>
        <HomeContact/>
    </>
);
export default LandingPage;