
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import incomeReducer from '../store/slices/incomeSlice';
import expenseReducer from '../store/slices/expenseSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    income: incomeReducer,
    expenses: expenseReducer,
  },
});
