//The list of actions that will be called by the middleware and the app's components to update the store
export const ADD_A_PRODUCT_TO_CART = 'ADD_A_PRODUCT_TO_CART';
export const REMOVE_A_PRODUCT_FROM_CART = 'REMOVE_A_PRODUCT_FROM_CART';

export const addProductToCart = (productId) => ({
    type: ADD_A_PRODUCT_TO_CART,
    product
})

export const removeProductFromCart = (productId) => ({
    type: REMOVE_A_PRODUCT_FROM_CART,
    productId
})

