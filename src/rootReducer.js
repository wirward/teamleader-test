import {combineReducers} from 'redux';
import orders from './orders';
import products from './products';

export default combineReducers({
    orders: orders.reducer,
    products: products.reducer
  }
)
