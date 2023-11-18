import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
// import Select from "react-select";
//import ReactSelect from "react-select";

// export const SelectStyled = styled(Select)`
//     outline: 1px solid red;
//     width: 335px;
//     height: 48px;
//     padding: 15px 18px;
//     border-radius: 30px;
// `

export const SelectStyled = styled.select`
  width: 100%;
  max-width: 335px;
  height: 48px;
  padding: 15px 18px;
  border-radius: 30px;

  border: 1px solid var(--border-color-30);
  background-color: transparent;
  /* color: #F4F4F4; */
  color: var(--text-color-100);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.29; /* 128.571% */
  letter-spacing: -0.14px;

  &.filters {
    width: 94px;
  }

  &.forChildren {
    width: 131px;
  }
  &.forAdults {
    width: 121px;
  }
`;

export const Options = styled.option`
  background: blue;
  color: red;
  `;

export const FiSearchS = styled(FiSearch)`
outline: 1px solid red;
  width: 14px;
  height: 14px;
`;

/* Добавим кастомные стрелки с использованием псевдоэлементов */
// .custom-select::after {
//     content: "\25BC"; /* Символ стрелки вниз */
//     position: absolute;
//     top: 50%;
//     right: 10px;
//     transform: translateY(-50%);
//   }

//   /* Стилизуем опции */
//   .custom-select option {
//     background: white;
//     color: #333;
//   }

// .custom-select::after {
//     content: "";
//     position: absolute;
//     top: 50%;
//     right: 10px;
//     transform: translateY(-50%);
//     width: 20px;
//     height: 20px;
//     background: url("путь-к-вашей-иконке.svg") no-repeat center;
//     background-size: 100%;
//     cursor: pointer;
//   }
