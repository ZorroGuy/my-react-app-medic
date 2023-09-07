import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../folder/PatientSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfiger = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfiger, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
