import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import listingsReducer from '../features/Listings/ListingsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    listings: listingsReducer,
    
  },
});
