import { BtnConfirmSettingsS } from "./BtnConfirmSettingsS";


const BtnConfirmSettings = ({ children, isDisabled}) => {
  return (
    <>
      <BtnConfirmSettingsS type="submit" disabled={isDisabled} className={isDisabled?"isDisabled":""}>{children}</BtnConfirmSettingsS>
    </>
  );
};

export default BtnConfirmSettings;
