import { useDispatch } from 'react-redux';
import {
  selecActiveImage,
  setActiveImage,
  toggleLike,
} from '../../redux/ImagesSlice';
import { ImageStyled } from './ImageStyled';
import { useState } from 'react';
import Actions from '../Actions/Actions';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Image({ image }) {
  const [hover, setHover] = useState(false);
  const modalActive = useSelector(selecActiveImage);
  const dispatch = useDispatch();

  return (
    <>
      <ImageStyled
        modalActive={modalActive}
        hover={hover}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && !modalActive && (
          <Actions
            liked={image.liked}
            toggleLike={() => dispatch(toggleLike(image))}
            toggleModal={() => dispatch(setActiveImage(image))}
          />
        )}

        <img src={image.url} alt="" />
      </ImageStyled>
    </>
  );
}

Image.propTypes = {
  image: PropTypes.exact({
    url: PropTypes.string,
    id: PropTypes.number,
    liked: PropTypes.bool,
    active: PropTypes.bool,
  }),
};

export default Image;
