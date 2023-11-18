import styled from "styled-components";

export const StyledEmptyBlock = styled.p`
color: var(--text-color-40);
font-family: GilroyBold, sans-serif;
font-weight: normal;
line-height: 1; 
margin-bottom: 50px;
font-size: 18vw;

@media (min-width: 375px) {
    font-size: 60px;
  }

@media (min-width: 768px) {
    font-size: 80px;
  }

  @media (min-width: 1440px) {
    font-size: 100px;
  }
`;


