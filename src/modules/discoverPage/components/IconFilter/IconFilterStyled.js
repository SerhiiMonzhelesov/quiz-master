import styled from "styled-components";
import { FiFilter } from "react-icons/fi";

export const IconBox = styled.div`
  box-sizing: border-box;
  width: 94px;
  padding: 15px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid var(--border-color-30);
  background-color: transparent;
  color: var(--text-color-100);
`;
export const FiFilterS = styled(FiFilter)`
  width: 14px;
  height: 14px;
  stroke: var(--text-color-100);
`;

export const TitleS = styled.p`
  display: block;
  color: var(--text-color-100);
  font-size: 14px;
  line-height: 1.286;
  letter-spacing: -0.14px;
`;
