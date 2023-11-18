import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 80px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
  }
`;

export const SectionWrapper = styled.section`
  /* width: 100%; */
  width: clamp(280px, 335px, 100%);
  display: flex;
  flex-wrap: wrap;
  column-gap:24px;
  flex-direction: row;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 704px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1240px;
    flex-wrap: nowrap;
  }
`;

