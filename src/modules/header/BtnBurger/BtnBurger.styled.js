import styled from "styled-components";
import { FiAlignJustify } from "react-icons/fi"

export const StyledBtnBurger = styled.button`
position: absolute;
top: 20px;
right: 0;
display: flex;
justify-content: center;
width: 32px;
height: 32px;
background-color: transparent;
`;

export const Burger = styled(FiAlignJustify)`
  width: 28px;
  height: 28px;
  stroke: var(--text-color-100);
`;