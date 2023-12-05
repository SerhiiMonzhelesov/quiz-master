import styled from "styled-components";

export const StyledCreateQuizModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 474px;
  background-color: var(--second-background);
  border-radius: 20px;
  border: 1px solid rgba(244, 244, 244, 0.3);
  color: white;
  padding: 100px 80px;

  .conrirm {
    margin: 25px 25px 0 0;
  }
`;
