import _ from 'lodash';

import { ADD_A_PRODUCT_TO_CART, REMOVE_A_PRODUCT_FROM_CART, RESET_CART } from '../actions/cart';

export const initialState = {
    cartList: []
};

//Function that will modify the store according to an action
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        //Update the store by adding the selected product when the user clicks on the addToCart button
        case ADD_A_PRODUCT_TO_CART:
            const cartList = [...state.cartList];
            cartList.push(action.product);

            return {
                cartList: cartList
            }

        //Update the store by removing the selected product when the user clicks on the deleteFromCart button
        case REMOVE_A_PRODUCT_FROM_CART:
            return {
                cartList: _.reject(state.cartList, product => product.id === action.productId)
            }

        case RESET_CART:
            return {
                cartList: []
            }

        default:
            return state;
    }
};

export default reducer;
