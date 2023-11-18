import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CloseBtn,
  CloseBtnContainer,
  FormContainer,
  FormWrapper,
  TextThanks,
  TitleThanks,
  ToMainPageBtn,
} from "./AfterTestFeedbackStyled";

const AfterTestFeedback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = useRef(location.state?.from);

  const handleClick = () => {
    navigate(backLink.current ?? "/");
  };
  return (
    <>
      <FormContainer>
        <CloseBtnContainer onClick={handleClick}>
          <CloseBtn />
        </CloseBtnContainer>
        <TitleThanks>Thank you</TitleThanks>
        <FormWrapper>
          <TextThanks>
            for your feedback, feedback is very important to us.
          </TextThanks>
          <Link to="/">
            <ToMainPageBtn>To main page</ToMainPageBtn>
          </Link>
        </FormWrapper>
      </FormContainer>
    </>
  );
};

export default AfterTestFeedback;
