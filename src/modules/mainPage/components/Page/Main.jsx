import React from "react";
import Hero from "../Hero/Hero.jsx";
import Advantages from "../Advantages/Advantages.jsx";
import Quizzes from "../Quizzes/Quizzes.jsx";
import NavBlock from "../NavBlock/NavBlock.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import { Outlet } from "react-router-dom";
import { Container } from "./Main.styled.js";

function Main({data}) {
  const { reviews, totalReviews, randomAdultQuizzes, randomChildrenQuizzes, handleChooseTest, handleCreateTest } = data;

  return (
    <Container>
      <Hero handlerChoose={handleChooseTest} handlerCreate={handleCreateTest}/>
      <Advantages />
      <Quizzes adultQuizzes={randomAdultQuizzes} childrenQuizzes={randomChildrenQuizzes}/>
      <NavBlock handlerChoose={handleChooseTest} handlerCreate={handleCreateTest}/>
      <Reviews reviews={reviews} totalReviews={totalReviews}/>
      <Outlet />
    </Container>
  );
}

export default Main;
