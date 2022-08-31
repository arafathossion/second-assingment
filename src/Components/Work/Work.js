import React from 'react';
import Content from '../Content/Content';
import Video from '../Video/Video';
import { AllContainer } from '../../Styles/Container.Style';
import { H2,AllP } from '../../Styles/Element.Style' 

const Work = () => {
    return (
        <AllContainer>
             <div>
                <H2>Choose how you want to work</H2>
                <AllP>In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.</AllP>
                <a href="#">Learn more about flexible communication</a>
            </div>
          
            <video autoPlay muted loop width='100%'><source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm" type="video/webm"/><source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/flexibility.mp4" type="video/mp4"/></video>
           
           
        </AllContainer>
    );
};

export default Work;