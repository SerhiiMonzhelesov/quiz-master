import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 80px 0 100px 0;
  }
`;

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
