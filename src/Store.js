import { configureStore } from '@reduxjs/toolkit'
import AllDetailsReducer from './Details'

export default configureStore({
  reducer: {
    allDetail: AllDetailsReducer,
  },
})
