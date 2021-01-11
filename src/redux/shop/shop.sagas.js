import {takeEvery, call, put} from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

export function* fetchCollectionsAsync() {
  yield console.log('fetch collections async fired');

  try {
    const collectionsRef = firestore.collection('collections');
    const snapShot = yield collectionsRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
