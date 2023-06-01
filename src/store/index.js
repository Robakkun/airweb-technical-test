import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import catalogueMiddleware from '../middlewares/catalogueMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        catalogueMiddleware,
    ),
);

const store = createStore(reducer, enhancers);

export default store;
