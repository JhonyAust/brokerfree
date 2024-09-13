import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of a product
interface Product {
  title: string;
  newCost: number;
  actualcost: number;
}

// Define the structure of the cart state
interface CartState {
  items: Product[];
  totalAmount: number;
  totalItems: number;
}

// Initial state
const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.title === action.payload.title);
      
      if (existingItem) {
        // If the item exists, update its total cost
        existingItem.newCost += action.payload.newCost;
        state.totalAmount += action.payload.newCost;
      } else {
        // If item doesn't exist, add new item to cart with actualcost
        state.items.push(action.payload);
        state.totalAmount += action.payload.newCost;
        state.totalItems += 1;
      }
    },
    
    // Remove item from cart
    removeItemFromCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.title === action.payload.title);

      if (existingItem) {
        // Reduce the newCost from the existing item's cost
        existingItem.newCost -= action.payload.newCost;

        // Update the totalAmount
        state.totalAmount -= action.payload.newCost;

        // If the item's cost is reduced to zero, remove the item completely
        if (existingItem.newCost <= 0) {
          state.items = state.items.filter(item => item.title !== action.payload.title);
          state.totalItems -= 1; // Decrease total items only when the item is removed
        }
      }
    },
    
    // Clear the entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalItems = 0;
    },
  },
});

// Export actions and reducer
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
