import React from "react";
import { StyledCardTitle } from "./CardTitle.styled";

function CardTitle({children}) {
  return (
    <StyledCardTitle>
        {children}
    </StyledCardTitle>
  );
}

export default CardTitle;
