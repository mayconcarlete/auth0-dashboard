import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
  name: "user",
  initialState: {
    user: undefined,
  },
  reducers:{
    changeUser(state, { payload }){
      return {...state, user: payload}
    },
    logout(state){
      return {...state, user: undefined}
    }
  }
})

export const { changeUser, logout} = slice.actions
export const selectUser = (state:any) => state.user
export default slice.reducer