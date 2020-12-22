import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import basketReducer from './basket/basket.reducer';

const persistConfiguration = {
  key: 'root',
  storage,
  whitelist: ['basket'],
};

const rootReducer = combineReducers({
  user: userReducer,
  basket: basketReducer,
});

export default persistReducer(persistConfiguration, rootReducer);
