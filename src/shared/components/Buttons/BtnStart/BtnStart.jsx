import { Answers, BtnStartS, TextAnswers } from "./BtnStartStyled";
import { useLocation, useNavigate } from "react-router-dom";

const BtnStart = ({ quantityQuestions, correctAnswers, id, category }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLastQuizOrHome =
    location.pathname === "/lastquiz" || location.pathname === "/home";
  const handleBtnStart = () => {
    navigate(`/quiz/${id}/basequizform?category=${category}`);
  };

  return (
    <>
      {isLastQuizOrHome ? (
        <>
          <TextAnswers>
            Correct answers:
            <Answers>
              {correctAnswers}/{quantityQuestions}
            </Answers>
          </TextAnswers>
          <BtnStartS type="button" onClick={handleBtnStart}>
            Pass again
          </BtnStartS>
        </>
      ) : (
        <BtnStartS type="button" onClick={handleBtnStart}>
          Start
        </BtnStartS>
      )}
    </>
  );
};

export default BtnStart;
