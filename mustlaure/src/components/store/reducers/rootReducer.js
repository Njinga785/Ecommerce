import userReducer from './userReducer' 
import productsReducer from './productsReducer' 
import {combineReducers} from 'redux' 

const rootReducer = combineReducers({
    user: userReducer, 
    products: productsReducer
}) 

export default rootReducer