import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import {
  ErrorsStyled,
  FormContainer,
  FormTextarea,
  InputWrapper,
  RatingWrapper,
  SendBtn,
  TextRating,
} from "./FeedbackFormStyled";
import { createReviewThunk } from "../../../redux/feedback/feedbackThunks";
import { selectUser } from "../../../redux/user/userSelectors";
import { notifyError } from "../../../shared/NotificationToastify/Toasts";
import { RatingS } from "../../discoverPage/components/RatingStarsRadio/RatingStarsRadioStyled";

const FeedbackForm = ({ onSendClick }) => {
  const dispatch = useDispatch();
  const infoUser = useSelector(selectUser);
  const [value, setValue] = useState(0);

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
        userName: infoUser.name,
        userAvatar: infoUser.userAvatar,
        rate: value,
        comment: values.feedback,
      };
      try {
        await dispatch(createReviewThunk(reviewData));
        onSendClick();
      } catch (error) {
        notifyError(error);
      }
    },
  });

  return (
    <>
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <RatingWrapper>
            <TextRating>Rating</TextRating>
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
              placeholder="Write your opinion or wish for the service"
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

export default FeedbackForm;
