import React from "react";
import { useSelector } from "react-redux";
import { selectRandomAdult, selectRandomChildren } from "../../redux/selectors";
import { useParams } from "react-router-dom";
import RandomAdultsQuiz from "../../modules/randomQuizPage/components/RandomAdultsQuiz/RandomAdultsQuiz";
import RandomChildrenQuiz from "../../modules/randomQuizPage/components/RandomChildrenQuiz/RandomChildrenQuiz";

const RandomQuizPage = () => {
  const { ageType } = useParams();
  const adultsRoute = ageType === "Adults";
  const childrenRoute = ageType === "Children";

  const randomAdultsQuizzes = useSelector(selectRandomAdult);
  const randomChildrenQuizzes = useSelector(selectRandomChildren);

  return (
    <>
      {adultsRoute && (
        <RandomAdultsQuiz adultsRandomQuizzes={randomAdultsQuizzes} />
      )}
      {childrenRoute && (
        <RandomChildrenQuiz childrenRandomQuizzes={randomChildrenQuizzes} />
      )}
    </>
  );
};

export default RandomQuizPage;
