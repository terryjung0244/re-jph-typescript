import { configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import jphReducer from "../../redux/jph/jphReducer";
import { jphSagaWatcher } from "../../redux/jph/jphSaga";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([
    //validSagaWatcher
    jphSagaWatcher(),
  ]);
}

export const createStore = () =>
  configureStore({
    reducer: {
      // validReducer
      jphReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });

export const store = createStore();

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
