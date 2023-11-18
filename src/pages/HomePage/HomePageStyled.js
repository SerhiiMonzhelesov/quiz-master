import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  @media (min-width: 768px) {
  margin-top: 100px;
  max-width: 1240px;
  margin-left:auto;
  margin-right: auto;
  }

`;

export const TitleHome = styled.h2`
  color: var(--text-color-100);
  font-size: 44px;
  font-weight: 700;
  line-height: 48px; /* 109.091% */
  letter-spacing: -0.44px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const TitleLastPassedQ = styled.p`
  color: var(--text-color-100);
  font-size: 20px;
  font-weight: 700;
  line-height: 28px; /* 140% */
  letter-spacing: -0.2px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 32px; /* 133.333% */
  }
`;

export const BoxLastPassed = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

export const BoxUserStats = styled.div`
  display: table;
  margin: auto;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
    display: flex;
    gap: 24px;
  }
`;
