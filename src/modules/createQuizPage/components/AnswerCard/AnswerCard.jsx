import React from "react";
import {
  StyledAnswerBoolean,
  StyledAnswerWrapper,
  StyledInputRadio,
  StyledLabelAnswer,
  StyledTextareaAnswer,
} from "./AnswerCard.styled";

const AnswerCard = ({
  letter,
  changeAttribute,
  checked,
  type,
  currentQuestion,
  selectAnswers,
  handleQuizChange,
}) => {
  const definedValueInput = () => {
    const idxInput = selectAnswers.indexOf(letter);
    for (let key in currentQuestion) {
      if (key.includes(`[${idxInput}][answer]`)) return currentQuestion[key];
    }
  };

  return (
    <StyledAnswerWrapper $quiz={type === "quiz" ? "quiz" : null}>
      <StyledLabelAnswer htmlFor={letter}>
        <p className="letter">{letter}:</p>
        {type === "quiz" ? (
          <StyledTextareaAnswer
            type="text"
            id={letter}
            name="answer"
            placeholder="Enter answer"
            value={definedValueInput() ? definedValueInput() : ""}
            onChange={handleQuizChange}
          />
        ) : (
          <StyledAnswerBoolean>
            {letter === "A" ? "True" : "False"}
          </StyledAnswerBoolean>
        )}
        <StyledInputRadio
          type="radio"
          name="answer radio"
          id={letter}
          checked={checked === letter}
          onChange={changeAttribute}
        />
        <span></span>
      </StyledLabelAnswer>
    </StyledAnswerWrapper>
  );
};

export default AnswerCard;
