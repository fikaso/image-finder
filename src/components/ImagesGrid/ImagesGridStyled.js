import styled from 'styled-components';

export const ImagesGridStyled = styled.div`
  columns: 1;
  column-gap: 1.5rem;
  @media (min-width: 400px) {
    columns: 2;
  }
  @media (min-width: 800px) {
    columns: 3;
  }
`;
