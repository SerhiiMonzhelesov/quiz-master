import React, { useEffect, useRef, useState } from "react";
import {
  AnswerCardContainer,
  BtnContainer,
  Down,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  ImageWrapper,
  StyledBtnCancel,
  StyledBtnSave,
  StyledImageNumberBlock,
  StyledInputQuestion,
  StyledInputTheme,
  StyledPlus,
  StyledQuestion,
  StyledQuestionCard,
  StyledQuestionNumber,
  StyledQuestionWrapper,
  StyledTimeWrapper,
} from "./QuestionCard.styled";
import AnswerCard from "../AnswerCard/AnswerCard";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { currentCreated } from "../../../../redux/selectors";

const QuestionCard = ({
  currentQuestion,
  setCurrentQuestion,
  handleQuizChange,
  quiz,
  selectAnswers,
  handleSubmit,
}) => {
  const [isDropdownTimeOpen, setDropdownTimeOpen] = useState(false);
  const [isCurrentTime, setIsCurrentTime] = useState(null);
  const [isChecked, setChecked] = useState("");
  const currentQuiz = useSelector(currentCreated);
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const questionNumber = 1;
  const allQuestions = 10;

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownTimeOpen(!isDropdownTimeOpen);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(1, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const timeInSeconds = [30, 45, 60, 75, 90, 105, 120];

  useEffect(() => {
    const handleDocumentTimeClick = (event) => {
      if (
        isDropdownTimeOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownTimeOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentTimeClick);

    return () => {
      document.removeEventListener("click", handleDocumentTimeClick);
    };
  }, [isDropdownTimeOpen]);

  const handleClickTime = (evt) => {
    const currentTime = evt.target.textContent;
    const currentTimeId = evt.target.id;

    setIsCurrentTime(currentTime);
    setCurrentQuestion((prevState) => ({
      ...prevState,
      time: currentTimeId,
    }));
  };

  const handleRadioAnswer = (event) => {
    const value = event.target.id;

    setChecked(value);
    let fields = {};
    if (currentQuestion.type === "quiz") {
      selectAnswers.forEach((item, idx) => {
        fields = {
          ...fields,
          [`answers[${idx}][correctAnswer]`]: value === item ? true : false,
        };
      });
    } else {
      selectAnswers.forEach(
        (item, idx) =>
          (fields = {
            ...fields,
            [`answers[${idx}][answer]`]: idx === 0 ? "True" : "False",
            [`answers[${idx}][correctAnswer]`]: value === item ? true : false,
          })
      );
    }
    setCurrentQuestion((prevState) => ({
      ...prevState,
      ...fields,
    }));
  };

  

  return (
    <StyledQuestionWrapper>
      <StyledInputTheme
        type="text"
        placeholder="Quiz theme"
        name="quiz"
        value={quiz.quizName}
        onChange={handleQuizChange}
      />
      <StyledQuestionCard>
        {isDesktop ? (
          <StyledImageNumberBlock>
            <ImageWrapper>
              <StyledPlus />
            </ImageWrapper>
            <p>
              {questionNumber}/{allQuestions}
            </p>
          </StyledImageNumberBlock>
        ) : (
          <ImageWrapper>
            <StyledPlus />
          </ImageWrapper>
        )}
        <StyledQuestion>
          <StyledTimeWrapper>
            <p>Time:</p>
            <DropdownContainer ref={dropdownRef}>
              <DropdownButton onClick={toggleDropdown}>
                <p>{isCurrentTime}</p>
                {isDropdownTimeOpen ? (
                  <Down style={{ rotate: "180deg" }} />
                ) : (
                  <Down />
                )}
              </DropdownButton>
              <DropdownList open={isDropdownTimeOpen}>
                {timeInSeconds.map((el) => (
                  <DropdownItem
                    key={formatTime(el)}
                    id={el}
                    onClick={handleClickTime}
                  >
                    {formatTime(el)}
                  </DropdownItem>
                ))}
              </DropdownList>
            </DropdownContainer>
          </StyledTimeWrapper>
          <StyledInputQuestion
            type="text"
            name="question"
            placeholder="Enter a question"
            value={currentQuestion.question}
            onChange={handleQuizChange}
          />
          <AnswerCardContainer>
            {selectAnswers?.map((el) => (
              <AnswerCard
                key={el}
                letter={el}
                checked={isChecked}
                changeAttribute={handleRadioAnswer}
                type={currentQuestion.type}
                handleQuizChange={handleQuizChange}
                currentQuestion={currentQuestion}
                selectAnswers={selectAnswers}
              />
            ))}
          </AnswerCardContainer>
          {isDesktop ? (
            <BtnContainer>
              <StyledBtnSave onClick={handleSubmit} data-id={currentQuiz?._id}>
                Save
              </StyledBtnSave>
              <StyledBtnCancel>Cancel</StyledBtnCancel>
            </BtnContainer>
          ) : null}
        </StyledQuestion>
        {isDesktop ? null : (
          <BtnContainer>
            <StyledQuestionNumber>
              {questionNumber}/{allQuestions}
            </StyledQuestionNumber>
            <StyledBtnSave onClick={handleSubmit} data-id={currentQuiz?._id}>
              Save
            </StyledBtnSave>
            <StyledBtnCancel>Cancel</StyledBtnCancel>
          </BtnContainer>
        )}
      </StyledQuestionCard>
    </StyledQuestionWrapper>
  );
};

export default QuestionCard;
