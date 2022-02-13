

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "../reducer/authReducer";
import { uiReducer } from "../reducer/uiReducer";
import {datosReducer} from "../reducer/datosReducer"









const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    data: datosReducer
}

)

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;





export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
) 