import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButtonSeeALL = styled(Link)`
  color: var(--text-color-100);
  font-size: 3.73vw;
  font-style: normal;
  font-weight: normal;
  line-height: 1.14;
  letter-spacing: -0.01em;
  text-decoration-line: underline;
  font-family: GilroyBold, sans-serif;

  @media (min-width: 375px) {
    font-size: 14px;
  }
  
  @media (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.16px;
    line-height: 1;
  }
`