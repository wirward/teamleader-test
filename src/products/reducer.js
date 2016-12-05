import {types} from './actions';

export default function productsReducer(state = [], action) {
    switch (action.type) {
        case types.FETCH_PRODUCTS_COMPLETED:
            return action.payload.products;
        default:
            return state;
    }
}
