
import { FiSearchS, Options, SelectStyled } from "./SelectStyled";

const SelectCustom = ({className, selectTitle, options}) => {


  return (
    <>
      <SelectStyled className={className}>
                
        <Options value="">{selectTitle} <FiSearchS/></Options>
        <Options value="">{options}</Options>         
        <Options value="">{options}</Options>
      </SelectStyled>
    </>
  );
};

export default SelectCustom;
