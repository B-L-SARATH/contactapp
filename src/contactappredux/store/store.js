import { configureStore } from "@reduxjs/toolkit";
import Contactslice from "./Contactslice";
import Currentcontactslice from "./Currentcontactslice";
const store = configureStore({
  reducer: {
    contacts: Contactslice,
    currentcontact: Currentcontactslice,
  },
});
export default store;
