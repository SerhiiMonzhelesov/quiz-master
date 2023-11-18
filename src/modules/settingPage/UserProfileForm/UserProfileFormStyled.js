import styled from "styled-components";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { BiPlus } from "react-icons/bi";

export const SettingForm = styled.div`
  display: flex;
  justify-content: center;
  max-width: 580px;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 50px 150px;
  border: 1px solid var(--text-color-30);
  border-radius: 20px;
  background-color: var(--second-background);
  margin-bottom: 53px;
  
  @media screen and (max-width: 768px) {
    max-width: 335px;
    padding: 40px 20px;
    }
  `;

export const AvatarImg = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
  font-family: GilroyBold;
  font-size: 64px;
  line-height: 100px;
  text-align: center;
  background-color: var(--pink-color);
  border-radius: 50%;

  & > p {
    color: var(--text-color-100);
  }
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 47px;
  position: relative;
`;

export const AddAvatarButton = styled.button`
  position: absolute;
  left: 35px;
  width: 30px;
  height: 30px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color-100);
  background-color: var(--blue-background);
  border-radius: 50%;
  border-color: var(--text-color-100);

  &:hover {
    & .bi-btn {
      scale: 1.2;
    }
  }
`;

export const IconPlus = styled(BiPlus)`
  width: 24px;
  height: 24px;
  fill: #f4f4f4;
`;

export const IconWrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  `;

export const FormStyled = styled.form`
  width: 100%;
  `;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 32px;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 295px;
  }
`;

export const InputPasswWrapStyled = styled.div`
  width: 100%;
  position: relative;
`;

export const LuEyeStyled = styled(LuEye)`
  color: var(--text-color-100);
`;

export const LuEyeOffStyled = styled(LuEyeOff)`
  color: var(--text-color-100);
`;

export const BtnEyeStyled = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  width: 30px;
  height: 30px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ErrorsStyled = styled.div`
  margin: 0 0;
  font-size: 12px;
  line-height: 1.1;
  color: var(--pink-color);
`;
