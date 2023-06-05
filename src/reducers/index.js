import { combineReducers } from 'redux';

import catalogueReducer from './catalogueReducer';
import cartReducer from './cartReducer';

//Merge all the existing reducers in a unique one
const rootReducer = combineReducers({
    catalogueReducer: catalogueReducer,
    cartReducer: cartReducer,
});

export default rootReducer;
