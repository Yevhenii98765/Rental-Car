import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchDataThunk } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
};

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
