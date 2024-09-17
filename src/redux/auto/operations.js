import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goitApi = axios.create({
  baseURL: 'https://66e91cfb87e41760944819bd.mockapi.io/',
});

export const fetchDataThunk = createAsyncThunk(
  'fetchData',
  async (dispatch, thunkAPI) => {
    try {
      const { data } = await goitApi.get('/Auto');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
