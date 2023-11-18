import React, { useRef, useState } from "react";
import {
  AiOutlineCloseS,
  AnswersResultS,
  BtnCloseS,
  BtnWriteReviewLink,
  QuizeBox,
  RatingBox,
  RatingS,
  ResultTextS,
  ResultTitleS,
} from "./QuizResultStyled";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { createReviewQuizThunk } from "../../../redux/feedback/feedbackThunks";
import StarIcon from "@mui/icons-material/Star";
import { notifyRateAddSuccess } from "../../../shared/NotificationToastify/Toasts";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const QuizResult = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const correctAnswersCount = searchParams.get("correctAnswersCount");
  const totalQuestions = searchParams.get("totalQuestions");
  const inputValue = searchParams.get("inputValue");
  const { quizId } = useParams();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const backLink = useRef(location.state?.from);

  const handleClickBtnClose = (value) => {
    if (value > 0) {
      dispatch(createReviewQuizThunk({ quizId, rate: value })).then(() => {
        notifyRateAddSuccess();
        navigate(backLink.current ?? "/");
      });
      // .catch((error) => {
      //   notifyError(error);
      // });
    } else {
      navigate(backLink.current ?? "/");
    }
  };

  return (
    <QuizeBox>
      <BtnCloseS type="submit" onClick={() => handleClickBtnClose(value)}>
        <AiOutlineCloseS />
      </BtnCloseS>
      <ResultTitleS>The results</ResultTitleS>
      <ResultTextS>Correct answers</ResultTextS>
      <AnswersResultS>
        {correctAnswersCount}/{totalQuestions}
      </AnswersResultS>

      <ResultTextS>Rate the quiz</ResultTextS>
      <RatingBox>
        <RatingS
          name="simple-controlled"
          value={value}
          // size="large"
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
          emptyIcon={<StarIcon />}
        />
      </RatingBox>

      <BtnWriteReviewLink
        to={`/quiz/${quizId}/quizfeedback?inputValue=${inputValue}`}
      >
        Write a review
      </BtnWriteReviewLink>
    </QuizeBox>
  );
};

export default QuizResult;
