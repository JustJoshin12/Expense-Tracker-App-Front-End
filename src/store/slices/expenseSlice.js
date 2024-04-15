import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

// Async thunk for fetching expenses
export const fetchExpenses = createAsyncThunk(
  "expense/fetchExpenses",
  async () => {
    const response = await api.getAllExpenses();
    return response;
  }
);

// Async thunk for creating a new expense
export const createExpense = createAsyncThunk(
  "expense/createExpense",
  async (expenseData) => {
    const response = await api.createExpense(expenseData);
    return response;
  }
);

// Async thunk for updating an expense
export const updateExpense = createAsyncThunk(
  "expense/updateExpense",
  async (expenseData) => {
    const response = await api.updateExpense(expenseData);
    return response;
  }
);

// Async thunk for deleting an expense
export const deleteExpense = createAsyncThunk(
  "expense/deleteExpense",
  async (id) => {
    await api.deleteExpense(id);
    return id;
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    items: [],
    status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createExpense.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createExpense.fulfilled, (state) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(createExpense.rejected, (state) => {
        state.status = "failed";
        state.items = action.error.message;
      })
      .addCase(updateExpense.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateExpense.fulfilled, (state) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(updateExpense.rejected, (state) => {
        state.status = "failed";
        state.items = action.error.message;
      })
      .addCase(deleteExpense.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteExpense.fulfilled, (state) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(deleteExpense.rejected, (state) => {
        state.status = "failed";
        state.items = action.error.message;
      });
  },
});

export default expenseSlice.reducer;
