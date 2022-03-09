import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { HomePageIcon } from '../../components/Header/HeaderStyled';
import ImagesGrid from '../../components/ImagesGrid/ImagesGrid';
import { selectLikedImages } from '../../redux/ImagesSlice';

function LikedImages() {
  const images = useSelector(selectLikedImages);
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <h2>Liked Images</h2>
        <HomePageIcon onClick={() => navigate(`/`)} />
      </Header>
      {images.length > 0 && <ImagesGrid images={images} />}
    </>
  );
}

export default LikedImages;
