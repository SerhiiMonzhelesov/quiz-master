import React from "react";
import { StyledParagraph } from "./Paragraph.styled";

function Paragraph({children}) {
  return (
    <StyledParagraph>
        {children}
    </StyledParagraph>
  );
}

export default Paragraph;
