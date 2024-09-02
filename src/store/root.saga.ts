import { all } from 'redux-saga/effects';
import { watchProductsSagas } from './loans/sagas';
export default function* sagas() {
  yield all([watchProductsSagas()]);
}
