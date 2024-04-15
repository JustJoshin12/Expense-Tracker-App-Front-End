import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signin, signup } from '../../utils/auth'; 

export const signIn = createAsyncThunk('user/signIn', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await signin({ email, password });
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const signUp = createAsyncThunk('user/signUp', async (userData, { rejectWithValue }) => {
  try {
    const response = await signup(userData);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


const userSlice = createSlice({
    name: 'user',
    initialState: {
      userInfo: null,
      status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
      error: null,
    },
    reducers: {
      logout: (state) => {
        state.userInfo = null;
        localStorage.removeItem('jwt');
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(signIn.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(signIn.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.userInfo = action.payload;
          // Optionally, save the token to local storage or state
          localStorage.setItem('jwt', action.payload.token);
        })
        .addCase(signIn.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(signUp.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(signUp.fulfilled, (state) => {
          state.status = 'succeeded';
          // Handle sign-up success (e.g., show a success message or log in the user)
        })
        .addCase(signUp.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    },
  });
  
  export const { logout } = userSlice.actions;
  export default userSlice.reducer;
  