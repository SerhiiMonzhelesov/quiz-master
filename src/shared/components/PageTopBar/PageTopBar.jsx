import React from "react";
import { PageTopBarBox} from "./PageTopBarStyled";
import PageTitle from "../PageTitle/PageTitle";
import BtnCreateQuiz from "../Buttons/BtnCreateQuiz/BtnCreateQuiz";

const PageTopBar = ({titlePage}) => {  
  return (
    <>
      <PageTopBarBox>
        <PageTitle>{titlePage}</PageTitle>
        {titlePage !== "Create quize" ? <BtnCreateQuiz /> : null}
      </PageTopBarBox>
    </>
  );
};

export default PageTopBar;
