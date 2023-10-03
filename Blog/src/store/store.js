import { configureStore } from "@reduxjs/toolkit";
import { login, logout } from "./authSlice";
const store = configureStore({
  reducer: {
    login: login,
    logout: logout,
  },
});

export default store;
