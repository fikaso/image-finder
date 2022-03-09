import { HeaderStyled } from './HeaderStyled';
import PropTypes from 'prop-types';

function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
