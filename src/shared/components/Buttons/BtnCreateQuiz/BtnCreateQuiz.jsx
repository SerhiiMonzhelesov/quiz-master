import { Link } from "react-router-dom";
import { BiPlusS, BtnTitle, ButtonS, IconWrapper } from "./BtnCreateQuizStyled";

const BtnCreateQuiz = () => {
  const handleCreateQuiz = () =>{
  }
  return (
    <>
    <Link to="/createquiz">
      <ButtonS type="button" onClick={handleCreateQuiz}>
        <IconWrapper className="bi-wrapper">
            <BiPlusS className="bi-btn"/>
        </IconWrapper>
        <BtnTitle>Create quiz</BtnTitle>
      </ButtonS>
      </Link>
    </>
  );
};

export default BtnCreateQuiz;
