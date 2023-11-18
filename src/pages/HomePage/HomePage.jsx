import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonSeeAll from "../../shared/components/Buttons/ButtonSeeAll";
import UserStats from "../../modules/homepage/components/UserStats"
import PageTopBar from "../../shared/components/PageTopBar/PageTopBar";
import QuizesList from "../../shared/components/QuizesList/QuizesList";
import { BoxLastPassed, BoxUserStats, TitleLastPassedQ, Container } from "./HomePageStyled";

import MediaQuery from "react-responsive";
import { getPassedQuizzesThunk } from "../../redux/quiz/quizThunks";

const HomePage = () => {
  const seeAllLink = "/lastquiz"; 
  const dispatch = useDispatch();
  const [passedQuizzes, setPassedQuizzes] = useState([]);

  useEffect(() => {
    if (passedQuizzes && passedQuizzes.length === 0) {
      dispatch(getPassedQuizzesThunk({ page: 1, limit: 4 }))
        .then(response => {
          setPassedQuizzes(response.payload.data);
        })
    }
  }, [dispatch, passedQuizzes]);

  
  return (
    <Container>
      <PageTopBar titlePage="Home" />
      
      <BoxUserStats>
        <UserStats />
        <div>
          <BoxLastPassed>
            <TitleLastPassedQ>Last passed quizzes</TitleLastPassedQ>
          {passedQuizzes && passedQuizzes.length > 3 ? <ButtonSeeAll link={seeAllLink} /> : null}

          </BoxLastPassed>
          <MediaQuery minWidth={1440}>
            {matches => (
              passedQuizzes && passedQuizzes.length > 0 ? (
                <QuizesList quizzesArr={matches ? passedQuizzes.slice(0, 3) : passedQuizzes.slice(0, 2)} />
              ) : null
            )}
          </MediaQuery>
        </div>
      </BoxUserStats>
    </Container>
  );
}

export default HomePage;
