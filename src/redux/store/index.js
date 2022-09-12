import { configureStore, combineReducers } from '@reduxjs/toolkit'
import favouriteReducer from '../reducers/favouriteReducer'


const bigReducer = combineReducers({

  fav: favouriteReducer
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
