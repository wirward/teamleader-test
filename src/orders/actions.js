import Api from './../teamleader-api';

const namespace = 'orders';

export const types = {
  FETCH_ORDERS: `${namespace}/FETCH_ORDERS`,
  FETCH_ORDERS_COMPLETED: `${namespace}/FETCH_ORDERS_COMPLETED`,
  FETCH_ORDER_DETAIL: `${namespace}/FETCH_ORDER_DETAIL`,
  FETCH_ORDER_DETAIL_COMPLETED: `${namespace}/FETCH_ORDER_DETAIL_COMPLETED`,
  REMOVE_PRODUCT_FROM_ORDER: `${namespace}/REMOVE_PRODUCT_FROM_ORDER`,
  ADD_PRODUCT_TO_ORDER: `${namespace}/ADD_PRODUCT_TO_ORDER`,
  PLACE_ORDER: `${namespace}/PLACE_ORDER`,
}

export function fetchOrders(){
  const api = new Api();
  return dispatch => {
    dispatch({type: types.FETCH_ORDERS});
    api.getOrders().then(orders => {
      dispatch({type: types.FETCH_ORDERS_COMPLETED, payload: { orders }});
    });
  }
}

export function fetchOrderDetail(orderId){
  const api = new Api();
  return dispatch => {
    dispatch({type: types.FETCH_ORDER_DETAIL, payload: { orderId }});
    api.getOrderDetail(orderId).then(order => {
      dispatch({type: types.FETCH_ORDER_DETAIL_COMPLETED, payload: { order}});
    });
  }
}

export function removeProductFromOrder(orderId, productId){
  return {type: types.REMOVE_PRODUCT_FROM_ORDER, payload: {orderId, productId}};
}

export function addProductToOrder(orderId, product){
  return {type: types.ADD_PRODUCT_TO_ORDER, payload: {orderId, product}};
}

export function placeOrder(orderId){
  return (dispatch, getState) => {
    const order = getState().orders.data.find(order => order.id === orderId);
    console.debug('Place order', order);
  }
}
