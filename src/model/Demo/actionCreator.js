import { ADD_ITEM, DELETE_ITEM, GET_LIST, SAVE_LIST } from './actionType';

const addItemAction = data => ({
  type: ADD_ITEM,
  data,
});

const deleteItemAction = data => ({
  type: DELETE_ITEM,
  data,
});

const getListAction = () => ({
  type: GET_LIST,
});

const saveListAction = data => ({
  type: SAVE_LIST,
  data,
});

export { addItemAction, deleteItemAction, getListAction, saveListAction };