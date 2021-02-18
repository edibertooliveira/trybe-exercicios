import { put, takeLatest } from 'redux-saga/effects';
import { GET_SUBREDDIT, FAILED_REQUEST } from '../type';

function* asyncAddTodo(action) {
  try {
    yield put({ type: GET_SUBREDDIT, payload: { action } });
  } catch (err) {
    yield put({ type: FAILED_REQUEST, message: err });
  }
}

export default function* root() {
  yield [takeLatest('ASYNC_GET_SUBREDDIT', asyncAddTodo)];
}
