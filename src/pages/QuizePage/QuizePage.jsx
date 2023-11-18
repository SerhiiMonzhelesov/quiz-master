import GoBackBtn from "../../shared/components/Buttons/GoBackBtn/GoBackBtn";
import { PageWrapper, BackBox, Container, SplashWrapS } from "./QuizePage.styled";
import { Outlet, useLocation, useParams } from "react-router-dom";
import BaseQuizForm from "../../modules/quizPage/BaseQuizForm";
import QuizResult from "../../modules/quizPage/QuizResult";
import AnswerList from "../../modules/quizPage/AnswerList";
import QuizFeedback from "../../modules/quizPage/QuizFeedback/QuizFeedback";
import AfterTestFeedback from "../../modules/quizPage/AfterTestFeedback/AfterTestFeedback";

const QuizePage = () => {
  const { quizId } = useParams();
  const location = useLocation();

  const shouldShowGoBackBtn = () => {
    const noGoBackBtn = [
      `/quiz/${quizId}/quizfeedback`,
      `/quiz/${quizId}/aftertestfeedback`,
      `/quiz/${quizId}/basequizform`,
    ];
    return !noGoBackBtn.includes(location.pathname);
  };

  return (
    <Container>
      {shouldShowGoBackBtn() && (
        <BackBox>
          <GoBackBtn to="/" />
        </BackBox>
      )}
      <PageWrapper>
      <SplashWrapS>
        <Outlet>
          <BaseQuizForm quizId={quizId} />
          <AnswerList quizId={quizId} />
          <QuizResult quizId={quizId} />
          <QuizFeedback quizId={quizId} />
          <AfterTestFeedback />
        </Outlet>
        </SplashWrapS>
      </PageWrapper>
    </Container>
  );
};

export default QuizePage;
