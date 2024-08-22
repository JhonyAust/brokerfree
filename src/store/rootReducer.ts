// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Export RootState type
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
