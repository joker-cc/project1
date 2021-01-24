import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_LIST } from './actionType';
import { saveListAction } from './actionCreator';

function* fetchList() {
  try {
    yield axios.get('https://www.baidu.com');
  } catch(err) {
  }
  yield put(saveListAction(['test']));
}

function* getList() {
  yield takeEvery(GET_LIST, fetchList);
}

export default getList;