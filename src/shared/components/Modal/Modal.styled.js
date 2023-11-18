import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop);
  backdrop-filter: blur(1.5px);
  overscroll-behavior: contain;
`;
