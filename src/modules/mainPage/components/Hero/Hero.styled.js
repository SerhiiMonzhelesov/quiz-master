import styled from "styled-components";

export const StyledHero = styled.section`
  width: 100%;
  padding-top: 358px;

  & > div {
    margin: 0 auto 80px;
  }

  p {
    margin-bottom: 16px;
  }

  div > div {
    padding-top: 16px;
    display: flex;
    gap: 14px;
  }

  h1 {
    font-size: 11.73vw;
    margin: 0 auto 80px;
    letter-spacing: -0.003em;
    line-height: 1.09;
    font-family: GilroyBold, sans-serif;
    font-weight: normal;
    max-width: 335px;
  }

  button:hover,
  button:focus {
    transform: scale(1.1);
  }

  @media only screen and (min-width: 375px) {
    & > div {
      max-width: 375px;
    }

    h1 {
      font-size: 44px;
    }
  }

  @media only screen and (min-width: 768px) {
    padding-top: 396px;

    h1 {
      font-size: 90px;
      margin-bottom: 100px;
      letter-spacing: -0.9px;
      line-height: 96px;
      max-width: 100%;
    }

    & > div {
      width: 396px;
      max-width: 396px;
      margin: 0 0 96px;
    }
  }

  @media only screen and (min-width: 1440px) {
    padding-top: 142px;

    & > div {
      margin-bottom: 124px;
    }

    h1 {
      font-size: 120px;
      margin-bottom: 303px;
      letter-spacing: -1.2px;
      line-height: 110px;
    }
  }
`;
