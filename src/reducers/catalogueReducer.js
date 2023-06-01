import _ from 'lodash';

import { SAVE_INITIAL_PRODUCTS_LIST, SAVE_INITIAL_CATEGORIES_LIST } from '../actions/catalogue';

export const initialState = {
};

//Function that will modify the store according to an action
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        //Here we initiate the products list, retrieve by the middleware
        case SAVE_INITIAL_PRODUCTS_LIST:
            return {
                ...state,
                products: action.products
            }

        case SAVE_INITIAL_CATEGORIES_LIST:
            return {
                ...state,
                categories: action.categories
            }

        default:
            return state;
    }
};

export default reducer;
