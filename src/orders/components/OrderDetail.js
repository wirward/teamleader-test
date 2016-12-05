import React from 'react';
import products from './../../products';
import _ from 'lodash';
const formatPrice = amount => Number(amount).toFixed(2);

export default class OrderDetail extends React.Component {
    render() {
        const {order, removeProductFromOrder, placeOrder, addProductToOrder} = this.props;
        return (this.props.isFetching
            ? <div>Loading...</div>
            : <div>
                <h2>Order {order.id}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Description</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items.length
                            ? _.sortBy(order.items, 'product-id').map(item => (
                                <tr key={item['product-id']}>
                                    <td>{item['product-id']}</td>
                                    <td>{item['product'] && item['product'].description}</td>
                                    <td>{formatPrice(item['unit-price'])}</td>
                                    <td>{item['quantity']}</td>
                                    <td style={{textAlign:'right'}}>{formatPrice(item['total'])}</td>
                                    <td>
                                        <button onClick={() => removeProductFromOrder(order.id, item['product-id'])}>delete</button>
                                    </td>
                                </tr>))
                            : (<tr>
                                <td colSpan={4}>No products in order</td>
                            </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="4" style={{textAlign:'left'}}>Total</th>
                            <th>{formatPrice(order.total)}</th>
                        </tr>

                    </tfoot>
                </table>
                <button onClick={() => placeOrder(order.id)}>Place Order</button>
                <h2>Products</h2>
                <products.containers.ProductsContainer onAddToOrder={(product) => addProductToOrder(order.id, product)} />
            </div>);
    }
}
