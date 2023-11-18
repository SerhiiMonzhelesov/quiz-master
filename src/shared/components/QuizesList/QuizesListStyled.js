import styled from "styled-components";

export const CardList = styled.ul`
  /* outline: 1px solid blue; */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  &.bottomVariant {
    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 48px;
    column-gap: 24px;
    &.bottomVariant {
      margin-bottom: 48px;
    }
  }
`;
