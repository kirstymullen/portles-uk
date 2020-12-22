import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import basketReducer from './basket/basket.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfiguration = {
  key: 'root',
  storage,
  whitelist: ['basket'],
};

const rootReducer = combineReducers({
  user: userReducer,
  basket: basketReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfiguration, rootReducer);
