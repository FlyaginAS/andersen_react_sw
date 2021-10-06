import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../services/api-service';

//начальное состояние стейта
const initialState = {
  people: [],
  status: 'idle',
};

//асинхронные ф-ии прокидываем в thunk
export const getPeople = createAsyncThunk(
  'people/fetchPeople',
  apiService.getPeople
);

//создаем слайс общего стейта
export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPeople.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPeople.fulfilled, (state, action) => {
        state.status = 'idle';
        state.people = action.payload;
      });
  },
});

//экспорт созданных для нас экшен-криэйтеров
//экспорт селекторов
export const selectPeople = (state) => state.people;
export const selectStatus = (state) => state.status;

//экспорт созданного для нас редьюсера
export default peopleSlice.reducer;
