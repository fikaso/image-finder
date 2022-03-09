import { CloseIcon, Container, ModalStyled } from './ModalStyled';
import { useDispatch } from 'react-redux';
import { resetActiveImage } from '../../redux/ImagesSlice';
import Actions from '../Actions/Actions';
import PropTypes from 'prop-types';

function Modal({ image, toggleLike }) {
  const dispatch = useDispatch();
  return (
    <ModalStyled>
      <CloseIcon onClick={() => dispatch(resetActiveImage())} />
      <Container>
        <Actions liked={image.liked} toggleLike={toggleLike} />
        <img src={image.url} alt="" />
      </Container>
    </ModalStyled>
  );
}

Modal.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    id: PropTypes.number,
    liked: PropTypes.bool,
    active: PropTypes.bool,
  }),
  toggleLike: PropTypes.func,
};

export default Modal;
