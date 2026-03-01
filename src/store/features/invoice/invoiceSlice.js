import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: {
    invoice: "",
  },
};

const invoiceSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      state.value.invoice = action.payload;
    },
    removeInvoice: (state) => {
      state.value.invoice = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addInvoice, removeInvoice } = invoiceSlice.actions;

export default invoiceSlice.reducer;
