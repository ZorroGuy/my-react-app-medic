import { createSlice } from "@reduxjs/toolkit";

export const PatientSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    login: null,
  },

  reducers: {
    data: (state, action) => {
      state.user.push(action.payload);
      console.log(action.payload);
    },

    login: (state, action) => {
      state.login = action.payload;
      console.log(action.payload);
    },
    logout: (state) => {
      state.login = null;
    },

    remove: (state, action) => {
      // state.user.filter((val, index) => index === action.payload);

      console.log(action.payload);
      // const temp = state.user.filter((val, index) => index === action.payload);
      state.user.splice(action.payload, 1);
      console.log(state.user);
    },
  },
});

export const { data, login, remove, logout } = PatientSlice.actions;
export const selectUser = (state) => state.user.user;

export default PatientSlice.reducer;
