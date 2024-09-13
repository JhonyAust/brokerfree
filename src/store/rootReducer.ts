// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import cartReducer from '../features/cartSlice';
// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  cart:cartReducer,
});

// Export RootState type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
