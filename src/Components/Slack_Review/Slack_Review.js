import React from 'react';
import { SlackReviewButtonContainer, SlackReviewContainer, SlackReviewNumberContainer } from '../../Styles/Container.Style';
import { H2, P } from '../../Styles/Element.Style';

const Slack_Review = () => {
    return (
        <div>
            <H2 textAlign ="center">Teams large and small rely on Slack</H2>
            <P><span>Slack securely scales up to support collaboration at the world’s biggest companies.</span></P>
            <SlackReviewButtonContainer>
                <a href="#">Meet Slack for Enterprise</a>
                <a href="#">Talk to sales</a>
            </SlackReviewButtonContainer>
            <SlackReviewNumberContainer>
                    <div>
                        <span>85%</span>
                        <p>of users say Slack has improved communication</p>
                    </div>
                    <div>
                        <span>86%</span>
                        <p>of users say Slack has improved communication</p>
                    </div>
                    <div>
                        <span>88%</span>
                        <p>of users say Slack has improved communication</p>
                    </div>
            </SlackReviewNumberContainer>
            <SlackReviewContainer>
                <video class="video_capsule asset_height" autoPlay loop muted width="100%"><source src="https://a.slack-edge.com/93eaeb3/marketing/img/features/customer-awards/customer-awards-tmobile-quote-610x305@2x.mp4" type="video/mp4" /></video>
                <div>
                    <p>
                        ‘We were able to create a large virtual network of employees that can communicate as though they are together. There was a lot of disruption in terms of where we worked, but in terms of how we worked – very little disruption.’</p>
                        <div> <span>Mark Smith</span> <span>Senior Technical Product Manager, T-Mobile</span></div>
                        
                            <a href="#">See more customer stories</a>
                        
                </div>
            </SlackReviewContainer>
        </div>
    );
};

export default Slack_Review;