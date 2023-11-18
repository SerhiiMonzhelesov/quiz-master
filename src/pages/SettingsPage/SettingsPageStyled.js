import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 64px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  justify-content: flex-start;
  
  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
  `;