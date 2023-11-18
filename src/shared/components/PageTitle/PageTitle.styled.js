import styled from "styled-components";

export const StyledPageTitle = styled.h2`
  color: var(--text-color-100);
  font-family: GilroyBold, sans-serif;
  font-size: 8.53vw;
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.01em;
  line-height: 1.18;

  @media only screen and (min-width: 375px) {
    font-size: 32px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 44px;
    letter-spacing: -0.44px;
    line-height: 48px;
  }
`;
