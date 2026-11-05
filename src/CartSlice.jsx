import { createSlice } from '@reduxjs/toolkit';

// Redux Toolkit uses Immer, allowing these immutable state updates to be written simply.
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...product, quantity: 1 });
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (!Number.isInteger(quantity) || quantity < 0) return;
      if (quantity === 0) {
        state.items = state.items.filter(item => item.id !== id);
        return;
      }
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartQuantity = state => state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = state => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export default cartSlice.reducer;
