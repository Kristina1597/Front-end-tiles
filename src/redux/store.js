import gameReducer from "./gameReducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    game: gameReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.__store__ = store;

export default store;