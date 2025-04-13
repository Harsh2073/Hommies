import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import propertyReducer from './features/propertySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertyReducer,
  },
});

export default store; // 👈 Make sure this is here!
