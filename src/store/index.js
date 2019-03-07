import { createStore, applyMiddleware, compose } from 'redux'
import  thunk  from 'redux-thunk'
import rootReducer from './reducers'
const devTools = ISDEV ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
let store = createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk),
    devTools
));

//window.store = store;
export default store;
