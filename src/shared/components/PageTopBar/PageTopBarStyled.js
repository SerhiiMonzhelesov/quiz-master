import styled from "styled-components";

export const PageTopBarBox = styled.div`
  /* outline: 1px solid yellow; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  margin-bottom: 40px;

  h2 {
    margin: 0 0 20px;
    padding: 0;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 48px;

    h2 {
      margin: 0;
    }
  }
`;


