

import { configureStore, } from "@reduxjs/toolkit"
import userReducer from "./userSlice"

const store = configureStore({
  reducer:{
    user: userReducer
  }
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store