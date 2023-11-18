import React from 'react'
import { ButtonRegister } from './ButtonRegister.styled'

const BtnRegister = ({handleOpenModal, children}) => {
  return (
    <ButtonRegister onClick={handleOpenModal}>{children}</ButtonRegister>
  )
}

export default BtnRegister