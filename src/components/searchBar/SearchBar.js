import { SearchBarStyled, SearchIconStyled } from './searchBarStyled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getImages, selecLastSearch } from '../../redux/ImagesSlice';
function SearchBar() {
  const lastSearch = useSelector(selecLastSearch);
  const [text, setText] = useState(lastSearch ?? '');
  const dispatch = useDispatch();

  useEffect(() => {
    if (text === lastSearch) {
      return;
    }
    dispatch(getImages(text));
  }, [dispatch, text, lastSearch]);

  return (
    <SearchBarStyled>
      <SearchIconStyled />
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        placeholder="Search Image"
      />
    </SearchBarStyled>
  );
}

export default SearchBar;
