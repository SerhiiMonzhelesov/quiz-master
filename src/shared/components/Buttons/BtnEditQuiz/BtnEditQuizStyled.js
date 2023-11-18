import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export const WrapperEditS = styled.div`
  /* width: 20px;
height: 20px; */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Btn3DotsS = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  /* p {
    display: block;
  } */
`;

export const Icon3DotsS = styled(BsThreeDots)`
  width: 100%;
  height: 100%;
  fill: var(--text-color-100);
  transition: fill 300ms linear;
  &:hover {
    fill: var(--accent-color);
  }
`;

export const UlListOpions = styled.ul`
  display: none;
  &.openList {
    /* height: 126px;
    overflow-y: auto; */
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 112px;
    /* width: 100%; */
    padding: 20px;
    background: var(--blue-background);
    border-radius: 20px;
    font-family: GilroyRegular, sans-serif;
    color: var(--text-color-100);
  }
  @media (min-width: 768px) {
  }
`;

export const LiOption = styled.li`
  cursor: pointer;
  &:hover {
    scale: 1.02;
    box-shadow: 0 0 0 0.2rem rgba(0, 170, 255, 0.25);
  }
`;

export const LinkEdit = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconEditS = styled(FiEdit)`
  width: 16px;
  height: 16px;
  stroke: var(--text-color-100);
`;

export const BtnDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: transparent;
  color: var(--text-color-100);
`;

export const IconDeleteS = styled(FiTrash2)`
  width: 16px;
  height: 16px;
  stroke: var(--text-color-100);
`;
