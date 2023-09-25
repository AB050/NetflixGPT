import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../utility/userSlice";

const appStore = configureStore({
  reducer: {
    User: useReducer,
  },
});

export default appStore;
