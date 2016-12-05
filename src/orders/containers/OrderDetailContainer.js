import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import OrderDetail from './../components/OrderDetail';

import * as actions from './../actions';

class OrderDetailContainer extends React.Component {
    componentDidMount() {
        this.props.fetchOrderDetail(this.props.orderId);
    }
    render() {
        return (

                <OrderDetail {...this.props} />
        
        );
    }
}

const mapStateToProps = (state, props) => {
    const isFetching = state.orders.fetchingDetail;
    const order = state.orders.data.find(o => o.id === props.params.orderId);
    const orderData = isFetching ? null : {
       ...order,
       items: order.items.map(item => ({...item, product: state.products.find(p => p.id === item['product-id'])}))
    };

    return {orderId: props.params.orderId, order: orderData, isFetching}
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrderDetail: (orderId) => dispatch(actions.fetchOrderDetail(orderId)),
        addProductToOrder: (orderId, product) => dispatch(actions.addProductToOrder(orderId, product)),
        removeProductFromOrder: (orderId, productId) => dispatch(actions.removeProductFromOrder(orderId, productId)),
        placeOrder: orderId => dispatch(actions.placeOrder(orderId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailContainer);
