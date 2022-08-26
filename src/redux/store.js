import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import invauthSlice from "./invauthSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    invauth: invauthSlice,
  },
});
