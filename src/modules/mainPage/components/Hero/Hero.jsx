import React from "react";
import MediumBtn from "../../../../shared/components/Buttons/MediumBtn/MediumBtn";
import Paragraph from "../../../../shared/components/Paragraph/Paragraph";
import { StyledHero } from "./Hero.styled";

function Hero({handlerChoose, handlerCreate}) {
  return (
    <StyledHero>
      <div>
        <Paragraph>Hello visitor!</Paragraph>
        <Paragraph>
          On the site you will find quizzes and quizzes with various types of
          questions: cinema, music, logic and others. Quizzes differ in the
          degreeof difficulty of questions, the number and type of questions.
        </Paragraph>
        <div>
        <MediumBtn type="accent" handlerClick={handlerChoose}>Choose a test</MediumBtn>
        <MediumBtn handlerClick={handlerCreate}>Create a quest</MediumBtn>
        </div>
      </div>
      <h1>Are you ready to <br/> take the Quiz?</h1>
    </StyledHero>
  );
}

export default Hero;
