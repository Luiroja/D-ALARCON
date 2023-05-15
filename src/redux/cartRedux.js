import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const item = state.products.find((product) => product._id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
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
        state.products.splice(
          // I'll have resolve bug with the item deleted specify in (===)
          state.products.findIndex((item) => item._id === action.payload.id),
          1
        );

      }
      
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  }
);

// Note: the selector functions need to access the correct state from root.
// This is dictated by how you combine reducers and structure the reducer tree.
// This is just an example since I've no idea what the overall state
// looks like, it assumes `cart` is a root reducer/state property.
export const cartQuantitySelector = (state) => state.cart.products.reduce(
  (quantity, item) => quantity + item.quantity,
  0
);
export const cartTotalSelector = (state) => state.cart.products.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);



export const { 
  addProduct,
  clearCart,
  deleteProductStart, 
  deleteProductSuccess, 
  deleteProductFailure } = cartSlice.actions;
export default cartSlice.reducer;
