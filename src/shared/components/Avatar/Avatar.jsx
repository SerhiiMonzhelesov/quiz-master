import React from "react";
import { StyledAvatar } from "./Avatar.styled";

function Avatar({size, alt, width, src}) {
  return (
    <StyledAvatar className={size ? size : ""} alt={alt} width={width} src={src}/>
  );
}

export default Avatar;