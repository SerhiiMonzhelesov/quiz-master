import styled from "styled-components";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const QuizeBox = styled.div`
  position: relative;
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 60px;
  background-color: var(--blue-background);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    max-width: 335px;
    padding: 80px;
  }
`;

export const ResultTitleS = styled.h2`
  margin-bottom: 32px;
  font-size: 24px;
  font-family: "GilroyBold";
  line-height: 1.1;
  color: var(--text-color-100);

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const ResultTextS = styled.p`
  margin-bottom: 12px;
  color: var(--text-color-60);

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.1;
  }
`;

export const AnswersResultS = styled.p`
  margin-bottom: 32px;
  font-size: 24px;
  font-family: "GilroyBold";
  line-height: 1.3;
  color: var(--text-color-100);

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const BtnWriteReviewLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
  max-width: 169px;
  width: 100%;
  height: 48px;
  font-family: "GilroyBold";
  border: 1px solid var(--text-color-60);
  border-radius: 30px;
  background: transparent;
  color: var(--text-color-100);
  transform: scale(1);
  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    margin-top: 32px;
    max-width: 156px;
    font-size: 14px;
    line-height: 1.1;
  }
`;


export const RatingBox = styled.div`
  margin: 0;
  padding: 0;
`;

export const RatingS = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "var(--star-color-100)",
    // size: "large",
  },
  "& .MuiRating-iconEmpty": {
    color: "var(--star-color-8)",
    // size: "large",
  },
  // "& .MuiRating-iconHover": {
  //   color: "var(--star-color-8)",
  //   // size: "large",
  // },
  // "& . MuiRating-iconSize": {
  //   size:"large",
  // }

  // .MuiRating-sizeLarge
  // .MuiRating-icon
  // "& .emptyIcon": {
  //   fontSize: "large",
  // }
});


export const BtnCloseS = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;
  }
`;

export const AiOutlineCloseS = styled(AiOutlineClose)`
  width: 28px;
  height: 28px;
  fill: var(--text-color-100);

  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
