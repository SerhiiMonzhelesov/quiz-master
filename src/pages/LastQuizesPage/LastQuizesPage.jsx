import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import BtnLoadMore from "../../shared/components/Buttons/BtnLoadMore/BtnLoadMore"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar"
import QuizesList from "../../shared/components/QuizesList/QuizesList"
import { ContainerBtn, ContainerLastPassed } from "./LastQuizesPageStyled";
import { getPassedQuizzesThunk } from "../../redux/quiz/quizThunks";

const LastQuizesPage = () => {
  const dispatch = useDispatch();
  const [passedQuizzes, setPassedQuizzes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const limitPerPage = 8;

  useEffect(() => {
    const fetchFirstPage = () => {
      dispatch(getPassedQuizzesThunk({ page: 1, limit: limitPerPage }))
        .then(response => {
          setPassedQuizzes(response.payload.data);
        })
    };

    fetchFirstPage();
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    dispatch(getPassedQuizzesThunk({ page: nextPage, limit: limitPerPage }))
      .then(response => {
        setPassedQuizzes(prevPassedQuizzes => [...prevPassedQuizzes, ...response.payload.data]);
        setCurrentPage(nextPage);
      })
  };

  return (
    <ContainerLastPassed>
      <PageTopBar titlePage="Last passed quizzes" />
      <QuizesList quizzesArr={passedQuizzes} />
      <ContainerBtn>
        {passedQuizzes.length % limitPerPage === 0 && (
          <BtnLoadMore handleLoadMore={handleLoadMore} />
        )}
      </ContainerBtn>
    </ContainerLastPassed>
  );
}

export default LastQuizesPage;
