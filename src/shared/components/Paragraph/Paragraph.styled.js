import styled from "styled-components";

export const StyledParagraph = styled.p`
  line-height: 1.28em;
  letter-spacing: -0.01em;
  color: var(--text-color-100);
  font-size: 3.73vw;

  @media only screen and (min-width: 375px) {
    font-size: 14px;
  }

  @media only screen and (min-width: 768px) {
    letter-spacing: -0.16px;
    font-size: 16px;
    line-height: 20px;
  }
`;
