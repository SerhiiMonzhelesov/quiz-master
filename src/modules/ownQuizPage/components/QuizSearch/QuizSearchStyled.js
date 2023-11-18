import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const FormWrapper = styled.form`
  position: relative;
`;
export const BtnSearch = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: transparent;
  top: 50%;
  transform: translateY(-50%);
  left: 18px;
`;

export const FiSearchS = styled(FiSearch)`
  width: 14px;
  height: 14px;
  stroke: var(--text-color-100);
`;

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
