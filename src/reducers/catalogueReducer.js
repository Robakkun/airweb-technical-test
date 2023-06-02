import _ from 'lodash';

import { SAVE_INITIAL_PRODUCTS_LIST } from '../actions/catalogue';

export const initialState = {
    products: []
};

//Function that will modify the store according to an action
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        //Here we initiate the products list, retrieve by the middleware
        case SAVE_INITIAL_PRODUCTS_LIST:
            return {
                products: action.products
            }

        default:
            return state;
    }
};

export default reducer;
