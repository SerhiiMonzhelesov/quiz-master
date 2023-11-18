import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

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
  fill: var( --text-color-100);

  @media screen and (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;