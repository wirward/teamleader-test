import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const OrderSummary = ({order}) => (
    <tr>
        <td>{order.id}</td>
        <td>{order.items.length}</td>
        <td>€ {order.total}</td>
        <td>
            <Link to={`/orders/${order.id}`}>View</Link>
        </td>
    </tr>
);

OrderSummary.propTypes = {
    order: PropTypes.shape({
        id: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        total: PropTypes.number.isRequired
    }).isRequired
}

class Orders extends React.Component {
    render() {
        const {orders, isFetching} = this.props;
        return (
            <div>
                {isFetching
                    ? <div>Loading...</div>
                    : (
                        <table>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Items</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map(order => (<OrderSummary key={order.id} order={order}/>))}
                            </tbody>
                        </table>
                    )}
            </div>
        );
    }
}

Orders.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired})).isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default Orders;
