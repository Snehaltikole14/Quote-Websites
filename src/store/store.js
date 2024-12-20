import { configureStore } from "@reduxjs/toolkit";
import { quotesReducer } from "../features/QuoteSlice";


export default configureStore({
  reducer: {
    quotes :quotesReducer,
    
  },
});
