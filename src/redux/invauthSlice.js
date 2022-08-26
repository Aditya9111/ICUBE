import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  isLoggedIn: false,
  user: {},
};

export const loginInvestor = createAsyncThunk(
  "invauth/loginInvestor",
  async (userData) => {
    const { data } = await axios.post("/invauth/login", userData);
    return data;
  }
);

export const registerInvestor = createAsyncThunk(
  "invauth/registerInvestor",
  async (userData) => {
    const { data } = await axios.post("/invauth/register", userData);
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout: (state, action) => {
      localStorage.clear();
      state.isLoggedIn = false;
      axios.defaults.headers.common["authorization"] = null;
    },
  },
  extraReducers: {
    [loginInvestor.pending]: (state, action) => {
      state.status = "loading";
    },
    [loginInvestor.fulfilled]: (state, action) => {
      const { token, name, email, organisation } = action.payload.response;
      localStorage.setItem(
        "login",
        JSON.stringify({
          token,
          email,
          name,
          organisation,
          isLoggedIn: true,
          isInvestor: true,
        })
      );
      state.user.name = name;
      state.user.email = email;
      state.user.organisation = organisation;
      state.status = "success";
      state.isLoggedIn = true;
    },
    [loginInvestor.rejected]: (state, action) => {
      state.status = "failed";
      state.isLoggedIn = false;
    },

    [registerInvestor.pending]: (state, action) => {
      state.status = "loading";
    },
    [registerInvestor.fulfilled]: (state, action) => {
      state.status = "success";
      const { token, name, email, organisation } = action.payload.response;
      localStorage.setItem(
        "login",
        JSON.stringify({
          token,
          name,
          email,
          organisation,
          isLoggedIn: true,
          isInvestor: true,
        })
      );
      state.user.name = name;
      state.user.email = email;
      state.user.organisation = organisation;
      state.isLoggedIn = true;
    },
    [registerInvestor.rejected]: (state, action) => {
      state.status = "failed";
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
export const { setAuth, logout } = authSlice.actions;
