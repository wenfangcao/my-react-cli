import { createStore, combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}
const reducer = function(state=initialState, action) {
  switch (action.type) {
    case 'ADD': { 
      state.cart = [
        {now: 'heiheiheih'}
      ]
    }
    default:
      return state
  }
}
// const productsReducer = function(state=[], action) {
//   return state;
// }

// const allReducers = {
//   products: productsReducer,
//   reducer: reducer
// }

// const rootReducer = combineReducers(allReducers);

const rootReducer = combineReducers({
  reducer,
  routing: routerReducer
})
const store = createStore(rootReducer);

export default store
