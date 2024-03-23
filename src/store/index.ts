import { configureStore } from "@reduxjs/toolkit";
import restaurentReducer from "./Restaurent.ts";

export default configureStore({
  reducer: {
    restaurent: restaurentReducer,
  },
});
