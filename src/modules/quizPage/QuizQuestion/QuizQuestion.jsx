import React, { useEffect, useState } from "react";
import {
  NextButton,
  BackButton,
  StyledButton,
  TitleQuestion,
  AnswersContainer,
  ButtonText,
  DownContainer,
  AnswersCounter,
  AnswerLabels,
  QuizeBox,
  StyledCountdown,
  TimeText,
} from "./QuizQuestionStyled";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  getPassedQuizzesThunk,
  passedUsersQuiz,
  updateQuizThunk,
  updateUsersQuiz,
} from "../../../redux/quiz/quizThunks";
import { useAuth } from "../../../hooks/useAuth";

function QuizQuestion({ questions, quizId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const answerLabels = ["A", "C", "B", "D"];
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [previousQuestion, setPreviousQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const searchParams = new URLSearchParams(location.search);
  const inputValue = searchParams.get("inputValue");

  const answers = questions[currentQuestion].answers;
  const question = questions[currentQuestion];
  const { isAuth } = useAuth();

  const handleButtonClick = (answer, index) => {
    const isCorrect = answer.correctAnswer;

    setIsAnswerSelected(true);

    setSelectedAnswer(true);

    setUserAnswers((prevAnswers) => {
      const questionId = questions[currentQuestion]._id;

      return {
        ...prevAnswers,
        [questionId]: {
          true: answers.findIndex((ans) => ans.correctAnswer === true),
          false: !isCorrect
            ? index
            : answer.correctAnswer
            ? index
            : prevAnswers[questionId]?.false,
          time: timeRemaining,
        },
      };
    });

    if (isCorrect) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setSelectedAnswer(false);
      setIsAnswerSelected(false);
      setPreviousQuestion(currentQuestion);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate(
        `/quiz/${quizId}/quizresult?correctAnswersCount=${correctAnswersCount}&totalQuestions=${questions.length}&inputValue=${inputValue}`
      );

      const quizData = {
        result: {
          quizId: quizId,
          quantityQuestions: questions.length,
          correctAnswers: correctAnswersCount,
        },
      };

      dispatch(updateQuizThunk(quizId));
      if (isAuth) {
        dispatch(getPassedQuizzesThunk()).then((arr) => {
          const totalPassed = arr.payload;
          if (totalPassed.length === 0) {
            dispatch(passedUsersQuiz(quizData));
          } else if (totalPassed && totalPassed.data.some((item) => item._id === quizData.result.quizId)) {
            dispatch(updateUsersQuiz(quizData));
          } else {
            dispatch(passedUsersQuiz(quizData));
          }
        });
      }
    }
  };

  const handlePreviousQuestion = () => {
    if (previousQuestion !== null) {
      setSelectedAnswer(true);
      setIsAnswerSelected(false);
      setCurrentQuestion(previousQuestion);
      setPreviousQuestion(previousQuestion - 1);

      const prevQuestionId = questions[previousQuestion]._id;
      const prevUserAnswer = userAnswers[prevQuestionId];

      if (prevUserAnswer && prevUserAnswer.time) {
        setTimeRemaining(prevUserAnswer.time);
          setSelectedAnswer(true);
      } else {
        setTimeRemaining(question.time);
      }
    }
  };

  const isAnswerTrue = userAnswers[questions[currentQuestion]._id]?.true;
  const isAnswerFalse = userAnswers[questions[currentQuestion]._id]?.false;

  const getButtonClass = (index) => {
    if (index === isAnswerTrue && index === isAnswerFalse) {
      return "correct";
    } else if (index === isAnswerTrue) {
      return "correct";
    } else if (Array.isArray(isAnswerFalse)) {
      if (isAnswerFalse.includes(index)) {
        return "incorrect"
      }
    } else if(index === isAnswerFalse){
        return "incorrect"
      }
     else {
      return "normal";
    }
  };

  const [timeRemaining, setTimeRemaining] = useState(question.time);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

 useEffect(() => {
  setTimeRemaining(question.time);
}, [question, currentQuestion]);

useEffect(() => {
  let timer;
  if (!isAnswerSelected && timeRemaining > 0) {
    timer = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
  } else if (timeRemaining === 0 && !isAnswerSelected) {
    setTimeRemaining(null)
    setUserAnswers((prevAnswers) => {
      const questionId = questions[currentQuestion]._id;
const falseIndexes = answers
        .map((elem, index) => (elem.correctAnswer === false ? index : null))
        .filter((index) => index !== null);

      return {
        ...prevAnswers,
        [questionId]: {
          true: answers.findIndex((ans) => ans.correctAnswer === true),
          false: falseIndexes,
          time: timeRemaining,
        },
      }
    });
  }

  if (isAnswerSelected) {
    clearTimeout(timer);
  } 

  return () => {
    clearTimeout(timer);
  };
}, [question, currentQuestion, isAnswerSelected, timeRemaining, questions, answers]);


  return (
    <>
      <QuizeBox>
        <TitleQuestion>{questions[currentQuestion].question}</TitleQuestion>
        <TimeText>
          Time:
          <StyledCountdown>
            <span>
              {userAnswers[questions[currentQuestion]._id]
                ? formatTime(userAnswers[questions[currentQuestion]._id].time)
                : formatTime(timeRemaining)}
            </span>
          </StyledCountdown>
        </TimeText>
        <div>
          <AnswersContainer>
            {answers.map((answer, index) => (
              <li key={index}>
                <StyledButton
                  onClick={() => handleButtonClick(answer, index)}
                  isCorrect={getButtonClass(index)}
                  disabled={userAnswers[questions[currentQuestion]._id]}
                >
                  <ButtonText>
                    <AnswerLabels>{answerLabels[index]} : </AnswerLabels>
                    {`${answer.answer}`}
                  </ButtonText>
                </StyledButton>
              </li>
            ))}
          </AnswersContainer>
        </div>
        <DownContainer>
          <AnswersCounter>
            {currentQuestion + 1}/{questions.length}
          </AnswersCounter>
          <NextButton
            onClick={handleNextQuestion}
            disabled={!selectedAnswer && !userAnswers[questions[currentQuestion]._id]}
          >
            Next
          </NextButton>
          {currentQuestion > 0 && (
            <BackButton onClick={handlePreviousQuestion}
              disabled={!selectedAnswer && !userAnswers[questions[currentQuestion]._id]}
            >Back</BackButton>
          )}
        </DownContainer>
      </QuizeBox>
    </>
  );
}

export default QuizQuestion;
