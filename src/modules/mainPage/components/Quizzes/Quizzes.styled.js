import styled from "styled-components";

export const StyledQuizzes = styled.section`
  width: 100%;

  h2 {
    margin-bottom: 20px;
  }

  p {
    display: inline-block;
    width: 100%;
  }

  & > div {
    width: 100%;
  }

  h2 + div {
    display: flex;
    align-items: flex-start;
    margin-bottom: 40px;
    flex-direction: column;
    gap: 20px;
  }

  ul {
    margin-bottom: 120px;
  }

  .swiper {
    margin-bottom: 50px;
    height: 400px;
  }

  .swiper-pagination-bullet {
    background: var(--star-color-100);
  }

  .swiper-pagination-bullet-active {
    background: var(--star-color-100);
  }

  @media only screen and (min-width: 375px) {
    p {
      width: 335px;
    }

    & > div {
      width: 335px;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 768px) {

    h2 {
      margin-bottom: 24px;
    }

    p {
      width: 584px;
    }

    h2 + div {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 48px;
    }

    & > div {
      width: 100%;
      margin: 0;
    }

    .swiper {
      width: 705px;
      height: 420px;
      margin-bottom: 100px;
    }
  }

  @media only screen and (min-width: 1440px) {
    p {
      width: 660px;
    }
  }
`;
