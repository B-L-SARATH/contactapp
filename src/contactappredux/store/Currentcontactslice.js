import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: " ", email: " " };
const Currentcontactslice = createSlice({
  name: "Currentcontactslice",
  initialState,
  reducers: {
    setcontact(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});
export default Currentcontactslice.reducer;
export const { setcontact } = Currentcontactslice.actions;
