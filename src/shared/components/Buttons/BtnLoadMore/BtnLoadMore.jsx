import React from "react";
import { ButtonS } from "./BtnLoadMoreStyled";

const BtnLoadMore = ({ handleLoadMore }) => {
  return (
    <ButtonS type="button" onClick={handleLoadMore}>
      Load more
    </ButtonS>
  );
};

export default BtnLoadMore;
