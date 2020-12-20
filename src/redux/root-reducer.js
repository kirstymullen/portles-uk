import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import basketReducer from './basket/basket.reducer';

export default combineReducers({
  user: userReducer,
  basket: basketReducer,
});
