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
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentQuiz } from "../../../../redux/selectors";

const QuestionCard = ({
  questionChanges,
  setQuestionChanges,
  handleQuizChange,
  handleRadioChange,
  quizChanges,
  selectAnswers,
  handleSubmit,
  isChecked,
  idxActiveQuestion,
}) => {
  const [isDropdownTimeOpen, setDropdownTimeOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentQuiz = useSelector(selectCurrentQuiz);
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const currentQuestion = currentQuiz?.questions
    ? currentQuiz?.questions[idxActiveQuestion]
    : quizChanges;
  const questionNumber = currentQuiz?.questions
    ? Number(idxActiveQuestion) + 1
    : idxActiveQuestion;

  const allQuestions = currentQuiz ? currentQuiz.questions.length : 0;
  const bgColorCard = questionChanges?.background
    ? questionChanges.background
    : currentQuestion?.background || "rgba(255, 255, 255, 0.02)";

  const toggleDropdown = () => {
    setDropdownTimeOpen(!isDropdownTimeOpen);
  };

  const formatTime = (timeSeconds) => {
    if (!timeSeconds) return;
    const minutes = Math.floor(timeSeconds / 60);
    const seconds = timeSeconds % 60;
    return `${String(minutes).padStart(1, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const formattedTime =
    formatTime(questionChanges?.time) || formatTime(currentQuestion?.time);
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
  }, [dispatch, isDropdownTimeOpen]);

  const handleClickTime = (evt) => {
    const currentTimeId = evt.target.id;

    setQuestionChanges((prevState) => ({
      ...prevState,
      time: currentTimeId,
    }));
  };

  return (
    <StyledQuestionWrapper>
      <StyledInputTheme
        type="text"
        placeholder="Quiz theme"
        name="quiz"
        value={quizChanges?.quizName || currentQuiz?.quizName || ""}
        onChange={handleQuizChange}
      />
      <StyledQuestionCard $bgcolor={bgColorCard}>
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
                <p>{formattedTime || ""}</p>
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
            value={questionChanges.question || currentQuestion?.question || ""}
            onChange={handleQuizChange}
          />
          <AnswerCardContainer>
            {selectAnswers?.map((el, idx) => (
              <AnswerCard
                key={el}
                letter={el}
                checked={isChecked}
                handleRadioChange={handleRadioChange}
                type={questionChanges.type}
                handleQuizChange={handleQuizChange}
                questionChanges={questionChanges}
                selectAnswers={selectAnswers}
                currentQuestion={currentQuestion}
                idxAnswer={idx}
              />
            ))}
          </AnswerCardContainer>
          {isDesktop ? (
            <BtnContainer>
              <StyledBtnSave
                $colortext={
                  bgColorCard !== "rgba(255, 255, 255, 0.02)" && "#171717"
                }
                $bgColor={
                  bgColorCard !== "rgba(255, 255, 255, 0.02)" && "#F4F4F4"
                }
                onClick={handleSubmit}
                data-id={currentQuiz?._id}
              >
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
            <StyledBtnSave
              $colortext={
                bgColorCard !== "rgba(255, 255, 255, 0.02)" && "#171717"
              }
              $bgColor={
                bgColorCard !== "rgba(255, 255, 255, 0.02)" && "#F4F4F4"
              }
              onClick={handleSubmit}
              data-id={currentQuiz?._id}
            >
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
