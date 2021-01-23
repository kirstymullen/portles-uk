import {all, call, takeLatest, put} from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import {clearBasket} from './basket.actions';

export function* clearBasketOnSignOut() {
  yield put(clearBasket());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearBasketOnSignOut);
}

export function* basketSagas() {
  yield all([call(onSignOutSuccess)]);
}
