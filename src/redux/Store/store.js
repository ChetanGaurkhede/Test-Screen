import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/reducer";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.product);
    localStorage.setItem("productData", serializedState);
  } catch (e) {
    console.warn("Error saving data to local storage", e);
  }
};

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

store.subscribe(() => saveState(store.getState()));

export default store;
