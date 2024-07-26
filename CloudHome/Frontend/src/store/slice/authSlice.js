import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthorized: localStorage.getItem("userinfo") ? true : false,
    email: localStorage.getItem("userinfo")
      ? JSON.parse(localStorage.getItem("userinfo")).user.email
      : null,
    name: localStorage.getItem("userinfo")
      ? JSON.parse(localStorage.getItem("userinfo")).user.name
      : null,
    token: localStorage.getItem("userinfo")
      ? JSON.parse(localStorage.getItem("userinfo")).token
      : null,
    isEmailVerified: localStorage.getItem("userinfo")
      ? JSON.parse(localStorage.getItem("userinfo")).user.isEmailVerified
      : false,
  },
  reducers: {
    slicelogin: (state, actions) => {
      const { payload } = actions;
      const { data } = payload;
      const { token, user } = data;
      state.isAuthorized = true;
      state.email = user.email;
      state.name = user.name;
      state.token = token;
      state.isEmailVerified = user.isEmailVerified;
      localStorage.setItem("userinfo", JSON.stringify(data));
    },
    slicelogout: (state) => {
      state.isAuthorized = false;
      state.email = null;
      state.name = null;
      state.token = null;
      state.isEmailVerified = false;
      localStorage.removeItem("userinfo");
    },
    emailVerified: (state) => {
      state.isEmailVerified = true;
      localStorage.setItem(
        "userinfo",
        JSON.stringify({
          user: {
            email: state.email,
            name: state.name,
            isEmailVerified: state.isEmailVerified,
            _id: state._id,
          },
          token: state.token,
        })
      );
    },
  },
});

export const { slicelogin, slicelogout, emailVerified } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
