import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    logged: false,
    token: null,
    loading: false,
  },
  reducers: {
    logIn: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
      state.logged = true;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.logged = false;
      localStorage.removeItem("userInfo");
    },
  },
});
