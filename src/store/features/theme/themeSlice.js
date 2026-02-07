import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    theme: "light",
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    addTheme: (state, action) => {
      state.value.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTheme } = themeSlice.actions;

export default themeSlice.reducer;
