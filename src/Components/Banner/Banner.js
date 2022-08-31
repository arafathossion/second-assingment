import React from 'react';
import Banner_Left from './Banner_Left';
import Banner_Right from './Banner_Right';
import { BannerContainer } from '../../Styles/Container.Style';

const Banner = () => {
    return (
        <BannerContainer>
            <Banner_Left />
            <Banner_Right />
        </BannerContainer>
    );
};

export default Banner;