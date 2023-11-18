import styled from "styled-components";

export const FormContainer = styled.div`
  box-sizing: border-box;
  margin-bottom: 219px;
  padding: 40px 20px;
  max-width: 335px;
  width: 100%;
  height: 383px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 1px var(--border-color-30) solid;
  background-color: var(--white-background);

  @media (min-width: 768px) {
    max-width: 580px;
    height: 463px;
    margin-bottom: 81px;
    padding: 80px 100px;
  }
`;
export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 16px;
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
  padding-top: 18px;
  padding-bottom: 133px;
  padding-left: 18px;
  padding-right: 18px;
  resize: none;
  border-radius: 15px;
  border: 1px var(--border-color-60) solid;
  background-color: transparent;
  color: var(--text-color-50);
  font-size: 14px;
  letter-spacing: -0.16px;
  font-family: "GilroyRegular";

  @media (min-width: 768px) {
    font-size: 16px;
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
export const ErrorsStyled = styled.div`
  margin: 0 0;
  font-size: 12px;
  line-height: 1.1;
  color: var(--pink-color);
  text-align: center;
`;
