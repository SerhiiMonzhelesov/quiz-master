import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
`;

export const ButtonStyled = styled.button`
  width: 100%;
  max-width: 335px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 16px;
  border-radius: 30px;
  border: 1px solid var(--border-color-30);
  background-color: transparent;
  color: var(--text-color-100);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: -0.14px;

  &.forChildren {
    width: 131px;
  }
  &.forAdults {
    width: 121px;
  }
  p {
    display: block;
  }
`;

export const FaChevronDownS = styled(FaChevronDown)`
  width: 14px;
  height: 14px;
  transition: transform 300ms linear;
  &:hover {
    transform: rotate(180deg);
  }
`;

export const OptionsList = styled.ul`
  display: none;
  &.openSelect {
    height: 126px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: absolute;
    left: 0;
    top: calc(100% + 8px);
    width: 100%;
    padding: 15px 4px 15px 8px;
    background: var(--blue-background);
    border-radius: 20px;
    font-family: GilroyRegular, sans-serif;
    color: var(--text-color-100);
  }
  &::-webkit-scrollbar {
    width: 5px;
    scrollbar-width: thin;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0077ff;
  }
`;

export const OptionS = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;

  .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .custom-checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  .custom-checkbox + label::before {
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid var(--border-color-60);
    border-radius: 4px;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  .custom-checkbox:checked + label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
  .custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    cursor: pointer;
    scale: 1.1;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  p {
    display: block;
    cursor: pointer;
    font-family: GilroyRegular, sans-serif;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.14px;
  }
`;

export const FiSearchS = styled(FiSearch)`
  outline: 1px solid red;
  width: 14px;
  height: 14px;
`;
