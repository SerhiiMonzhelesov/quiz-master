import styled from "styled-components";

export const TextAnswers = styled.p`
color: rgba(244, 244, 244, 0.60);
line-height: 16px;
margin-top:18px;`

export const Answers = styled.strong`
color: #F4F4F4;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 125% */
text-transform: uppercase;
margin-left: 8px;
`

export const BtnStartS = styled.button`
  margin: 0;
  padding: 0;
  /* padding: 12px 24px; */
  cursor: pointer;
  height: 40px;
  border-radius: 30px;
  border: 1px solid var(--bodrer-color-60);
  /* background-color: rgba(0, 0, 0, 0.8); */
  background-color: transparent;
  /* color: #f4f4f4; */
  color: var(--text-color-100);
  /* font-family: Gilroy; */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: -0.14px;
  margin-top:32px ;
  border: 1px solid rgba(244, 244, 244, 0.60);
  padding: 12px 24px;


  @media (min-width: 768px) {
    min-width: 100%;
    font-size: 16px;
    line-height: 1;
    letter-spacing: -0.16px;
  }
`;
