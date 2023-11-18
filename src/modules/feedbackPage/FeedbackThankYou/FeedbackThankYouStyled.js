import styled from "styled-components";

export const FormContainer = styled.div`
  box-sizing: border-box;
  margin-bottom: 219px;
  padding: 0 20px 40px 20px;
  max-width: 335px;
  height: 383px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px var(--border-color-30) solid;
  background-color: var(--white-background);

  @media (min-width: 768px) {
    max-width: 580px;
    height: 440px;
    margin-bottom: 104px;
    padding: 32px 140px 64px 140px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ThankYouWrapper = styled.div`
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ThankYouText = styled.h2`
  text-align: center;
  font-size: 14px;
  font-family: "GilroyRegular";
  font-weight: 400;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ToMainPageBtn = styled.button`
  color: inherit;
  font-size: 14px;
  font-family: "GilroyBold";
  line-height: 16px;
  width: 100%;
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
