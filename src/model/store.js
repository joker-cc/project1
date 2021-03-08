import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import demoReducer from './Demo/redecer';
import getList from './Demo/effect';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(demoReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(getList);

export default store;