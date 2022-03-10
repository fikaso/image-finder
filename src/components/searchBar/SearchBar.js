import { SearchBarStyled, SearchIconStyled } from './searchBarStyled';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getImages, selecLastSearch } from '../../redux/ImagesSlice';
import { debounce } from 'lodash';

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

  const handleText = debounce((value) => {
    setText(value);
  }, 300);

  return (
    <SearchBarStyled>
      <SearchIconStyled />
      <input
        onChange={(e) => handleText(e.target.value)}
        type="text"
        placeholder="Search Image"
      />
    </SearchBarStyled>
  );
}

export default SearchBar;
