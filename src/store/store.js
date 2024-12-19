import { configureStore } from "@reduxjs/toolkit";
import { getQuote, quoteReducer } from "../features/QuoteSlice";

export default configureStore({
  reducer: {
    quotes:quoteReducer,
  },
});
