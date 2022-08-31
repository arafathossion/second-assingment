import React from 'react';
import Content from '../Content/Content';
import Video from '../Video/Video';
import { AllContainer } from '../../Styles/Container.Style';
import { H2,AllP } from '../../Styles/Element.Style' 

const Team = () => {
    return (
        <AllContainer>

                <video autoPlay loop muted width='100%'><source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.webm" type="video/webm" /><source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness.mp4" type="video/mp4" /></video>

            <div>
                <H2>Bring your team together</H2>
                <AllP>At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</AllP>
                <a href="#">Learn more about channels</a>
            </div>
        </AllContainer>
    );
};

export default Team;