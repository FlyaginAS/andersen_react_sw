import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../services/api-service';

//начальное состояние стейта
//тут буду загружать данные из локалстридж
const initialState = {
  people: [],
  status: 'idle',
  filter: '',
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
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
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
export const { changeFilter } = peopleSlice.actions;
//экспорт селекторов
export const selectPeople = (state) => state.people.people;
export const selectStatus = (state) => state.people.status;
export const selectPerson = (id) => (state) =>
  state.people.people.find((item) => item.id == id);
export const selectFilter = (state) => state.people.filter;

//экспорт созданного для нас редьюсера
export default peopleSlice.reducer;
