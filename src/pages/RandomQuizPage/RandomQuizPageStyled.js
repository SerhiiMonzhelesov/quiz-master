import styled from "styled-components";

export const RandomPageWrapper = styled.div`
  //outline: 1px solid green;
  padding: 80px 0 0;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
`;

export const RandomSectionWrapper = styled.section`
  //outline: 1px solid red;
  width: 100%;
  //max-width: 1240px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const RandomPageDesc = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;

  p {
    display: inline-block;
    width: 100%;
    font-size: 14px;
  }

  @media only screen and (min-width: 375px) {
    p {
      width: 335px;
    }
  }

  @media only screen and (min-width: 768px) {
    margin-top: 24px;
    margin-bottom: 48px;
    p {
      width: 584px;
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 1440px) {
    p {
      width: 660px;
    }
  }
`;

export const RandomBtnWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;

  @media only screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;
