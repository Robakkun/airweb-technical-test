//The list of actions that will be called by the middleware and the app's components to update the store
export const FETCH_INITIAL_PRODUCTS_LIST = 'FETCH_INITIAL_PRODUCTS_LIST';
export const FETCH_INITIAL_CATEGORIES_LIST = 'FETCH_INITIAL_CATEGORIES_LIST';
export const SAVE_INITIAL_PRODUCTS_LIST = 'SAVE_INITIAL_PRODUCTS_LIST';

export const fetchInitialProductsList = (categories) => ({
    type: FETCH_INITIAL_PRODUCTS_LIST,
    categories: categories
})

export const fetchInitialCategoriesList = () => ({
    type: FETCH_INITIAL_CATEGORIES_LIST,
})

export const saveInitialProductsList = (products) => ({
    type: SAVE_INITIAL_PRODUCTS_LIST,
    products: products
})

