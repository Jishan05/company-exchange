import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // store full user info
  token: null, // store JWT token
};

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token; // store token
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = loginSlice.actions;
export default loginSlice.reducer;
