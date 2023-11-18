import styled from "styled-components";

export const AttributeTitles = styled.p`
  color: #f4f4f4;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.16px;
`;

//=========================================

export const SetAttributeDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  width: 260px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media only screen and (min-width: 768px) {
    width: 474px;
    column-gap: 64px;
    flex-wrap: nowrap;
    margin-top: 32px;
    margin-bottom: 32px;
  }
  @media only screen and (min-width: 1440px) {
    width: 110px;
    flex-direction: column;
    row-gap: 64px;
    margin: 0;
  }
`;

export const SelectAudienceDiv = styled.div`
  width: 100%;
  max-width: 110px;

  @media only screen and (min-width: 1440px) {
    padding-top: 16px;
  }
`;

export const InputsWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;

  @media only screen and (min-width: 375px) {
    max-width: 110px;
  }
  @media only screen and (min-width: 768px) {
    max-width: 110px;
  }
`;

export const ChooseAudienceLabel = styled.label`
  cursor: pointer;
  font-size: 14px;
  letter-spacing: -0.16px;
  position: relative;
  padding-left: 21px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  & input {
    display: none;
  }

  & span {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    border: 1px solid #205bf1;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
  }

  & span:after {
    content: "";
    height: 7px;
    width: 7px;
    background: #205bf1;
    display: block;
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    left: 50%;
    top: 50%;
  }

  & input[type="radio"]:checked ~ span:after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

//=========================================

export const AttributeCategorySelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100%;
  max-width: 110px;
  margin-top: 16px;
  padding: 0;
  background-color: transparent;
  color: var(--text-color-100);
  cursor: pointer;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: -0.14px;
  border: none;

  & option {
    background: var(--blue-background);
    color: var(--text-color-100);
  }
`;

//=========================================

export const SelectColorDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  column-gap: 8px;
  margin-top: 16px;

  @media only screen and (min-width: 1440px) {
    flex-direction: column;
    align-items: start;
    row-gap: 8px;
  }
`;

export const ColorLabel = styled.label`
  & input {
    display: none;
  }
  & span {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    &.blue {
      background-color: #43a8d3;
    }
    &.viola {
      background-color: #6636c5;
    }
    &.orange {
      background-color: #e65368;
    }
  }
  & input[type="radio"]:checked + span {
    border: 1px solid #f4f4f4;
  }
`;

//=========================================
