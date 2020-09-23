import React from 'react'
import './LandingPage.css'
import LandingPageHeader from "./LandingPageHeader/LandingPageHeader";
import TeamTask from "./TeamTask/TeamTask";
import InfoView from "./InfoView/InfoView";
import RobotView from "./RobotView/RobotView";
import HowWork from "./howWork/howWork";
import LandingPageHeaderBottom from "./LandingPageHeaderBottom/LandingPageHeaderBottom";
import YourWay from "./YourWay/YourWay";
import CompaniesTrello from "./CompaniesTrello/CompaniesTrello";

const LandingPage = props => {
    return(
        <div>
            <LandingPageHeader/>
            <LandingPageHeaderBottom/>
            <TeamTask/>
            <InfoView/>
            <RobotView/>
            <HowWork/>
            <YourWay/>
            <CompaniesTrello/>
        </div>
    )
}

export default LandingPage;