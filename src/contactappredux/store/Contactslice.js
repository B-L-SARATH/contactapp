import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const Contactslice = createSlice({
  name: "contactslice",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    removecontact(state, action) {
      state.splice(action.payload, 1);
    },
    updatecontacts(state, action) {
      return action.payload;
    },
  },
});
export default Contactslice.reducer;
export const { add, removecontact, updatecontacts } = Contactslice.actions;
