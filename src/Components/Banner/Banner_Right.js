import React from 'react';
import Button from '../Button/Button';

const Banner_Right = () => {
    return (
        <>
            <video aria-describedby="hero" autoPlay loop muted width='100%'>
                <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm" type="video/webm" />
                <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/hero-product-ui.mp4" type="video/mp4" />
            </video>
        </>
    );
};

export default Banner_Right;