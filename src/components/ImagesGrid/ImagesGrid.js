import { selecActiveImage, toggleLike } from '../../redux/ImagesSlice';
import Image from '../Image/Image';
import { ImagesGridStyled } from './ImagesGridStyled';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function ImagesGrid({ images }) {
  const activeImage = useSelector(selecActiveImage);
  const dispatch = useDispatch();

  return (
    <>
      <ImagesGridStyled activeImage={activeImage}>
        {images.map((image) => (
          <Image image={image} key={image.id} />
        ))}
        {activeImage && (
          <Modal
            image={activeImage}
            toggleLike={() => dispatch(toggleLike(activeImage))}
          />
        )}
      </ImagesGridStyled>
    </>
  );
}

ImagesGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      id: PropTypes.number,
      liked: PropTypes.bool,
      active: PropTypes.bool,
    })
  ),
  active: PropTypes.bool,
};

export default ImagesGrid;
