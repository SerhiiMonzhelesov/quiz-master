import { AiOutlineCloseS, BtnCloseS } from "./BtnCloseStyled";

const BtnClose = ({onClick}) => {
  return (
    <>
      <BtnCloseS type="button" onClick={onClick}>
        <AiOutlineCloseS/>
      </BtnCloseS>
    </>
  );
};

export default BtnClose;
