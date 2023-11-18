import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BiPlusRed,
  ButtonRedStyled,
  CardRedirecionWrapper,
  RandomPageCardTitle,
  RedIconWrapper,
  RedirectionButtonWrap,
} from "./CreateQuizCardStyled";

const CreateQuizCard = () => {
  const handlePushMessage = () => {
    toast.info("This function is available only for authorized users :)", {
      autoClose: 3000,
      theme: "dark",
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <CardRedirecionWrapper type="button" onClick={handlePushMessage}>
      <RedirectionButtonWrap>
        <ButtonRedStyled>
          <RedIconWrapper>
            <BiPlusRed />
          </RedIconWrapper>
        </ButtonRedStyled>
        <RandomPageCardTitle>Create quiz</RandomPageCardTitle>
      </RedirectionButtonWrap>
    </CardRedirecionWrapper>
  );
};

export default CreateQuizCard;
