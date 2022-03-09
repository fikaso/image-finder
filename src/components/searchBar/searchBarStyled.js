import { SearchIcon } from '@heroicons/react/outline';
import styled from 'styled-components';
export const SearchBarStyled = styled.div`
  margin: 0 auto;
  position: relative;
  height: fit-content;
  width: 100%;
  max-width: 320px;
  padding: 0.5rem 3rem;
  border: 1px solid gray;
  border-radius: 30px;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
  }
`;

export const SearchIconStyled = styled(SearchIcon)`
  width: 15px;
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  left: 1rem;
`;
