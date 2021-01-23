import {all, call} from 'redux-saga/effects';
import {userSagas} from './user/user.sagas';
import {basketSagas} from './basket/basket.sagas';
import {fetchCollectionsStart} from './shop/shop.sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas), call(basketSagas)]);
}
