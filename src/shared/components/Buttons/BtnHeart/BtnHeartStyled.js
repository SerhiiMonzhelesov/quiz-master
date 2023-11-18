import styled from "styled-components";
import { FiHeart } from "react-icons/fi";

export const BtnHeartS = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;  
`;

export const FiHeartS = styled(FiHeart)`
  width: 20px;
  height: 20px;
  stroke: var(--text-color-100);
  transition: stroke 300ms linear;
  &.favorite {
    fill: var(--text-color-100);
  }
  &:hover{
    stroke: var(--accent-color);  
  }
`;
