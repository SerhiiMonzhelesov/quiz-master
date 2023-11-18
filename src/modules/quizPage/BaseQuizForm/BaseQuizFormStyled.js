import styled from "styled-components";

export const QuizeBox = styled.div`
  width: 335px;
  margin-top: 157px;
  background-color: var(--second-background);
  padding: 40px 20px;
  border-radius: 20px;
  text-align: center;
  @media (min-width: 768px) {
    width: 580px;
    margin-top: 208px;
    background-color: var(--second-background);
    padding: 124px 130px;
    border-radius: 20px;
  }
  @media (min-width: 1440px) {
    margin-top: 112px;
  }
`;

export const Title = styled.h2`
  color: #f4f4f4;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.24px;
  margin-bottom: 12px;
`;

export const Category = styled.p`
  color: rgba(244, 244, 244, 0.6);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.16px;
  margin-bottom: 32px;
`;

export const InputName = styled.input`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 18px;
  border-radius: 30px;
  border: 1px solid rgba(244, 244, 244, 0.6);
  background: transparent;
  color: #f4f4f4;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;

  &::placeholder {
    color: rgba(244, 244, 244, 0.4);
  }

  &:focus {
    outline: none;
    border: 1px solid rgba(244, 244, 244, 0.8);
    box-shadow: none;
  }
`;

export const ButtonStart = styled.button`
  border-radius: 30px;
  background: #205bf1;
  padding: 16px;
  width: 100%;
  color: ${(props) =>
    props.disabled ? "rgba(244, 244, 244, 0.20)" : "#F4F4F4"};
  font-size: 16px;
  font-weight: 700;
`;
