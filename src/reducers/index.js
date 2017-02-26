import {combineReducers} from 'redux';
import productsReducer from './products-reducer'
import userReducer from './users-reducer'
import categoryReducer from './category-reducer'


const rootReducer = combineReducers({
    productsReducer: productsReducer,
    userReducer: userReducer,
    categoryReducer: categoryReducer
});

export default rootReducer;
