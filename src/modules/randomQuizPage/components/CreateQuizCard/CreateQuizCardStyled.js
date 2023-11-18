import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

export const CardRedirecionWrapper = styled.button`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 335px;
  height: 364px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #205bf1;

  @media (min-width: 768px) {
    width: 340px;
  }

  @media (min-width: 1440px) {
    width: 292px;
    height: 364px;
  }
`;

export const RedirectionButtonWrap = styled.div`
  box-sizing: border-box;
  margin-top: 112px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RedIconWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid rgba(244, 244, 244, 0.6);
  transition: all 0.3s ease-in-out;
`;

export const ButtonRedStyled = styled.div`
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
`;

export const BiPlusRed = styled(BiPlus)`
  width: 24px;
  height: 24px;
  fill: #f4f4f4;
  transition: all 0.3s ease-in-out;
`;

export const RandomPageCardTitle = styled.h3`
 color: #F4F4F4;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.4;
  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`;
