import { StyledMediumBtn } from "./MediumBtn.styled";

const MediumBtn = ({children, type, handlerClick}) => {

  return (
      <StyledMediumBtn type="button" onClick={handlerClick} className={type ? type : ""}>
        {children}
      </StyledMediumBtn>
  );
};

export default MediumBtn;