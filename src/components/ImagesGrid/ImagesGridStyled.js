import styled from 'styled-components';
import { css } from 'styled-components';

export const ImagesGridStyled = styled.div`
  columns: 1;
  column-gap: 1.5rem;

  ${(props) =>
    props.activeImage &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
    `};

  @media (min-width: 400px) {
    columns: 2;
  }
  @media (min-width: 800px) {
    columns: 3;
  }
`;
