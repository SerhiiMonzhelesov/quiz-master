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
  handleRadioChange,
  checked,
  type,
  questionChanges,
  selectAnswers,
  handleQuizChange,
  currentQuestion,
  idxAnswer,
}) => {
  const currentAnswer = currentQuestion?.answers
    ? currentQuestion?.answers[idxAnswer]
    : "";
  const bgColorCard = questionChanges?.background
    ? questionChanges.background
    : currentQuestion?.background || "rgba(255, 255, 255, 0.02)";

  const definedValueInput = () => {
    if (type === "quiz")
      for (let key in questionChanges) {
        if (key.includes(`[${idxAnswer}][answer]`)) return questionChanges[key];
      }
  };

  return (
    <StyledAnswerWrapper
      $quiz={(type || currentQuestion?.type) === "quiz" ? "quiz" : null}
    >
      <StyledLabelAnswer
        htmlFor={letter}
        $colorCheckbox={
          bgColorCard !== "rgba(255, 255, 255, 0.02)" && "#F4F4F4"
        }
      >
        <p className="letter">{letter}:</p>
        {(type || currentQuestion?.type) === "quiz" ? (
          <StyledTextareaAnswer
            type="text"
            id={letter}
            name="answer"
            placeholder="Enter answer"
            value={definedValueInput() || currentAnswer?.answer || ""}
            onChange={handleQuizChange}
          />
        ) : (
          <StyledAnswerBoolean>
            {letter === "A" ? "True" : "False"}
          </StyledAnswerBoolean>
        )}
        <StyledInputRadio
          type="radio"
          name="answer"
          id={letter}
          checked={
            checked !== ""
              ? checked === letter
              : currentAnswer?.correctAnswer || false
          }
          onChange={handleRadioChange}
        />
        <span></span>
      </StyledLabelAnswer>
    </StyledAnswerWrapper>
  );
};

export default AnswerCard;
