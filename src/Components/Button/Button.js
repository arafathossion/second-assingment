import React from 'react';
import { ButtonContainer } from '../../Styles/Container.Style';

const Button = ({children}) => {
    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    );
};

export default Button;