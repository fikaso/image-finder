import styled, { css } from 'styled-components';

export const ImageStyled = styled.div`
  position: relative;
  margin-bottom: 1rem;
  break-inside: avoid;
  img {
    max-width: 100%;
    border-radius: 0.5rem;
    ${(props) =>
      props.hover &&
      !props.modalActive &&
      css`
        transition: 0.1s;
        opacity: 0.5;
      `};
  }
`;
