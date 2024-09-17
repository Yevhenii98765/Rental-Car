import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  selectors: {
    selectFilter: state => state.value,
  },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const { selectFilter } = filterSlice.selectors;
