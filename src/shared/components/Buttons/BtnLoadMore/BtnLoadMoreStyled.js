import styled from "styled-components";

export const ButtonS = styled.button`
  /* outline: 1px solid red; */
  width: 68px;
  height: 16px;
  border-color: transparent;
  background-color: transparent;
  color: var(--text-color-100);  
  font-family: GilroyBold, sans-serif;
  font-size: 14px;  
  line-height: 1.14;
  letter-spacing: -0.14px;
  text-decoration-line: underline;  
  
  @media (min-width: 768px) {
    width: 78px;
    font-size: 16px;
    letter-spacing: -0.16px;
    line-height: 1;
  }
`;
