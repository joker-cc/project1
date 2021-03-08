import { ADD_ITEM, DELETE_ITEM, SAVE_LIST } from './actionType';

const defaultState = {
  list: [ 1, 2 ],
};

const reducer = (state = defaultState, action) => {
  const { data } = action;

  switch(action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        list: state.list.concat(data),
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        list: state.list.filter((item, index) => index !== data),
      };
    }
    case SAVE_LIST: {
      return {
        ...state,
        list: data,
      };
    }
    default: return state;
  }
}

export default reducer;