import { createSlice } from '@reduxjs/toolkit'

export const DetailsSlice = createSlice({
  name: 'allDetail',
  initialState: {
    value: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload)
    },
    removeUser: (state, action) => {
      if (action.payload === 0) {
        state.value.shift()
      } else {
        state.value.splice(action.payload, action.payload)
      }
    },
  },
})

export const { addUser, removeUser } = DetailsSlice.actions

export default DetailsSlice.reducer
