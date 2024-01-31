import React from 'react';
import BigButton from '../buttons/BigButton';
import BigWhiteButton from '../buttons/BigWhiteButton';
import { Wrapper, Content, MainText, SecondaryText, Actions } from './styles';

interface ModalProps {
  mainText: string;
  secondaryText: string;
  buttonText: string;
  buttonAction: () => void;
  hideModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  mainText,
  secondaryText,
  buttonText,
  buttonAction,
  hideModal,
}) => (
  <Wrapper>
    <Content>
      <MainText>{mainText}</MainText>
      <SecondaryText>{secondaryText}</SecondaryText>
      <Actions>
        <BigButton text={buttonText} isDisable={false} onClick={() => buttonAction()} />
        <BigWhiteButton text="Cancel" onClick={() => hideModal()} />
      </Actions>
    </Content>
  </Wrapper>
);

export default Modal;
