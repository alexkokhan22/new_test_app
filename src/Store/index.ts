// Redux
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { itemsList } from './items/reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    itemsList,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
