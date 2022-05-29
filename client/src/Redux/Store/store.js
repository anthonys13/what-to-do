import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../Reducers/ListsReducer';

import ListsMiddleware from '../Middlewares/ListsMiddleWares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(ListsMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;