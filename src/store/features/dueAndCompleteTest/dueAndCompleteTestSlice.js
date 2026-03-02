import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    due: [],
    completed: [],
  },
};

const invoiceSlice = createSlice({
  name: "dueAndCompleteTest",
  initialState,
  reducers: {
    addDueTest: (state, action) => {
      state.value.invoice = action.payload;
    },
    removeDueTest:()=>{

    },
    addCompleteTest: (state) => {
      state.value.invoice = "";
    },
    removeCompleteTest:()=>{
        
    }
  },
});

// Action creators are generated for each case reducer function
export const { addInvoice, removeInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
