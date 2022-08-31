import React from 'react';
import { AllContainer } from '../../Styles/Container.Style';
import { H2, AllP } from '../../Styles/Element.Style'

const Tools = () => {
    return (
        <AllContainer>

            <video autoPlay loop muted width='100%'><source src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm" type="video/webm" /><source src="https://a.slack-edge.com/7460822/marketing/img/homepage/e2e-prospects/inline/animations/mp4/speed.mp4" type="video/mp4" /></video>

            <div>
                <H2>Move faster with your tools in one place</H2>
                <AllP>With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.</AllP>
                <a href="#">Learn more about the Slack platform </a> ➡
            </div>
        </AllContainer>
    );
};

export default Tools;