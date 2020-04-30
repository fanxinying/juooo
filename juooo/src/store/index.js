import {createStore,applyMiddleware} from "redux";
import thunk from "thunk"
import reducer from "./reducer"
//支持异步action
export default createStore(reducer,applyMiddleware(thunk))