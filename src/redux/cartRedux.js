import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    clearCart: (state) => {
      state.products = [];
    },
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.quantity -= 1;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
      //agregar aquí la función para restar el total en el RESUMEN DE COMPRA
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
});

export const { 
  addProduct,
  clearCart,
  deleteProductStart, 
  deleteProductSuccess, 
  deleteProductFailure } = cartSlice.actions;
export default cartSlice.reducer;