//effects
import { call, put, takeEvery } from 'redux-saga/effects';

//actions type
import { GET_ITEMS, GET_ITEMS_ASYNC } from './actions';

//services
import { geItemsService } from './services';

//types
import { SagaIterator } from 'redux-saga';

export function* getItemsWorker(): SagaIterator {
  try {
    const items = yield call(geItemsService);
    yield put({
      type: GET_ITEMS,
      payload: items,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* getItemsWatcher(): Generator {
  yield takeEvery(GET_ITEMS_ASYNC, getItemsWorker);
}
