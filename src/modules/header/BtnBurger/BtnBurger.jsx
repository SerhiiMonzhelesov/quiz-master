import React from "react";
import { Burger, StyledBtnBurger } from "./BtnBurger.styled";

const BtnBurger = ({openBurgerMenu}) => {
  return (

      <StyledBtnBurger type="button" onClick={openBurgerMenu}>
      <Burger/>
      </StyledBtnBurger>

  );
};

export default BtnBurger;
