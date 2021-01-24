import { ADD_ITEM, DELETE_ITEM } from './actionType';

const addItemAction = data => ({
  type: ADD_ITEM,
  data,
});

const deleteItemAction = data => ({
  type: DELETE_ITEM,
  data,
});

export { addItemAction, deleteItemAction };