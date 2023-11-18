import React from 'react'
import { StyledEmptyBlock } from "./EmptyBlock.styled";

function EmptyBlock({children}) {
  return (
    <StyledEmptyBlock>
    {children}
</StyledEmptyBlock>
  )
}

export default EmptyBlock