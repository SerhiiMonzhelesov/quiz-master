import styled from "styled-components";

export const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  max-width: 335px;
  padding: 15px 18px 15px 40px;
  border-radius: 30px;

  border: 1px solid var(--border-color-30);
  background-color: transparent;
  color: var(--text-color-100);
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.14px;

  &::placeholder {
    color: var(--text-color-100);
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.14px;
  }
`;
