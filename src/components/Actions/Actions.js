import {
  ActionsStyled,
  DislikeIcon,
  ExpandIcon,
  LikeIcon,
} from './ActionsStyled';
import PropTypes from 'prop-types';

function Actions({ liked, toggleLike, toggleModal }) {
  return (
    <ActionsStyled>
      {liked ? (
        <DislikeIcon onClick={() => toggleLike()} />
      ) : (
        <LikeIcon onClick={() => toggleLike()} />
      )}
      {toggleModal && <ExpandIcon onClick={() => toggleModal()} />}
    </ActionsStyled>
  );
}

Actions.propTypes = {
  liked: PropTypes.bool,
  toggleLike: PropTypes.func,
  toggleModal: PropTypes.func,
};

export default Actions;
