import {combineReducers} from "redux";

import {filtersReducer} from "./filtersReducer";
import {cartReducer} from './cartReducer';
import {productReducer} from "./productReducer";
import {loginReducer} from "./loginReducer";



export default combineReducers(
    {
        filtersReducer,
        productReducer,
        cartReducer,
        loginReducer
    }
)