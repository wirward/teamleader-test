import Api from './../teamleader-api';

const namespace = 'products';

export const types = {
    FETCH_PRODUCTS: `${namespace}/FETCH_PRODUCTS`,
    FETCH_PRODUCTS_COMPLETED: `${namespace}/FETCH_PRODUCTS_COMPLETED`
}

export function fetchProducts() {
    return dispatch => {
        dispatch({type: types.FETCH_PRODUCTS});
        new Api().getProducts().then(products => {
            dispatch({type: types.FETCH_PRODUCTS_COMPLETED, payload: {products}});
        });
    }
}
