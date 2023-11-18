import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavoriteQuizzesThunk,
  updateFavoriteQuizThunk,
} from "../../redux/quiz/quizThunks";
import { updateFavorite } from "../../redux/quiz/quizSlice";
import { selectFavorite, selectFavoriteQty } from "../../redux/selectors";
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import QuizeFilterTools from "../../modules/favoritePage/components/QuizFilterTools/QuizFilterTools";
import { PageWrapper, SectionWrapper } from "./FavoritePageStyled";

const FavoritePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteQuizzesThunk());
    return () => {
      dispatch(updateFavorite([]));      
    };
  }, [dispatch]);

  const allFavoriteQuizes = useSelector(selectFavorite);  
  const allFavoriteQuizesQty = useSelector(selectFavoriteQty);
  const [page, setPage] = useState(2);
  const [search, setSearch] = useState("");

  const filteredQuizeCards = useMemo(() => {
    return allFavoriteQuizes.filter((quiz) => quiz.quizName?.includes(search));
  }, [search, allFavoriteQuizes]);

  const updateFavoriteQuizes = (evt) => {
    const id = evt.currentTarget.id;
    const quizId = {
      favorites: id,
    };
    dispatch(updateFavoriteQuizThunk(quizId));
  };

  const handleLoadMore = () => {
    dispatch(getFavoriteQuizzesThunk(page));
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <PageWrapper>
      <SectionWrapper>
        <PageTopBar titlePage="Favorite quize" />
        <QuizeFilterTools search={search} setSearch={setSearch} />
        <QuizesList
          quizzesArr={filteredQuizeCards}
          className={"bottomVariant"}
          updateFavoriteQuizes={updateFavoriteQuizes}
        />
        {allFavoriteQuizesQty > 8 &&
          filteredQuizeCards.length !== allFavoriteQuizesQty && (
            <BtnLoadMore handleLoadMore={handleLoadMore} />
          )}
      </SectionWrapper>
    </PageWrapper>
  );
};

export default FavoritePage;
