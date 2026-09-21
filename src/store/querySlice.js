import { createSlice } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'queries',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchQueriesStart: (state) => {
      state.loading = true;
    },
    fetchQueriesSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchQueriesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchQueriesStart, fetchQueriesSuccess, fetchQueriesFail } = querySlice.actions;
export default querySlice.reducer;
