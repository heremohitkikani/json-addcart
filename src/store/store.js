import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from '../counterslice.js/slice'

export const store = configureStore({
  reducer: {
    counter:counterSlice
  },
})