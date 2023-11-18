import styled from "styled-components";

export const StyledAnswerWrapper = styled.li`
  display: flex;
  width: 100%;
  height: ${(props) => (props.$quiz === "quiz" ? "68px" : "44px")};
  padding: 14px 18px;
  font-size: 14px;
  letter-spacing: -0.14px;
  border-radius: ${(props) => (props.$quiz === "quiz" ? "15px" : "30px")};
  border: 1px solid var(--border-color-60);

  @media only screen and (min-width: 375px) {
    width: 139px;
  }

  @media only screen and (min-width: 768px) {
    width: 180px;
    font-size: 16px;
    letter-spacing: -0.16px;
  }

  @media only screen and (min-width: 1440px) {
    align-items: start;
    width: 222px;
  }
`;

export const StyledLabelAnswer = styled.label`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: baseline;
  width: 100%;

  & .letter {
    font-family: "GilroyBold";
  }
  & span {
    position: absolute;
    display: block;
    right: 0;
    top: 0px;
    height: 14px;
    width: 14px;
    border-radius: 4px;
    border: 1px solid var(--border-color-60);
    cursor: pointer;
  }

  & span:after {
    content: "";
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    height: 12px;
    width: 12px;
    background: #205bf1;
    border-radius: 3px;
    transform: scale(0);
  }

  & input[type="radio"]:checked ~ span:after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const StyledAnswerBoolean = styled.p`
  display: flex;
  width: 80%;
  padding: 0 2px;
  margin-left: 2px;
`;

export const StyledTextareaAnswer = styled.textarea`
  display: flex;
  padding: 0 2px;
  margin-left: 2px;
  width: 85%;
  justify-content: center;
  align-items: center;
  resize: none;
  border: none;
  background-color: transparent;
  color: var(--text-color-100);
  &::placeholder {
    color: var(--text-color-100);
  }

  @media only screen and (min-width: 375px) {
    width: 65%;
  }
  @media only screen and (min-width: 768px) {
    width: 75%;
  }

  @media only screen and (min-width: 1440px) {
    width: 80%;
  }
`;

export const StyledInputRadio = styled.input`
  margin-left: auto;
  /* display: none; */
  position: absolute;
  z-index: 1;
  right: 0;
  top: 1px;
  opacity: 0;
  cursor: pointer;
`;
