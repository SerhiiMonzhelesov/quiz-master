import styled from "styled-components";

export const StyledReviews = styled.section`
  width: 100%;
  padding: 80px 0;

  h2 {
    margin-bottom: 20px;
  }

  .swiper {
    height: 200px;
  }

  .swiper-pagination-bullet {
    background: var(--star-color-100);
  }

  .swiper-pagination-bullet-active {
    background: var(--star-color-100);
  }

  @media only screen and (max-width: 767.9px) {
    .swiper {
      max-width: 335px;
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 100px 0;

    h2 {
      margin-bottom: 48px;
    }
    
    .swiper {
      width: 704px;
    }
  }

  @media only screen and (min-width: 1440px) {
    padding: 120px 0;

    .swiper {
      width: 1240px;
      height: 220px;
    }
  }
`;
