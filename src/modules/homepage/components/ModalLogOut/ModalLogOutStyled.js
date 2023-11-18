import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(23, 23, 23, 0.60);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`

  border-radius: 20px;
  border: 1px solid rgba(244, 244, 244, 0.30);
  background: var( --second-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 80px;
  margin: 0;
  position: relative;
  max-width: 474px ;
`;

export const ModalTitle = styled.h2`
color: var(--text-color-100);
font-size: 24px;
font-weight: 700;
line-height: 32px; /* 133.333% */
letter-spacing: -0.24px;
`;

export const ModalContent = styled.div`
  font-size: 16px;
  margin: 16px 0;
  text-align: center;
  color: var(--text-color-100);
line-height: 20px;
`;

export const ButtonLogout = styled.button`
color: var(--text-color-100);
font-size: 16px;
font-weight: 700;
line-height: 16px;
letter-spacing: -0.16px;
  cursor: pointer;
border-radius: 30px;
background: var(--blue-background);
padding: 16px;
border: none;
width: 100%;
margin-bottom: 32px;
`;

export const ButtonCansel = styled.p`
color: var(--text-color-100);
font-size: 16px;
font-weight: 700;
line-height: 16px;
text-decoration-line: underline;
background: transparent;
border: none;
`

export const Close = styled(FiX)`
width: 28px;
height: 28px;
stroke: var(--text-color-100);
position:absolute;
top: 24px;
right:24px;`