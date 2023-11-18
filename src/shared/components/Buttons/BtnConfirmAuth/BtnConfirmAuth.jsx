import { BtnConfirmAuthS } from "./BtnConfirmAuthS";


const BtnConfirmAuth = ({ children }) => {
  return (
    <>
      <BtnConfirmAuthS type="submit">{children}</BtnConfirmAuthS>
    </>
  );
};

export default BtnConfirmAuth;
