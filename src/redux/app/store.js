import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../products/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export default store;
