import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const client = axios.create({
  baseURL: "https://dummyjson.com/carts",
});
const initialState = {
  cartProducts: [],
  totlaPrice: 0,
  status: "idle",
  error: null,
};

export const postCarts = createAsyncThunk(
  "cartProducts/postCarts",
  async (initialPost) => {
    const response = await client.post("/add", initialPost);
    return response.data;
  }
);

const addCartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const productToBeAdded = { ...action.payload, quantity: 1 };
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === productToBeAdded.id
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].quantity++;
        state.totlaPrice += productToBeAdded.price;
      } else {
        state.cartProducts = state.cartProducts.concat(productToBeAdded);
        state.totlaPrice = state.totlaPrice += productToBeAdded.price;
      }
    },
    handleIncrement: (state, action) => {
      state.quantity = state.quantity++;
    },
    handleDecrement: (state, action) => {
      state.quantity = state.quantity--;
    },
    handleDelete: (state, action) => {
      const { id } = action.payload;
      const wantedProducts = state.cartProducts.filter(
        (product) => product.id !== id
      );
      state.cartProducts = wantedProducts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postCarts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postCarts.fulfilled, (state, action) => {
        state.status = "success";
        state.cartProducts = state.cartProducts.concat(action.payload);
      })
      .addCase(postCarts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  addProductToCart,
  handleIncrement,
  handleDecrement,
  handleDelete,
} = addCartSlice.actions;

export default addCartSlice;
