import { configureStore } from "@reduxjs/toolkit";
import addCartSlice from "../cart/addCartSlice";
import productsSlice from "../products/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cartProducts: addCartSlice.reducer,
  },
});

export default store;
