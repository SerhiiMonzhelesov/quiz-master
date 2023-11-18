import React, { useEffect, useState } from "react";
import PageTitle from "../../../../shared/components/PageTitle/PageTitle";
import Paragraph from "../../../../shared/components/Paragraph/Paragraph";
import QuizesList from "../../../../shared/components/QuizesList/QuizesList";
import BtnLoadMore from "../../../../shared/components/Buttons/BtnLoadMore/BtnLoadMore";
import {
  RandomABtnWrapper,
  RandomAPageDesc,
  RandomAPageWrapper,
  RandomASectionWrapper,
} from "../RandomAdultsQuiz/RandomAdults&ChildrenQuizStyled";
import { useDispatch } from "react-redux";
import { getRandomQuizzesThunk } from "../../../../redux/quiz/quizThunks";

const RandomChildrenQuiz = ({ childrenRandomQuizzes }) => {
  const dispatch = useDispatch();
  const [visibleQuizzes, setVisibleQuizzes] = useState(7);

  useEffect(() => {
    if (childrenRandomQuizzes.length === 0) {
      dispatch(getRandomQuizzesThunk({ audience: "children", limit: 8 }));
    }
  }, [dispatch, childrenRandomQuizzes]);

  useEffect(() => {
    dispatch(getRandomQuizzesThunk({ audience: "children", limit: 8 }));
  }, [dispatch]);

  const loadMore = () => {
    setVisibleQuizzes(visibleQuizzes + 8);
  };

  return (
    <RandomAPageWrapper>
      <RandomAPageDesc>
        <PageTitle>For Children</PageTitle>
        <Paragraph>
          Engaging and fun quizzes designed specifically for kids. Dive into a
          world of colorful questions on movies, music, and much more. Perfect
          for young curious minds! A safe space for children to learn, play, and
          grow their knowledge.
        </Paragraph>
      </RandomAPageDesc>
      <RandomASectionWrapper>
        <QuizesList
          quizzesArr={childrenRandomQuizzes.slice(0, visibleQuizzes)}
        />
        <RandomABtnWrapper>
          <BtnLoadMore handleLoadMore={loadMore} />
        </RandomABtnWrapper>
      </RandomASectionWrapper>
    </RandomAPageWrapper>
  );
};

export default RandomChildrenQuiz;
