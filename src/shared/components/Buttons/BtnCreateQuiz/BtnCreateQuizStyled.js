import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

export const ButtonS = styled.button`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 194px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: transparent;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    & .bi-btn {
      scale: 2;
      transform: rotateZ(90deg);
    }
    & .bi-wrapper {
      border: 3px solid #205bf1;
    }
  }
`;

export const BiPlusS = styled(BiPlus)`
  width: 24px;
  height: 24px;
  fill: #205bf1;
  transition: all 0.3s ease-in-out;
`;

export const IconWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #205bf1;
  transition: all 0.3s ease-in-out;
`;

export const BtnTitle = styled.h3`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 130px;
  color: var(--text-color-100);

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;
