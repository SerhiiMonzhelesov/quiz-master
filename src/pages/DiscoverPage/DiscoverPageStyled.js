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

export const TitleIconBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 48px;
  }
`;

export const TitleS = styled.h2`
  margin: 0 0 20px;
  padding: 0;
  color: var(--text-color-100);
  font-family: GilroyBold;
  font-size: 32px;
  line-height: 1.19;
  letter-spacing: -0.32px;

  @media (min-width: 768px) {
    margin: 0;
    font-size: 44px;
    line-height: 1.09;
    letter-spacing: -0.44px;
  }
`;
