import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const FormWrapper = styled.form`
  position: relative;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const BtnSearch = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: transparent;
  top: 25px;
  transform: translateY(-50%);
  left: 18px;
`;

export const IconS = styled(FiSearch)`
  width: 14px;
  height: 14px;
  stroke: var(--text-color-100);
`;
