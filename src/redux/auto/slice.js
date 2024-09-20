import { createAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchDataThunk } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  isLiked: false,
};

export const toggleLike = createAction('toggleLike');
function saveLike(id) {
  let isLiked = JSON.parse(localStorage.getItem('isLiked')) || [];
  if (!isLiked.includes(id)) {
    isLiked.push(id);
    localStorage.setItem('isLiked', JSON.stringify(isLiked));
  }
}

function removeLike(id) {
  let isLiked = JSON.parse(localStorage.getItem('isLiked')) || [];
  if (isLiked.includes(id)) {
    isLiked = isLiked.filter(item => item !== id);
    localStorage.setItem('isLiked', JSON.stringify(isLiked));
  }
}

const slice = createSlice({
  name: 'auto',
  initialState,
  selectors: {
    selectAuto: state => state.items,
    selectIsLoading: state => state.isLoading,
    selectIsError: state => state.isError,
  },

  extraReducers: builder => {
    builder
      .addCase(toggleLike, (state, action) => {
        const item = state.items.find(item => item.id === action.payload);
        if (item) {
          item.isLiked = !item.isLiked;
          if (item.isLiked) {
            saveLike(item.id);
          } else {
            removeLike(item.id);
          }
        }
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addMatcher(isAnyOf(fetchDataThunk.pending), (state, action) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchDataThunk.fulfilled), (state, action) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(fetchDataThunk.rejected), (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const autoReducer = slice.reducer;
export const { fetchDataSuccessfully, fetchingData, fetchingError } =
  slice.actions;
export const { selectAuto, selectIsLoading, selectIsError } = slice.selectors;
