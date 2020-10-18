import React from 'react';
import { ModalContainer, ModalWrapper, ModalHeader, ModalContent, CloseButton } from './ModalStyles'

const Modal = ({header, footer, display, handleCloseAction, children}) => {

  return (
    <ModalContainer style={{'display': display}}>
      <ModalWrapper>
          <ModalHeader>
            {header}
            <CloseButton onClick={handleCloseAction} >&times;</CloseButton>
          </ModalHeader>
          <ModalContent >
              {children}
          </ModalContent>
          <footer>
            {footer}
          </footer>
      </ModalWrapper>
    </ModalContainer>
  )
};

export default Modal