import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import userReducer from './userReducer';
import menuReducer from './menuReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
});

export default store 