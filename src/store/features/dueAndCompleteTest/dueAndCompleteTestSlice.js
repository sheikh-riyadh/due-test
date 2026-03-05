import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    due: ["2hrs after breakfast"],
    completed: [],
  },
};

const invoiceSlice = createSlice({
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
  },
});

// Action creators are generated for each case reducer function
export const {
  addDueTest,
  addCompleteTest,
  removeDueTest,
  removeCompleteTest,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
