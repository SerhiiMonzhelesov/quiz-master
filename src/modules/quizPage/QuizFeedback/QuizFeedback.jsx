import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import {
  CloseBtn,
  CloseBtnContainer,
  ErrorsStyled,
  FormContainer,
  FormTextarea,
  FormTitle,
  InputWrapper,
  NameInput,
  RatingWrapper,
  SendBtn,
  TextRating,
} from "./QuizFeedbackStyled";
import { selectUser } from "../../../redux/user/userSelectors";
import { createQuizReviewThunk } from "../../../redux/feedback/feedbackThunks";
import { useAuth } from "../../../hooks/useAuth";
import { notifyError } from "../../../shared/NotificationToastify/Toasts";
import { RatingS } from "../../discoverPage/components/RatingStarsRadio/RatingStarsRadioStyled";

const QuizFeedback = ({ to }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const inputValue = searchParams.get("inputValue");
  const { isAuth } = useAuth();
  const { quizId } = useParams();
  const backLink = useRef(location.state?.from);
  const infoUser = useSelector(selectUser);
  const [value, setValue] = useState(0);

  const handleClick = () => {
    navigate(backLink.current ?? "/");
  };

  const formik = useFormik({
    initialValues: {
      rating: 0,
      feedback: "",
    },

    validationSchema: Yup.object({
      feedback: Yup.string()
        .min(8, "Enter at least 8 characters")
        .required("Please write your feedback"),
    }),

    onSubmit: async (values) => {
      const reviewData = {
        userName: inputValue,
        userAvatar: infoUser.userAvatar,
        rate: value,
        comment: values.feedback,
        quizId: quizId,
      };
      try {
        await dispatch(createQuizReviewThunk({ quizId, reviewData }));
        navigate(`/quiz/${quizId}/aftertestfeedback`);
      } catch (error) {
        notifyError(error);
      }
    },
  });

  return (
    <>
      <FormContainer>
        <CloseBtnContainer onClick={handleClick}>
          <CloseBtn />
        </CloseBtnContainer>
        <form onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <FormTitle>Write a review</FormTitle>
            <NameInput
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              defaultValue={!isAuth ? inputValue : infoUser.name}
              readOnly={!isAuth ? inputValue : infoUser.name}
            />
          </InputWrapper>
          <RatingWrapper>
            <TextRating>Rate the quiz</TextRating>
            <RatingS
              name="simple-controlled"
              value={value}
              onChange={(_, newValue) => {
                setValue(newValue);
              }}
              emptyIcon={<StarIcon />}
            />
          </RatingWrapper>
          <InputWrapper
            className={
              formik.errors.feedback && formik.touched.feedback
                ? "has-error"
                : ""
            }
          >
            <FormTextarea
              type="text"
              name="feedback"
              placeholder="What is your opinion on the quiz"
              onChange={formik.handleChange}
              value={formik.values.feedback}
            />
            {formik.errors.feedback && formik.touched.feedback ? (
              <ErrorsStyled>{formik.errors.feedback}</ErrorsStyled>
            ) : null}
            <SendBtn type="submit">Send</SendBtn>
          </InputWrapper>
        </form>
      </FormContainer>
    </>
  );
};

export default QuizFeedback;
