import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/searchBar/SearchBar';
import { getImages, selectImages } from '../../redux/ImagesSlice';
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid';
import Header from '../../components/Header/Header';

import { selectLikedImages } from '../../redux/ImagesSlice';
import {
  HaarthContainer,
  HeartIconStyled,
  NumLikes,
} from '../../components/Header/HeaderStyled';

function Images() {
  const images = useSelector(selectImages);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const likedImages = useSelector(selectLikedImages);

  useEffect(() => {
    if (images.images.length === 0) {
      dispatch(getImages());
    }
  }, [dispatch, images.images]);

  return (
    <>
      <Header>
        <SearchBar />
        <HaarthContainer>
          <NumLikes>
            <p>{likedImages.length}</p>
          </NumLikes>
          <HeartIconStyled onClick={() => navigate(`/liked`)} />
        </HaarthContainer>
      </Header>
      {images && <ImagesGrid images={images.images} />}
    </>
  );
}

export default Images;
