import React from 'react';
import { BackArrow, BackText, StyledLink } from "./GoBackBtn.styled";
import { useNavigate } from 'react-router-dom'; 

const GoBackBtn = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (navigate.length > 1) {
      navigate(-1);
    } else {
      navigate("/quiz-master");
    }
  };

  return (
    <StyledLink onClick={handleGoBack}>
      <BackArrow />
      <BackText>Back</BackText>
    </StyledLink>
  );
};

export default GoBackBtn;