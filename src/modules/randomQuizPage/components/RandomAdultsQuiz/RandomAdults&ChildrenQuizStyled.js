import styled from "styled-components";

export const RandomAPageWrapper = styled.div`
  padding: 80px 0 0;
  margin-left: auto;
  margin-right: auto;
  max-width:1240px;
`;

export const RandomASectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px){
    max-width:704px;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 1440px){
    max-width: 100%;
    margin: 0;
  }
`;


export const RandomAPageDesc = styled.div`
  width: 100%;
  margin-bottom: 40px;

  h2{
margin-bottom: 20px;
  }

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
    margin-bottom: 48px;
    h2{
margin-bottom: 24px;
    }
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

export const RandomABtnWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;

  @media only screen and (min-width: 768px) {
    margin-top: 48px;
  }
`;