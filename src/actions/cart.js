//The list of actions that will be called by the middleware and the app's components to update the cart store
export const ADD_A_PRODUCT_TO_CART = 'ADD_A_PRODUCT_TO_CART';
export const REMOVE_A_PRODUCT_FROM_CART = 'REMOVE_A_PRODUCT_FROM_CART';
export const RESET_CART = 'RESET_CART';

export const addProductToCart = (product) => ({
    type: ADD_A_PRODUCT_TO_CART,
    product
})

export const removeProductFromCart = (productId) => ({
    type: REMOVE_A_PRODUCT_FROM_CART,
    productId
})

export const resetCart = () => ({
    type: RESET_CART
})
