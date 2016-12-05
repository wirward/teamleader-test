import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, Redirect } from 'react-router'

import rootReducer from './rootReducer'
import thunk from 'redux-thunk';

import AppLayout from './AppLayout';
import orders from './orders';
import NoMatch from './NoMatch';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Redirect from="/" to="orders" />
          <Route path="/" component={AppLayout}>
            <Route path="orders" component={orders.containers.OrdersContainer} />
            <Route path="orders/:orderId" component={orders.containers.OrderDetailContainer} />
            <Route path="*" component={NoMatch}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}
