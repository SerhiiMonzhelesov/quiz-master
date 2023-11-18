import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const FormContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 155px;
  margin-top: 102px;
  padding: 40px 20px;
  max-width: 335px;
  width: 100%;
  height: 503px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px var(--border-color-30) solid;
  background-color: var(--second-background);

  @media (min-width: 768px) {
    max-width: 481px;
    height: 460px;
    margin-top: 202px;
    padding: 60px 80px;
  }

  @media (min-width: 1440px) {
    margin-top: 170px;
  }
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  font-family: "GilroyBold";
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const NameInput = styled.input`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  border-radius: 30px;
  border: 1px var(--border-color-60) solid;
  background-color: transparent;
  margin-bottom: 20px;
  color: var(--text-color-50);
  font-size: 14px;
  letter-spacing: -0.16px;
  font-family: "GilroyRegular";
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 12px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  &.has-error {
    gap: 16px;
  }
`;
export const TextRating = styled.h3`
  color: var(--text-color-60);
  font-size: 16px;
  font-family: "GilroyRegular";
  font-weight: 400;
  line-height: 22px;
  margin-right: 8px;
`;
export const StarBtn = styled.button`
  background-color: transparent;
  line-height: 10px;
`;
export const FormTextarea = styled.textarea`
  height: 100%;
  padding-top: 14px;
  padding-bottom: 140px;
  padding-left: 18px;
  padding-right: 18px;
  resize: none;
  border-radius: 15px;
  border: 1px var(--border-color-60) solid;
  background-color: transparent;
  color: var(--text-color-50);
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.16px;
  font-family: "GilroyRegular";

  @media (min-width: 768px) {
    font-size: 16px;
    padding-bottom: 57px;
  }
`;
export const SendBtn = styled.button`
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
export const ErrorsStyled = styled.div`
  margin: 0 0;
  font-size: 12px;
  line-height: 1.1;
  color: var(--pink-color);
  text-align: center;
`;
