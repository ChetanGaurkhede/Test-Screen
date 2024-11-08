import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("productData");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Error loading data from local storage", e);
    return [];
  }
};

const productSlice = createSlice({
  name: "product",
  initialState: loadState(),
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export const selectProducts = (state) => state.product;
export default productSlice.reducer;
