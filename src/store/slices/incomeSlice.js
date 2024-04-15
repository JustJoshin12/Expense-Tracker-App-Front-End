import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../utils/api'; 

// Async thunk for fetching incomes 
export const fetchIncomes = createAsyncThunk('income/fetchIncomes', async () => {
  const response = await api.getAllIncomes();
  return response;
});

// Async thunk for creating a new income
export const createIncome = createAsyncThunk('income/createIncome', async (incomeData) => {
  const response = await api.createIncome(incomeData);
  return response;
});

// Async thunk for updating an income
export const updateIncome = createAsyncThunk('income/updateIncome', async (incomeData) => {
  const response = await api.updateIncome(incomeData);
  return response;
});

// Async thunk for deleting an income
export const deleteIncome = createAsyncThunk('income/deleteIncome', async (id) => {
  await api.deleteIncome(id);
  return id;
});

const incomeSlice = createSlice({
  name: 'income',
  initialState: {
    items: [],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncomes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIncomes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchIncomes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createIncome.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createIncome.fulfilled, (state) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(createIncome.rejected, (state) => {
        state.status = 'failed';
        state.items = action.error.message;

      })
      .addCase(updateIncome.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateIncome.fulfilled, (state) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(updateIncome.rejected, (state) => {
        state.status = 'failed';
        state.items = action.error.message;
      })
      .addCase(deleteIncome.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteIncome.fulfilled, (state) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(deleteIncome.rejected, (state) => {
        state.status = 'failed';
        state.items = action.error.message;
      })
  },
});

export default incomeSlice.reducer;
