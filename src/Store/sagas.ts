//effects
import { all, fork } from 'redux-saga/effects';

//watchers
import { getItemsWatcher } from './items/sagas';

export default function* rootSaga() {
  yield all([fork(getItemsWatcher)]);
}
