import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserQuizzesThunk } from "../../redux/quiz/quizThunks";
import { selectOwnQuizes, selectOwnQuizesQty } from "../../redux/selectors";
import { updateOwnQuizes } from "../../redux/quiz/quizSlice";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/ownQuizPage/components/QuizFilterTools/QuizFilterTools";
import { PageWrapper, SectionWrapper } from "./OwnQuizePageStyled";

const OwnQuizPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserQuizzesThunk());
    return () => {
      dispatch(updateOwnQuizes([]));
    };
  }, [dispatch]);

  const allOwnQuizes = useSelector(selectOwnQuizes);
  const allOwnQuizesQty = useSelector(selectOwnQuizesQty);
  const [page, setPage] = useState(2);
  const [ownQuizesArr, setOwnQuizesArr] = useState();

  useEffect(() => {
    if (!allOwnQuizes) return;
    setOwnQuizesArr(allOwnQuizes);
  }, [allOwnQuizes]);

  const filteredQuizeCards = (name) => {
    const filteredNames = allOwnQuizes.filter((quiz) =>
      quiz?.quizName?.includes(name)
    );
    setOwnQuizesArr(filteredNames);
  };

  const handleLoadMore = () => {
    dispatch(getUserQuizzesThunk(page));
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="My quiz" />
        <QuizeFilterTools filteredQuizeCards={filteredQuizeCards} />
        <QuizesList quizzesArr={ownQuizesArr} className={"bottomVariant"} />
        {allOwnQuizesQty > 8 && allOwnQuizes.length !== allOwnQuizesQty && (
          <BtnLoadMore handleLoadMore={handleLoadMore} />
        )}
      </SectionWrapper>
    </PageWrapper>
  );
};

export default OwnQuizPage;
