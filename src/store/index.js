import {  configureStore } from '@reduxjs/toolkit'
 

import { reducer } from './user-slice'
 

export const store = configureStore({
  reducer: {
    user: reducer,
  },
})

 

 