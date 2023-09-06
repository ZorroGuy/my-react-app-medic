import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../folder/PatientSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
