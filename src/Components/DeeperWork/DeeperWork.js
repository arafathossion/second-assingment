import React from 'react';
import { DeeperWorkContainer, SingleDeeperWorkContainer } from '../../Styles/Container.Style';
import { H4, Image, P } from '../../Styles/Element.Style';

const DeeperWork = () => {
    return (
        <> <H4 textAlign="center">Take a deeper dive into a new way to work</H4>
           <DeeperWorkContainer>
                
            <SingleDeeperWorkContainer>
                <P color='white'>Resource</P>
                <H4 color='white'>See how others are building their digital HQ</H4>
                <Image src="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-04.jpg" alt="gfd" width="100%" />

                <div>
                    <a color='white' href="#">Sell</a> <span>+</span>
                </div>
            </SingleDeeperWorkContainer>
            <SingleDeeperWorkContainer>
                <Image src="https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-02.jpg" alt="" width="100%" />
                <P color='black'>Resource</P>
                <H4>See how others are building their digital HQ</H4>
                <div>
                    <a href="#">Read More</a> <span>+</span>
                </div>
            </SingleDeeperWorkContainer>
            <SingleDeeperWorkContainer>
                <Image src="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-03.jpg" alt="" width="100%" />
                <P color='black'>Webinar</P>
                <H4>Embracing a digital-first approach to work</H4>
                <div>
                    <a href="#">Watch now</a> <span>+</span>
                </div>
            </SingleDeeperWorkContainer>
            <SingleDeeperWorkContainer>
                <Image src="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-04.jpg" alt="" width="100%" />
                <span>
                    <P color='black'>E-book</P>
                    <H4>Reinventing work: new imperatives for the future of working</H4>
                </span>
                <div>
                    <a href="#">Get e-book</a> <span>+</span>
                </div>
            </SingleDeeperWorkContainer>


        </DeeperWorkContainer>
        </>
     
    );
};

export default DeeperWork;