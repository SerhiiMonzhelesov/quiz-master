import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const FormContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 204px;
  margin-top: 204px;
  padding: 130px 20px;
  max-width: 335px;
  height: 404px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px var(--border-color-30) solid;
  background-color: var(--second-background);

  @media (min-width: 768px) {
    max-width: 452px;
    height: 408px;
    margin-bottom: 196px;
    margin-top: 196px;
    padding: 120px 100px;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 32px;
`;
export const TitleThanks = styled.h2`
  font-size: 20px;
  font-family: "GilroyBold";
  line-height: 20px;
  margin-bottom: 16px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const TextThanks = styled.p`
  color: var(--text-color-60);
  font-size: 15px;
  font-family: "GilroyRegular";
  line-height: 20px;
`;
export const ToMainPageBtn = styled.button`
  color: inherit;
  font-size: 14px;
  font-family: "GilroyBold";
  line-height: 16px;
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background: var(--accent-color);
  border-radius: 30px;
  border: none;
  transform: scale(1);
  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const CloseBtnContainer = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: transparent;
  transform: scale(1);
  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    top: 24px;
    right: 24px;
  }
`;
export const CloseBtn = styled(AiOutlineClose)`
  width: 20px;
  height: 20px;
  color: var(--text-color-100);
`;
export const SplashImg = styled.img`
  position: absolute;
  top: 55.5%;
  right: 41%;
  width: 343px;
  height: 325px;
  max-width: 100%;

  @media (min-width: 768px) {
    top: 46%;
    right: 51%;
    width: 470px;
    height: 445px;
  }

  @media (min-width: 1440px) {
    top: 45%;
    right: 53.6%;
  }
`;
