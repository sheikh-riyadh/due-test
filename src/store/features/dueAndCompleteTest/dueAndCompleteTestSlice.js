import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    due: ["2hrs after breakfast"],
    completed: [],
  },
};

const dueAndCompleteTestSlice = createSlice({
  name: "dueAndCompleteTest",
  initialState,
  reducers: {
    addDueTest: (state, action) => {
      const isExist = state.value.due.find((item) => item === action.payload);
      if (!isExist) state.value.due.push(action.payload);
    },
    removeDueTest: (state, action) => {
      const restItem = state.value.due.filter(
        (item) => item !== action.payload,
      );
      state.value.due = [...restItem];
    },
    addCompleteTest: (state, action) => {
      const restItem = state.value.due.filter(
        (item) => item !== action.payload,
      );
      state.value.due = [...restItem];
      const isExist = state.value.completed.find(
        (item) => item === action.payload,
      );
      if (!isExist) state.value.completed.push(action.payload);
    },
    removeCompleteTest: (state, action) => {
      const restItem = state.value.completed.filter(
        (item) => item !== action.payload,
      );
      state.value.completed = [...restItem];
    },
    setCompletedTest: (state, action) => {
      state.value.completed = action.payload;
    },
    setDueTest: (state, action) => {
      state.value.due = action.payload;
    },
    clearTest: (state) => {
      state.value.completed = [];
      state.value.due = ["2hrs after breakfast"];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addDueTest,
  addCompleteTest,
  removeDueTest,
  removeCompleteTest,
  setCompletedTest,
  setDueTest,
  clearTest,
} = dueAndCompleteTestSlice.actions;

export default dueAndCompleteTestSlice.reducer;
