import React from 'react'
import { ButtonLogin } from './ButtonLogin.styled'

const BtnLogin = ({handleOpenModal, children}) => {
  return (
    <ButtonLogin onClick={handleOpenModal}>{children}</ButtonLogin>
  )
}

export default BtnLogin