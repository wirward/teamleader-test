import {types} from './actions';
import _ from 'lodash';

function calculateOrderTotal(items){
    return Number((_.sum(items.map(item => item['unit-price'] * item['quantity']))).toFixed(2));
}
export default function ordersReducer(state = {
    isFetching: true,
    fetchingDetail: true,
    data: []
}, action) {
    switch (action.type) {

        case types.FETCH_ORDERS:
            return {
                ...state,
                isFetching: true
            };

        case types.FETCH_ORDERS_COMPLETED:
            {
                const {orders} = action.payload;
                return {
                    ...state,
                    isFetching: false,
                    data: orders
                };
            }

            case types.FETCH_ORDER_DETAIL:
                return {
                    ...state,
                    fetchingDetail: true
                };

            case types.FETCH_ORDER_DETAIL_COMPLETED:
                {
                    const {order} = action.payload;
                    return {
                        ...state,
                        fetchingDetail: false,
                        data: [...state.data.filter(o => o.id !== order.id), order]
                    };
                }
            case types.REMOVE_PRODUCT_FROM_ORDER:
                {
                    const {orderId, productId} = action.payload;
                    const order = state.data.find(o => o.id === orderId);
                    const changedItems = order.items.filter(item => item['product-id'] !== productId);
                    const changedOrder = {
                        ...order,
                        items: changedItems,
                        total: calculateOrderTotal(changedItems)
                    };
                    return {
                        ...state,
                        isFetching: false,
                        data: [...state.data.filter(o => o.id !== order.id), changedOrder]
                    };
                }
            case types.ADD_PRODUCT_TO_ORDER:
                {
                    const {orderId, product} = action.payload;
                    const order = state.data.find(o => o.id === orderId);
                    const existingItem = order.items.find(item => item['product-id'] === product.id);
                    
                    let newItem;
                    if(existingItem){
                        const newQuantity = existingItem.quantity + 1;
                        const newTotal = existingItem['unit-price'] * newQuantity;//should not be in store
                        newItem = {...existingItem, quantity: newQuantity, total: newTotal}
                    }else{
                        newItem = {
                          "product-id": product.id,
                          "quantity": 1,
                          "unit-price": product.price,
                          "total": product.price // should not be in store
                      };
                    }

                    const changedItems = [...order.items.filter(item => item['product-id'] !== product.id), newItem];
                    const changedOrder = {
                        ...order,
                        items: changedItems,
                        total: calculateOrderTotal(changedItems),
                    };
                    return {
                        ...state,
                        isFetching: false,
                        data: [...state.data.filter(o => o.id !== order.id), changedOrder]
                    };
                }

        default:
            return state;

    }
}
