import React from "react";
import PageTitle from "../../../../shared/components/PageTitle/PageTitle";
import Paragraph from "../../../../shared/components/Paragraph/Paragraph";
import MediumBtn from "../../../../shared/components/Buttons/MediumBtn/MediumBtn";
import { StyledNavBlock } from "./NavBlock.styled";

function NavBlock({handlerChoose, handlerCreate}) {
  return (
    <StyledNavBlock>
      <div>
        <PageTitle>Joins, pass quizzes or create them</PageTitle>
        <Paragraph>Be a part of our quiz community! Take on challenges, showcase your knowledge, or craft your very own quiz to share with the world. Whether you're a quiz enthusiast or a curious learner, there's something here for everyone.</Paragraph>
        <div>
        <MediumBtn type="nav-accent" handlerClick={handlerChoose}>Choose a test</MediumBtn>
        <MediumBtn handlerClick={handlerCreate}>Create a quest</MediumBtn>
        </div>
      </div>
    </StyledNavBlock>
  );
}

export default NavBlock;
