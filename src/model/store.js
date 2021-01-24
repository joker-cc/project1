import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import demo1Reducer from './Demo1/redecer';
import getList from './Demo1/effect';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(demo1Reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(getList);

export default store;