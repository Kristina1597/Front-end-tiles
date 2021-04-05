import gameReducer from "./gameReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";

let reducer = combineReducers({
    game: gameReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.__store__ = store;

export default store;