import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './components/app';
import ProductList from './components/product-list'
import AddProduct from './components/add-product'
import Signup from './components/sign-up'
import LogIn from './components/log-in'
import ProductPage from './components/product-page'
import NewUser from './components/new-user'

import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ProductList}/>
                <Route path="/sign-up" component={Signup}/>
                <Route path="/log-in" component={LogIn}/>
                <Route path="/add-product" component={AddProduct}/>
                <Route path="/new-user" component={NewUser}/>
                <Route path="/product-page/:id" component={ProductPage}/>
            </Route>
        </Router>
    </Provider>
, document.querySelector('.container'));
