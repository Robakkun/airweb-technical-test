import {
    FETCH_INITIAL_PRODUCTS_LIST,
    FETCH_INITIAL_CATEGORIES_LIST,
    saveInitialProductsList,
    saveInitialCategoriesList
} from '../actions/catalogue';

import _ from 'lodash'

//Function of store that get caught before reducers process. This is used to do async process like calling an API to generate or update the store
const catalogueMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        //Here I retrieve the products list from the API
        case FETCH_INITIAL_PRODUCTS_LIST:
            fetch("https://test-feed.airweb.workers.dev/products")
                .then(response => {
                    response.json()
                        .then(result => {
                            if (!_.isEmpty(result)) {
                                store.dispatch(saveInitialProductsList(result));
                            }
                        })
                })
                .catch(error => console.log('Error in products\' fetch request : ' + error.message));
            break;

        //Here I retrieve the categories list from the API
        case FETCH_INITIAL_CATEGORIES_LIST:
            fetch("https://test-feed.airweb.workers.dev/categories")
                .then(response => {
                    response.json()
                        .then(result => {
                            if (!_.isEmpty(result)) {
                                store.dispatch(saveInitialCategoriesList(result));
                            }
                        })
                })
                .catch(error => console.log('Error in categories\' fetch request : ' + error.message));
            break;
        default:
    }
    next(action);
};

export default catalogueMiddleware;
