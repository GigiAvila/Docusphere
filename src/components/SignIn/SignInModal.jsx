import React from 'react';
import { MODAL_TITLE, MODAL_TEXT_CONTENT } from '../../data/ModalText'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

function SignInModal({ isOpen, onClose }) {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px)'
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  );

  const { onOpen, onClose: handleClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader>{MODAL_TITLE}</ModalHeader>
        <ModalCloseButton onClick={handleClose} />
        <ModalBody>
          <p>{MODAL_TEXT_CONTENT}</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SignInModal;
