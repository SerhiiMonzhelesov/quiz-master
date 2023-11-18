import styled from 'styled-components';

export const StyledMediumBtn = styled.button`
padding: 15px 18px;
border-radius: 30px;
border: 1px solid var(--border-color-60);
color: var(--text-color-100);
background-color: transparent;
font-size: 3.73vw;
font-family: GilroyBold, sans-serif;
letter-spacing: -0.01em;
line-height: 1.14;
transition: transform 0.2s ease-in-out;

&.accent {
    padding: 16px 18px;
    border: none;
    background-color: var(--blue-background);
}

&.nav-accent{
    padding: 16px 18px;
    border: none;
    background-color: var(--star-color-100);
    color: var(--accent-color);
}

@media only screen and (min-width: 375px) {
    font-size: 14px;
}

@media only screen and (min-width: 768px) {
    padding: 15px 31px;
    border-radius: 30px;
    line-height: 1;
    font-size: 16px;
    letter-spacing: -0.16px;

    &.accent, &.nav-accent {
    padding: 16px 32px;
}
  }
`;