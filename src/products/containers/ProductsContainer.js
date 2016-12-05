import React from 'react';
import Products from './../components/Products';
import {fetchProducts} from './../actions';
import {connect} from 'react-redux';

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        return (<Products {...this.props}/>);
    }
}

const mapStateToProps = (state, props) => {
    const excludedProducts = props.excludedProducts || [];
    const products = state.products.filter(p => !excludedProducts.includes(p.id));
    return { products, onAddToOrder: props.onAddToOrder };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
