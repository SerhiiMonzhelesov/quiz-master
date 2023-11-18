import styled from "styled-components";

export const StyledAdvantages = styled.section`
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto 80px;
  }

  li {
    width: 100%;
    padding: 25px;
    line-height: 1.28;
    border-radius: 30px;
    background-color: var(--white-background);
    font-size: 3.73vw;
    font-family: GilroyBold, sans-serif;
    text-align: center;
    color: white;
  }

  @media only screen and (min-width: 375px) {
    ul {
      width: 335px;
    }
    li {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 768px) {
    ul {
      width: 705px;
      flex-direction: row;
      margin: 0 auto 100px;
    }

    li {
      height: 70px;
      font-size: 16px;
      line-height: 1.25;
    }

    li:first-child {
      flex-shrink: 1.2;
    }
  }

  @media only screen and (min-width: 1440px) {
    ul {
      width: 1158px;
      gap: 24px;
      margin: 0 auto 120px;
    }

    li {
      width: 370px;
    }
  }
`;
