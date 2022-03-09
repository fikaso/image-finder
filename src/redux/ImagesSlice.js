import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getImages = createAsyncThunk(
  'images/get',
  async (searchString) => {
    let url;
    if (searchString) {
      url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchString}`;
    } else {
      url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}`;
    }
    const response = await fetch(url);
    return response.json();
  }
);

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
    activeImage: false,
    likedImages: [],
    lastSearch: '',
    status: null,
  },
  reducers: {
    toggleLike: (state, action) => {
      const alreadyLiked = state.likedImages.find(
        (image) => image.id === action.payload.id
      );

      if (!alreadyLiked) {
        state.likedImages.push({
          url: action.payload.url,
          id: action.payload.id,
          active: action.payload.active,
          liked: true,
        });
      } else {
        state.likedImages = state.likedImages.filter(
          (image) => image.id !== action.payload.id
        );
      }

      state.images = state.images.map((image) => {
        if (image.id === action.payload.id) {
          return {
            ...image,
            liked: !image.liked,
          };
        } else {
          return image;
        }
      });

      if (state.activeImage) {
        state.activeImage.liked = !state.activeImage.liked;
      }
    },

    setActiveImage: (state, action) => {
      state.activeImage = {
        id: action.payload.id,
        url: action.payload.url,
        active: true,
        liked: action.payload.liked,
      };
    },
    resetActiveImage: (state) => {
      state.activeImage = false;
    },
  },
  extraReducers: {
    [getImages.pending]: (state) => {
      state.status = 'getLoading';
    },
    [getImages.fulfilled]: (state, action) => {
      state.images = [];
      action.payload.hits.map((image) =>
        state.images.push({
          url: image.largeImageURL,
          id: image.id,
          liked: false,
          active: false,
        })
      );
      state.status = 'getSuccess';
      state.lastSearch = action.meta.arg;
    },
    [getImages.rejected]: (state) => {
      state.status = 'getFailed';
    },
  },
});

export const selectImages = (state) => state.images;
export const selectLikedImages = (state) => state.images.likedImages;
export const selecActiveImage = (state) => state.images.activeImage;
export const selecLastSearch = (state) => state.images.lastSearch;
export const { toggleLike, setActiveImage, resetActiveImage } =
  imagesSlice.actions;

export default imagesSlice.reducer;
