import styled from "styled-components";

export const BtnConfirmSettingsS = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 280px;
  width: 100%;
  height: 48px;
  border-radius: 30px;
  font-family: "GilroyBold";
  font-size: 16px;
  color: var(--text-color-100);
  background-color: var(--blue-background);
  margin: 0 auto;
  border: transparent;
  transform: scale(1);
  transition: transform 250ms linear;
    
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &.isDisabled {
    background-color: transparent;
    cursor: not-allowed;
    border: 1px solid var(--text-color-60);
    color: var(--text-color-60);
    transform: scale(1);
    }
  
  @media screen and (max-width: 768px) {
    max-width: 295px;
    font-size: 14px;
    line-height: 1.1;

  &.isDisabled {
    font-size: 14px;;
    }
  }
`;