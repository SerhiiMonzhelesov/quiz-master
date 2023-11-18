import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { FiTrash2 } from "react-icons/fi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import {
  QuestionsWrapper,
  QuestionList,
  SelectStyledQuiz,
  DropdownList,
} from "./QuestionsList.styled";

function QuestionsList({ setCurrentQuestion, currentQuestion }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const selectedOptions =
    currentQuestion.type === "" ? [] : [currentQuestion.type];

  const handleAdd = (value) => {
    setCurrentQuestion((prevState) => ({ ...prevState, type: value }));
  };

  const handleDeleteOption = (id) => {
selectedOptions.filter((option) => option.id !== id);


    /* зробити запит на видалення, перед цим додати на кнопку видалення id запитання */
  };

  return (
    <QuestionsWrapper>
      <p>Questions</p>
      <ul
        style={{
          maxHeight: isDropdownOpen ? "200px" : "auto",
          overflowY: "auto",
        }}
      >
        {selectedOptions.map((option, index) => (
          <QuestionList key={uuidv4()}>
            {index + 1}. {option.charAt(0).toUpperCase() + option.slice(1)}
            <span
              role="button"
              onClick={() => handleDeleteOption(option.id)}
              style={{ cursor: "pointer" }}
            >
              <FiTrash2 />
            </span>
          </QuestionList>
        ))}
      </ul>
      <SelectStyledQuiz
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        Create
        {isDropdownOpen ? (
          <FiChevronUp size={16} />
        ) : (
          <FiChevronDown size={16} />
        )}
      </SelectStyledQuiz>
      {isDropdownOpen && (
        <DropdownList>
          <ul>
            <li>
              <button onClick={() => handleAdd("quiz")}>
                Quiz <HiArrowLongRight size={24} />
              </button>
            </li>
            <li>
              <button onClick={() => handleAdd("true or false")}>
                True or false <HiArrowLongRight size={24} />
              </button>
            </li>
          </ul>
        </DropdownList>
      )}
    </QuestionsWrapper>
  );
}

export default QuestionsList;
