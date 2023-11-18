import React from 'react';
import { ButtonCansel, ButtonLogout, Close, ModalContainer, ModalContent, ModalOverlay, ModalTitle } from './ModalLogOutStyled';
import { useDispatch } from 'react-redux';
import { logOutUserThunk } from '../../../../redux/user/userThunks';


const LogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch()

  if (!isOpen) return null;


    const handleLogout = () => {
    dispatch(logOutUserThunk());
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <Close onClick={onClose} style={{ cursor: 'pointer' }} />
        <ModalTitle>Log out</ModalTitle>
        <ModalContent>
          Are you sure you want to log out of your account?
        </ModalContent>
        <ButtonLogout onClick={handleLogout}>
          Log out
        </ButtonLogout>
        <ButtonCansel onClick={onClose}>Cancel</ButtonCansel>
      </ModalContainer>
    </ModalOverlay>
  );
};
export default LogoutModal;