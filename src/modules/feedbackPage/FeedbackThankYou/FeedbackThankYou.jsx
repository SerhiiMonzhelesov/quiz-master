import { Link } from "react-router-dom";
import {
  FormContainer,
  ImgWrapper,
  ThankYouText,
  ThankYouWrapper,
  ToMainPageBtn,
} from "./FeedbackThankYouStyled";

import feedbackImage from "../../../shared/images/desktop/feedback-desktop@2x.png";

const FeedbackThankYou = () => {
  return (
    <>
      <FormContainer>
        <ImgWrapper>
          <img
            src={feedbackImage}
            alt="Feedback"
            width={200}
            height={206}
            loading="lazy"
          />
        </ImgWrapper>
        <ThankYouWrapper>
          <ThankYouText>
            Thank you for your feedback, feedback is very important to us.
          </ThankYouText>
          <Link to="/">
            <ToMainPageBtn>To main page</ToMainPageBtn>
          </Link>
        </ThankYouWrapper>
      </FormContainer>
    </>
  );
};

export default FeedbackThankYou;
