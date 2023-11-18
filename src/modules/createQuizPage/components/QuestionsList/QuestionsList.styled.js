import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: var(--white-background);
  width: 335px;
  min-height: 320px;
  padding: 40px 20px;
  & p {
    padding-bottom: 32px;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }

  @media only screen and (min-width: 768px) {
    width: 240px;
  height: 630px;
  }

  @media only screen and (min-width: 1440px) {
    width: 343px;
  height: 589px;
  padding: 32px;
  }
`;
export const QuestionList = styled.li`
  font-size: 16px;
  /* width: 204px; */
  justify-content: space-between;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  margin: 8px 0;
  list-style-type: none;
  &:not(:last-child) {
    border-bottom: 1px solid #ccc; /* підкреслення для всіх елементів, окрім останнього. */
  }
`;
export const SelectStyledQuiz = styled.button`
  margin-bottom: 8px;
  margin-top: 32px;
  width: 100%;
  max-width: 335px;
  height: 48px;
  padding: 15px 18px;
  border-radius: 30px;
  border: 1px solid var(--border-color-30);
  background-color: transparent;
  color: #F4F4F4;
  color: var(--text-color-100);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29; /* 128.571% */
  letter-spacing: -0.14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Down = styled(FiChevronDown)`
  width: 28px;
  height: 28px;
  stroke: var(--text-color-100);
`;
export const Up = styled(FiChevronUp)`
  width: 28px;
  height: 28px;
  stroke: var(--text-color-100);
`;
export const DropdownList = styled.div`
  left: 0;
  display: block;
  padding: 18px;
  border-radius: 15px;
  background: var(--blue-background);
  li:first-child {
    margin-bottom: 4px;
  }
  li > button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    color: inherit;
    width: 100%;
    text-align: left;
    height: 24px;
  }
`;