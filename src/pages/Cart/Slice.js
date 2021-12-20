import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      return state.filter((cart) => cart.product.id !== action.payload.product.id);
    },
    addOrUpdateItem: (state, action) => {
      const item = state.filter((cart) => cart.product.id === action.payload.product.id);
      if (item.length > 0) {
        item[0].quantity = action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    clearItems: (state) => {
      return [];
    },
  },
});
export const { removeItem, clearItems, addOrUpdateItem } = cartSlice.actions;
export default cartSlice.reducer;
