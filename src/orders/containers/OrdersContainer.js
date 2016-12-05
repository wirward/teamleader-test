import React from 'react';
import {connect} from 'react-redux';

import Orders from './../components/Orders';
import {fetchOrders} from './../actions';

class OrdersContainer extends React.Component {
    componentDidMount() {
        this.props.fetchOrders();
    }
    render() {
        return (<Orders {...this.props} />);
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.data,
        isFetching: state.orders.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
