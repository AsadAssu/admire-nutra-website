import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  hydrated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    hydrateAuth: (state, action) => {
      state.user = action.payload;
      state.hydrated = true;
    },
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { hydrateAuth, loginStart, loginSuccess, loginFail, logout } = authSlice.actions;
export default authSlice.reducer;
