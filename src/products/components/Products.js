import React, {PropTypes} from 'react';

export default class Products extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => this.props.onAddToOrder(product)}>Add To Order</button></td>
                        </tr>
                    ))}</tbody>
            </table>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired
};
