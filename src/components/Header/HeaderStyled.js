import styled from 'styled-components';
import { HeartIcon } from '@heroicons/react/solid';
import { HomeIcon } from '@heroicons/react/outline';

export const HeaderStyled = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 450px) {
    flex-direction: row;
  }
`;

export const HaarthContainer = styled.div`
  position: relative;
  cursor: pointer;

  @media (max-width: 450px) {
    margin-top: 1rem;
  }
`;
export const NumLikes = styled.div`
  position: absolute;
  top: 0;
  right: -6px;
  background-color: red;
  color: white;
  font-size: 12px;
  height: 6px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

export const HeartIconStyled = styled(HeartIcon)`
  width: 40px;
`;

export const HomePageIcon = styled(HomeIcon)`
  cursor: pointer;
  width: 50px;
`;
