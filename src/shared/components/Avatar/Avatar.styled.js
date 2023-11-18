import styled from "styled-components";

export const StyledAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-block;

  &.small {
    width: 40px;
    height: 40px;
  }

  &.large{
    width: 100px;
    height: 100px;
  }
`;
