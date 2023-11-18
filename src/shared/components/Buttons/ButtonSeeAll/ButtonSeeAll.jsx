import React from 'react';
import { StyledButtonSeeALL } from './ButtonSeeAllStyled';

const ButtonSeeAll = ({ link }) => {
    return (
        <StyledButtonSeeALL to={link}>
           See all
        </StyledButtonSeeALL>
    );
};

export default ButtonSeeAll;