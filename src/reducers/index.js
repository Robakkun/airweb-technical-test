import { combineReducers } from 'redux';

import catalogueReducer from './catalogueReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    catalogueReducer: catalogueReducer,
    cartReducer: cartReducer,
});

export default rootReducer;
