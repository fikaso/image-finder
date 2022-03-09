import styled from 'styled-components';
import { ArrowsExpandIcon, HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/solid';

export const ActionsStyled = styled.div`
  z-index: 100;
  animation: fadeInAnimation 0.1s;

  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DislikeIcon = styled(HeartSolid)`
  cursor: pointer;
  color: red;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1;
  width: 30%;
`;
export const LikeIcon = styled(HeartIcon)`
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1;
  width: 30%;
`;

export const ExpandIcon = styled(ArrowsExpandIcon)`
  cursor: pointer;
  width: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  width: 25px;
`;
