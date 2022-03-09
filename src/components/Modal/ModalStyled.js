import styled from 'styled-components';
import { XIcon } from '@heroicons/react/outline';

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: white;
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
  width: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
