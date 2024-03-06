import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import userReducer from './userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
});

export default store 