import { InputS } from "./InputDefault.styled";


const InputDefault = ({ variant, ...restProps }) => (
  <InputS className={variant} {...restProps} />
);

export default InputDefault;
