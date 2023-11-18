import React from "react";
import { StyledPageTitle } from "./PageTitle.styled";

function PageTitle({children}) {
  return (
    <StyledPageTitle>
        {children}
    </StyledPageTitle>
  );
}

export default PageTitle;
