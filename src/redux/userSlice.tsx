import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { username, password, email } = action.payload;
      state.username = username;
      state.password = password;
      state.email = email;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
