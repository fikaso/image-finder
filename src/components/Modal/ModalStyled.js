import styled from 'styled-components';
import { XIcon } from '@heroicons/react/outline';

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 1rem;
  transform: translate3d(-50%, -50%, 0);
  background-color: white;
  z-index: 100;
`;

export const Container = styled.div`
  position: relative;
  img {
    display: block;
    margin: 8rem auto;
    width: 80%;
  }
`;

export const CloseIcon = styled(XIcon)`
  cursor: pointer;
  width: 25px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
