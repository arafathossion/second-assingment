import React from 'react';
import { WelcomeContainer, WelcomeContainerButtonContainer } from '../../Styles/Container.Style';
import { H2, H4 } from '../../Styles/Element.Style';

const Welcome = () => {
    return (
        <WelcomeContainer>
            <div>
                <H2 color='white' textAlign="center">Welcome to your new digital HQ.</H2>
                <WelcomeContainerButtonContainer>
                    <a href="https://slack.com/intl/en-in/get-started" >Try for free</a>
                    <a href="https://slack.com/intl/en-in/contact-sales?geocode=en-in&amp;from_home=1" >Talk to sales</a>
                </WelcomeContainerButtonContainer>
            </div>
        </WelcomeContainer>
    );
};

export default Welcome;