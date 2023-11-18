import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

// export const = styled
export const TitleQuestion = styled.h2`
  color: var(--text-color-100);
  font-size: 24px;

  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.24px;
  margin-bottom: 40px;
`;

export const NextButton = styled.button`
  padding: 16px 62px;
  border-radius: 30px;
  background: var(--blue-background);

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.01em;

  color: var(--text-color-100);

  &:disabled {
    color: rgba(244, 244, 244, 0.2);
    cursor: not-allowed;
  }
`;

export const AnswersContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
`;

export const ButtonText = styled.p`
  color: var(--text-color-100);
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.01em;
`;

export const AnswerLabels = styled.span`
  font-style: normal;
  font-weight: 700;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 14px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: var(--text-color-100);
  border-bottom: 2px solid var(--text-color-100);
  &:disabled {
    color: rgba(244, 244, 244, 0.2);
    border-bottom: 2px solid rgba(244, 244, 244, 0.2);
    cursor: not-allowed;
  }
`;

export const DownContainer = styled.div`
  position: relative;
  margin-top: 40px;
`;

export const AnswersCounter = styled.p`
  position: absolute;
  text-align: "right";
  bottom: 0;
  right: 0;
  margin: 0;
`;

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop),
})`
  width: 295px;
  @media (min-width: 768px) {
    width: 222px;
  }

  text-align: left;
  padding: 14px 0 14px 18px;
  border-radius: 30px;
  border: 1px solid
    ${(props) =>
      props.isCorrect === "correct"
        ? "green"
        : props.isCorrect === "incorrect"
        ? "red"
        : "rgba(244, 244, 244, 0.6)"};
  cursor: pointer;
  background-color: ${(props) =>
    props.isCorrect === "correct"
      ? "rgba(29, 236, 18, 0.25)"
      : props.isCorrect === "incorrect"
      ? "rgba(255, 0, 0, 0.2)"
      : "transparent"};
  color: ${(props) =>
    props.isCorrect === "correct"
      ? "white"
      : props.isCorrect === "incorrect"
      ? "white"
      : "black"};
`;

export const QuizeBox = styled.div`
  width: 335px;
  background-color: var(--second-background);
  padding: 40px 20px;
  border-radius: 20px;
  @media (min-width: 768px) {
    width: 580px;
    background-color: var(--second-background);
    padding: 60px;
    border-radius: 20px;
  }
`;

export const TimeText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: rgba(244, 244, 244, 0.6);
`;

export const StyledCountdown = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: #f4f4f4;
  margin-left: 8px;
`;
