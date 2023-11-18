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
} from "./RandomAdults&ChildrenQuizStyled";
import { useDispatch } from "react-redux";
import { getRandomQuizzesThunk } from "../../../../redux/quiz/quizThunks";

const RandomAdultsQuiz = ({ adultsRandomQuizzes }) => {
  const dispatch = useDispatch();
  const [visibleQuizzes, setVisibleQuizzes] = useState(7);

  useEffect(() => {
    if (adultsRandomQuizzes.length === 0) {
      dispatch(getRandomQuizzesThunk({ audience: "adults", limit: 8 }));
    }
  }, [dispatch, adultsRandomQuizzes]);

  useEffect(() => {
    dispatch(getRandomQuizzesThunk({ audience: "adults", limit: 8 }));
  }, [dispatch]);

  const loadMore = () => {
    setVisibleQuizzes(visibleQuizzes + 8);
  };

  return (
    <RandomAPageWrapper>
      <RandomAPageDesc>
        <PageTitle>For Adults</PageTitle>
        <Paragraph>
          Dive deep into a world of intriguing quizzes tailored for adults. From
          cinema to logic, challenge your knowledge and discover where your
          expertise lies. Explore a diverse range of topics and test the depths
          of your knowledge.
        </Paragraph>
      </RandomAPageDesc>
      <RandomASectionWrapper>
        <QuizesList quizzesArr={adultsRandomQuizzes.slice(0, visibleQuizzes)} />
        <RandomABtnWrapper>
          <BtnLoadMore handleLoadMore={loadMore} />
        </RandomABtnWrapper>
      </RandomASectionWrapper>
    </RandomAPageWrapper>
  );
};

export default RandomAdultsQuiz;
