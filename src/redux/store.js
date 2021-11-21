import { configureStore } from "@reduxjs/toolkit";
import { conventerReducer } from "./reducers/reducers";
export const store = configureStore({
  reducer: conventerReducer
});
